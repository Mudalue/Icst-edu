import axios from "axios";

const baseUrl = "https://tqfe-develop.herokuapp.com/ce/";

//post Request
export const postRequest = async (url, _obj) => {
  try {
    const saved = window.localStorage.getItem("@token");
    const accesstoken = JSON.parse(saved);
    const header = {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    const data = await axios.post(baseUrl + url, _obj, header);
    return data;
  } catch (error) {
    return error.response;
  }
};

//getRequest
export const getRequest = async (url) => {
  try {
    const accesstoken = "f3b715a18390d3097123869f63b14f1cdd8e4df0"
    const header = {
      headers: {
        Authorization: `Token ${accesstoken}`,
      },
    };
    const data = await axios.get(baseUrl + url, header);
    return data;
  } catch (error) {
    return error.response;
  }
};
