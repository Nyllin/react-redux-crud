import {createSlice} from "@reduxjs/toolkit";
import {UsersData} from "../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: {value: UsersData},
  reducers: {
    addUser: (state,action) =>{
        state.value.push(action.payload);
        // console.log(action.payload);
    },
    removeUser: (state,action) =>{
        // console.log(action.payload)
        state.value = state.value.filter((user)=>user.id !== action.payload)
    },
    updateUser:(state,action) =>{
        state.value.map(user=>{
            if(user.id === action.payload.id){
                user.username = action.payload.username
            }
        })
    }
  }

}) 

export const {addUser,removeUser,updateUser} = userSlice.actions;
export default userSlice.reducer;