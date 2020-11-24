import axios from "axios";

export const dev_url_clean = "https://127.0.0.1:8000/";
export const dev_url = "https://127.0.0.1:8000/api/";
export const prod_url = "https://snurfer98.pythonanywhere.com/api/";
export const prod_url_clean = "https://snurfer98.pythonanywhere.com/";

export default axios.create({ 
  baseURL: prod_url,
  headers: {
    // "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
    "X-Requested-With": "XMLHttpRequest",
  },
});
