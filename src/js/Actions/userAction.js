import * as TT from "../action_type";
import { store } from '../Store'
let state = store.getState();
export const login = (data) => {
  return (dispatch) => {
    if (data.username === "admin@gmail.com" && data.password === "12345") {
      dispatch(set_user({name:"Admin",email:data.username,type:"admin",id:"admin",status:true,}))
    }
    if (data.username === "user@gmail.com" && data.password === "12345") {
      dispatch(set_user({name:"Shivam Srivastava",email:data.username,type:"user",id:"user",status:true,}))
    }
    if(true){
    }
    else {
      alert("Login Failed ")
    }
    
  }
}
export const sign_out = () => {
  return (dispatch) => {
    dispatch(set_user({ name: '', email: "", id: "", type: "", status: false }))
  }
}
export const add_new_user = (data) => {
  return (dispatch,getState) => {
    let user = getState().user.users_list.find((item) => item.email === data.email);
    if (user) {
      alert("Email is already Registered");
      return false;
    }
    if (data.email && data.name && data.phone && data.age) {
      dispatch(add_user(data))
      return true;
    }
    else if (!data.email) {
      alert("Enter Email is empty")
      return false;
    }
    else if (!data.name) {
      alert("Enter Name is empty")
      return false;
    }
    else if (!data.age) {
      alert("Enter age is empty")
      return false;
    }
    else if (!data.phone) {
      alert("Enter Phone no. is empty")
      return false;
    }  }
}
export const updating_user = (data) => {
  return dispatch => {
    if (data.email && data.name && data.phone && data.age) {
      dispatch(update_user(data))
      return true
    }
    else if (!data.email) {
      alert("Enter Email is empty")
      return false;
    }
    else if (!data.name) {
      alert("Enter Name is empty")
      return false;
    }
    else if (!data.age) {
      alert("Enter age is empty")
      return false;
    }
    else if (!data.phone) {
      alert("Enter Phone no. is empty")
      return false;
    }
  }
}
export const deleting_user = (data) => {
  return (dispatch,getState) => {
    let userList = getState().user.users_list.filter(item => (item.email !== data))
    dispatch(delete_user(userList))
  }
}

export const set_user = (data) => {
  return { type: TT.SET_USER, data };
};
export const add_user = (data) => ({
  type: TT.ADD_USER,
  data
})
export const delete_user = (data) => ({
  type: TT.DELETE_USER,
  data
})
export const update_user = (data) => ({
  type: TT.UPDATE_USER,
  data
}) 