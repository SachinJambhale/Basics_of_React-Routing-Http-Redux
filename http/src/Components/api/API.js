import axios from "axios";
import endpoints from "./endpoints.json";

const API = axios.create({
  baseURL: endpoints.serverURL,
});

//Request Interceptor
API.interceptors.request.use((request) => {
  // modify the request
  request.headers["authorization"] = "TopperSkillsjhdvjjdvdbvb";

  return request;
});

// API.interceptors.response.use(success, error)

API.interceptors.response.use(
  (response) => {
    console.log("Success response...");
    return response;
  },
  (error) => {
    console.log("Error response...", error);

    if (error.response.status == 403) {
      //clearing the session details
      return Promise.reject("You need to login");
    }
    
    if (error.response.status == 404) {
      console.log("not available in iterceptor....");
    }
  }
);
export default API;
