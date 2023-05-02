export const initialState = {
    isLoggedIn: false,
    active: "",
    sidebar: true,
    showSidebar: false,
  };
  
  export const stateReducer = (state, action) => {
    switch (action.type) {
      case "SET_ACTIVE":
        return {
          ...state,
          active: action.payload,
        };
      case "TOGGLE_SIDEBAR":
        return {
          ...state,
          sidebar: !state.sidebar,
        };
      case "TOGGLE_SHOW_SIDEBAR":
        return {
          ...state,
          showSidebar: !state.showSidebar,
        };
      default:
        return state;
    }
  };