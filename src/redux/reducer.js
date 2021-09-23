export const ADD_ITEM = 'ADD_ITEM';
export const ADD_LOGIN = 'ADD_LOGIN';
export const REMOVE_LOGIN = 'REMOVE_LOGIN';

export const addItem = item => ({
  type: ADD_ITEM,

  payload: item,
});

export const addLogin = item => ({
  type: ADD_LOGIN,

  payload: item,
});

export const removeLogin = id => ({
  type: REMOVE_LOGIN,

  payload: id,
});

const initialState = {
  itemList: [],
  loginData:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOGIN:
      return {
        ...state,

        loginData: state.loginData.concat(action.payload),
      };
      case REMOVE_LOGIN:
      return {
        ...state,
        loginData: state.loginData.filter(item => item.id !== action.payload),
      };
    case ADD_ITEM:
      return {
        ...state,

        itemList: state.itemList.concat(action.payload),
      };
   

    default:
      return state;
  }
};

export default rootReducer;
