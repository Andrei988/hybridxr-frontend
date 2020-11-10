import api from "../apis/api";
import { GET_POSTS, GET_POST } from "./types";

export const getPosts = () => async (dispatch) => {
  const response = await api.get("post/list");
  dispatch({ type: GET_POSTS, payload: response.data });
};

export const getPost = (id) => async (dispatch) => {
  const response = await api.get(`/post/${id}`);
  dispatch({ type: GET_POST, payload: response.data });
};
