import { CALL_API } from 'redux-api-middleware';
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

export const createLoginAction = (email, password, apiUrl) => ({
  [CALL_API]: {
    endpoint: `${apiUrl}/IseUsers/login`,
    method: 'POST',
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    body: JSON.stringify({
      email,
      password
    })
  }
});

export const createGetUndoTasksAticon = (
  organizationID,
  userID,
  token,
  apiUrl
) => ({
  [CALL_API]: {
    endpoint: `${apiUrl}/Organizations/${organizationID}/tasks`, // TODO, add query conditions
    method: 'GET',
    types: [
      GET_UNDO_TASKS_REQUEST,
      GET_UNDO_TASKS_SUCCESS,
      GET_UNDO_TASKS_FAILURE
    ],
    headers: JSON.stringify({
      Authorization: token
    })
  }
});

export const createGetCompleteTasksAticon = (
  organizationID,
  userID,
  token,
  apiUrl
) => ({
  [CALL_API]: {
    endpoint: `${apiUrl}/Organizations/${organizationID}/tasks`, // TODO, add query conditions
    method: 'GET',
    types: [
      GET_COMPLETE_TASKS_REQUEST,
      GET_COMPLETE_TASKS_SUCCESS,
      GET_COMPLETE_TASKS_FAILURE
    ],
    headers: JSON.stringify({
      Authorization: token
    })
  }
});

// TODO
// exprot const createGetFacilitiesAction = (...) => ({
//   [CALL_API]: {
//     ...
//   }
// })
//
// export const createGetCheckPatternsAction = (...) => ({
//   [CALL_API]: {
//     ...
//   }
// })
//
// export const createPostCheckAction = (...) => ({
//   [CALL_API]: {
//     ...
//   }
// })
