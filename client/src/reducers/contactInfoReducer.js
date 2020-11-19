import { GET_COMPANY_INFO, SEND_EMAIL } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_COMPANY_INFO:
      return action.payload;
    case SEND_EMAIL:
      return action.payload;
    default:
      return state;
  }
};
