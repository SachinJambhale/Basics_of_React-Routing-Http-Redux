import API from "../api/API";
import config from "../api/config.json";
const { api } = config;

class UserService {
  static createUser(user) {
    return API.post(api.users.create, user);
  }

  static updateUser(id, user) {
    return API.put(api.users.update + id, user);
  }
  static deleteUser(id) {
    return API.delete(api.users.delete + id);
  }

  static fetchOne(id) {
    return API.get(api.users.fetchOne + id);
  }
  static fetchAll(query) {
    const url = api.users.fetchAll;
    if (query) url += "?" + query;
    return API.get(url);
  }
}


export default UserService;