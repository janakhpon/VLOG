import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../../utils/task.common";

export const getTasksCount = createAsyncThunk(
  "task/getTasksCount",
  async () => {
    let tkCount = await axios({
      method: "get",
      url: `${URL}/count`,
    });
    return tkCount.data.count;
  }
);

export const listTasks = createAsyncThunk(
  "task/listTasks",
  async (sortProps) => {
    const { page, sort, order } = sortProps;
    let tkList = await axios({
      method: "get",
      url: `${URL}?page=${page}&sort=${sort}&order=${order}`,
    });
    return tkList.data;
  }
);

export const createTask = createAsyncThunk(
  "task/createTask",
  async (newtask) => {
    let tkResp = await axios({
      method: "post",
      url: `${URL}`,
      data: newtask,
    });
    return tkResp.data;
  }
);

export const removeTask = createAsyncThunk("task/removeTask", async (id) => {
  await axios({
    method: "delete",
    url: `${URL}/${id}`,
  });
  return id;
});

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (newtask) => {
    let tkResp = await axios({
      method: "put",
      url: `${URL}/${newtask.id}`,
      data: newtask,
    });
    return tkResp.data;
  }
);

export const searchTasks = createAsyncThunk(
  "task/searchTasks",
  async (text) => {
    let tkResp = await axios({
      method: "get",
      url: `${URL}/search?text=${text}`,
    });
    return tkResp.data;
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState: {
    taskList: [],
    searchList: [],
    task: {},
    count: 0,
    searchCount: 0,
    error: null,
    msg: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getTasksCount.pending.toString()]: (state, action) => {
      console.log("Feting Count => getTasksCount");
    },
    [getTasksCount.fulfilled.toString()]: (state, action) => {
      state.count = action.payload;
    },
    [listTasks.fulfilled.toString()]: (state, action) => {
      state.taskList = action.payload;
    },
    [createTask.fulfilled.toString()]: (state, action) => {
      state.taskList = [...state.taskList, action.payload];
    },
    [removeTask.fulfilled.toString()]: (state, action) => {
      state.taskList = state.taskList.filter((tk) => tk.id !== action.payload);
    },
    [updateTask.fulfilled.toString()]: (state, action) => {
      state.taskList = state.taskList.map((x) =>
        x.id === action.payload.id
          ? { ...x, completed: action.payload.completed }
          : x
      );
    },
    [searchTasks.fulfilled.toString()]: (state, action) => {
      console.log("action.payload.count", action.payload.count)
      state.searchCount = action.payload.count
      state.searchList = action.payload.data
    },
  },
});

export default taskSlice.reducer;
