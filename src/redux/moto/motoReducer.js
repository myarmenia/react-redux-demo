import { BUY_MOTO } from "./motoTypes";

const initialState = {
  numOfMoto: 10,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MOTO:
      return {
        ...state,
        numOfMoto: state.numOfMoto - 1
      };
      default: 
        return state;
  }
};

export default motoReducer