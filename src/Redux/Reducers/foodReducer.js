const initialData = {
  foods: [],
};

export const foodReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL_FOODS": {
      return {
        ...state,
        foods: action.payload,
      };
    }

    default:
      return state;
  }
};
