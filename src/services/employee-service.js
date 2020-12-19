import config from "../config/config";
import AxiosService from './axios-service.js'

export default class EmployeeService {
  baseUrl = config.baseUrl;

  addEmployee(data) {
    return AxiosService.postService(`${this.baseUrl}employee`, data);
  }
}