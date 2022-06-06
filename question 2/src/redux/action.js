export const actionTypes = {
  // key value pair
};
// do not change names
export const addUserRequest = (id) => {
    return { type: "ADD_USER_REQUEST", payload: id};
};
// do not change names, and arguments
export const addUserSuccess = (data) => {
  return {
    type: "ADD_USER_SUCCESS",
    payload : data
  }
};
// do not change names
export const addUserFailure = (err) => {
  return {
    type: "ADD_USER_FAILURE",
    payload: err,
  };
};
