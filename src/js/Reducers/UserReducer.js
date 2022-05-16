import * as TT from "../action_type";

const intialState = {
  status: false,
  type: "",
  name: "",
  email: "",
  users_list: [
    
  ]
  
};

const UserReducer = (state = intialState, actions) => {
  switch (actions.type) {
    case TT.SET_USER:
      return {
        ...state,
        status: actions.data.status,
        name: actions.data.name,
        type: actions.data.type,
        email: actions.data.email,
      };
    case TT.ADD_USER:
      return {
        ...state,
        users_list: [actions.data,...state.users_list]
      };
    case TT.UPDATE_USER:
      let index = state.users_list.findIndex((user) => user.email === actions.data.email)
      let userList = state.users_list;
      userList[index] = actions.data;
      return {
        ...state,
        users_list:userList
      };
    case TT.DELETE_USER:
      return {
        ...state,
        users_list:[...actions.data]
      }
    default:
      return {
        ...state,
      };
  }
};
export default UserReducer;