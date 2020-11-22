import { SEND_EMAIL } from "../actions/types";

const contactInfoReducer = (state = [], action) => {
  switch (action.type) {
    case SEND_EMAIL:
      return action.payload;
    default:
      return state;
  }
};

export default contactInfoReducer;
