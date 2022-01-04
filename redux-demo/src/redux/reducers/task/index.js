import * as actionTypes from "../../types/task";

const initialState = {
  taskList: [],
  searchList: [],
  task: {},
  count: 0,
  searchCount: 0,
  error: null,
  msg: null,
  loading: false,
};

export const task = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TASK_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    case actionTypes.TASK_LIST:
      return {
        ...state,
        taskList: action.payload,
      };
    case actionTypes.TASK_REMOVE:
      return {
        ...state,
        count: parseInt(state.count - 1),
        taskList: state.taskList.filter(tk => tk.id !== action.payload),
      };
    case actionTypes.TASK_UPDATE:
      return {
        ...state,
        taskList: state.taskList.map(x => (x.id === action.payload.id ? { ...x, completed: action.payload.completed } : x))
      };
    case actionTypes.TASK_SEARCH:
      return {
        ...state,
        searchCount: action.payload.count,
        searchList: action.payload.data,
      };
    default:
      return state;
  }
};
