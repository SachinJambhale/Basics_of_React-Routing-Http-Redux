const express = require("express");

const bodyParser = require("body-parser");
require("./models/db");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

// common middleware
app.use(function (req, res, next) {
    //this request for all
    // to access the method of req  req.method
    console.log(req.method + "request received...");
    next();//to pass the  req to the controller we call next() methd
});
// app.use("/users", function (req, res, next) {
//     //this req for users
// });
// localhost:8080/api/users?gender=male&status=1

app.use("/api/users", require("./routes/user.route"));
app.listen(port, () => console.log(`server is listening  on port ${port}`));
