import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  user: null,
  showSidebar: true,
//   isLoggedIn: false,
};


export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state, action) => {
            state.user = action.payload
        },
        logout:(state,aution) => {
            state.user = null
        },
        toggleSidebar: (state, action ) =>{
            state.showSidebar = !state.showSidebar
        }
    }
})

export const {setUser, logout, toggleSidebar} = userSlice.actions

export const getUser = (state) => state.userInfo.user

export default userSlice.reducer