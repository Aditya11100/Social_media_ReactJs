const initialState = {
  userData: {},
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        userReducer: action.payload,
      };

    default:
      return state;
  }
};
