import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_UNDO_TASKS_REQUEST,
  GET_UNDO_TASKS_SUCCESS,
  GET_UNDO_TASKS_FAILURE,
  GET_COMPLETE_TASKS_REQUEST,
  GET_COMPLETE_TASKS_SUCCESS,
  GET_COMPLETE_TASKS_FAILURE
} from '../actions/apiFSAs';

export function user(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const userInfo = {
        // TODO fix me for real payload
        id: action.payload.userID,
        name: action.payload.userName || '',
        email: action.payload.userEmail || '',
        organizationID: action.payload.organizationID,
        token: action.payload.token
      };
      return userInfo;
    }
    default:
      return state;
  }
}

export function undoTasks(state = {}, action) {
  switch (action.type) {
    case GET_UNDO_TASKS_SUCCESS: {
      const task = {
        // TODO fix me for real payload
        id: action.payload.id,
        title: action.payload.title,
        startTime: action.payload.startTime || '',
        endTime: action.payload.endTime || '',
        facilities: action.payload.facilities,
        completeFacilities: [],
        needUploadFacilities: []
      };
      const taskItem = {};
      taskItem[task.id] = task;
      return Object.assign({}, state, taskItem);
    }
    // Other cases
    // ...
    default:
      return state;
  }
}

// TODO
// define other reducers:
// completeTasks
// facilities
// checkPatterns
// checks
// checkItems
