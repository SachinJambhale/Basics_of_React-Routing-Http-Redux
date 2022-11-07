const UserModel = require("../models/user.model");
const { encrypt } = require("../helpers/encryption");

class UserCtrl {
  static createUser(req, res) {
    // get the data from the request body
    const data = req.body;

    if (data?.password) data.password = encrypt(data.password);

    // console.log("File: ", req.file);
    if (req.file?.filename) data.avatar = req.file?.filename;
    // store the data in the database
    new UserModel(data).save()
      .then(result => {
        res.status(201).send({ message: "Created the user", data: result });
      }).catch(err => {
        console.log(err);
        res.status(500).send({ message: "Could not Created the user", error: err });
      });
    // send the  reponse to the cllient according the result database operation

  }//createUser

  // http://localhost:8080/users/id
  static updateUser(req, res) {
    const { id } = req.params;
    const data = req.body;

    console.log("id ", id);
    console.log("user ", data);

    // UserModel.findByIdAndUpdate(id, data, { new: true });
    UserModel.findOneAndUpdate({ _id: id }, data, { new: true })
      .then(result => {
        res.status(201).send({ message: "Updated the user", data: result });
      }).catch(err => {
        console.log(err);
        res.status(500).send({ message: "Could not updated the user", error: err });
      });
  }//updateUser
  static deleteUser(req, res) {
    const { id } = req.params;
    UserModel.deleteOne({ _id: id })
      .then(result => {
        res.status(200).send({ message: "deleted the user", data: result });
      }).catch(err => {
        console.log(err);
        res.status(404).send({ message: "Could not deleted the user", error: err });
      });
  }//deleteUser
  // http://localhost:8080/users/d8f7sd98f7ss98d7f
  static getOneUser(req, res) {
    const { id } = req.params;
    UserModel.findOne({ _id: id })
      .then(result => {
        res.status(200).send({ message: "user details", data: result });
      }).catch(err => {
        console.log(err);
        res.status(404).send({ message: "the user is not available", error: err });
      });
  }//getOneUser
  // http://localhost:8080/user?gender=male&status=1
  static getAllUsers(req, res) {
    const { gender, status } = req.query;
    const filter = {};
    if (gender) filter.gender = gender;
    if (status) filter.status = status;
    UserModel.find(filter)
      .then(result => {
        res.status(200).send({ message: "user list", data: result });
      }).catch(err => {
        console.log(err);
        res.status(404).send({ message: "the users not available", error: err });
      });
  }//getAllUsers
}
module.exports = UserCtrl;