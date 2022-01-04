import axios from "axios";
import {
    URL,
    TASK_COUNT,
    TASK_LIST,
    TASK_ERROR,
    TASK_REMOVE,
    TASK_UPDATE,
    TASK_SEARCH,
} from "../../types/task";

export const getTasksCount = () => async (dispatch) => {
    let tkCount = await axios({
        method: "get",
        url: `${URL}/count`,
    });
    if (tkCount.data.err !== "") {
        dispatch({
            type: TASK_ERROR,
            payload: tkCount.data.err,
        });
    }
    if (tkCount.data.count) {
        dispatch({
            type: TASK_COUNT,
            payload: tkCount.data.count,
        });
    }
};

export const listTasks = (page, sort, order) => async (dispatch) => {
    let tkList = await axios({
        method: "get",
        url: `${URL}?page=${page}&sort=${sort}&order=${order}`,
    });
    if (tkList.data.err !== "") {
        dispatch({
            type: TASK_ERROR,
            payload: tkList.data.err,
        });
    }
    if (tkList.data) {
        dispatch({
            type: TASK_LIST,
            payload: tkList.data,
        });
    }
};

export const removeTask = (id) => async (dispatch) => {
    await axios({
        method: "delete",
        url: `${URL}/${id}`,
    });
    dispatch({
        type: TASK_REMOVE,
        payload: id,
    });
};

export const updateTask = (completed, id) => async (dispatch) => {
    let tkResp = await axios({
        method: "put",
        url: `${URL}/${id}`,
        data: { completed: completed }
    });
    dispatch({
        type: TASK_UPDATE,
        payload: tkResp.data,
    });
};

export const searchTasks = (text) => async (dispatch) => {
    let tkResp = await axios({
        method: "get",
        url: `${URL}/search?text=${text}`
    });
    dispatch({
        type: TASK_SEARCH,
        payload: tkResp.data,
    });
};