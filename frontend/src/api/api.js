import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";



class TakehomeApi {
  static token;

  static async request(endpoint, method = "get"){
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${TakehomeApi.token}`};

    try {
      return (await axios({ url, method})).data;
    } catch (e) {
      return e;
    }
  }

  static async register() {
    let res = await this.request('users/', 
    "post");
    return res.user; // check if res.user is correct? 
  }

}

export default TakehomeApi;