const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { name: action.name }];
    case "remove":
      return state.filter((item, index) => index !== action.index);
    default:
      return state;
  }
};

export { todoReducer };
