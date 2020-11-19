import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import contactInfoReducer from "./contactInfoReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  posts: postsReducer,
  contactInfo: contactInfoReducer,
  form: formReducer
});
