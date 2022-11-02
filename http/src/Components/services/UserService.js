import endpoints from "../api/endpoints.json";
import API from "../api/API";

class UserService {
  static createUser(user) {
    return API.post(endpoints.api.users.create, user);
  }
  static updateUser(id, user) {
    return API.put(`${endpoints.api.users.update}${id}`, user);
  }
  static deleteUser(id) {
    return API.delete(`${endpoints.api.users.delete}${id}`);
  }
  static fetchOne(id) {
    return API.get(`${endpoints.api.users.getOne}${id}`);
  }
  static fetchAll() {
    return API.get(endpoints.api.users.getOne);
  }
}

export default UserService;
