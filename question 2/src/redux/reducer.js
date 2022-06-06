import { actionTypes } from "./action";

const initState = {
    isLoading: false,
    isError : false,
    data : []
};

function reducer(state = initState, action) {
    // write code here
    switch (action.type) {
      case "ADD_USER_REQUEST":
        return {
          ...state,
          isLoading: [true , action.payload],
        };
      case "ADD_USER_SUCCESS":
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      case "ADD_USER_FAILURE": {
        return {
            isLoading: false ,
            isError : true
        };
      }
      default: {
        return { state };
      }
    }
}

export default reducer;
