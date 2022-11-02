import axios from "axios";
import config from "./config.json";

const Instance = axios.create({
  baseURL: config.serverURL
});
 
export default Instance;