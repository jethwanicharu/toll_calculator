// tollReducer.js
const initialState = {
  route: {
    distance: 0,
    duration: 0,
    tolls: [],
  },
  showTooltip: false,
};

const tollReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CALCULATE_TOLL':
      return {
        ...state,
        route: action.payload,
      };
    case 'TOGGLE_TOOLTIP':
      return {
        ...state,
        showTooltip: !state.showTooltip,
      };
    default:
      return state;
  }
};

export default tollReducer;