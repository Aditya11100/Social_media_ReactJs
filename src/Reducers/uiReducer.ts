const initialState = {
  showLoaded: false,
};

export const UIReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SHOW_LOADER":
      return {
        ...state,
        showLoaded: true,
      };

    case "HIDE_LOADER":
      return {
        ...state,
        showLoaded: false,
      };

    default:
      return state;
  }
};
