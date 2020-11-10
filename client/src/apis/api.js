import axios from "axios";

export const dev_url_clean = "http://127.0.0.1:8000/";
export const dev_url = "http://127.0.0.1:8000/api/";
export const prod_url = "http://snurfer98.pythonanywhere.com/api/";
export const prod_url_clean = "http://snurfer98.pythonanywhere.com/";

export default axios.create({ 
  baseURL: dev_url,
  headers: {
    // "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
    "X-Requested-With": "XMLHttpRequest",
  },
});
