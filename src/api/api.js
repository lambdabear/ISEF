import { CALL_API } from 'redux-api-middleware';
import { dispatch } from '../store/store';

const createLoginAction = (email, password, apiUrl) => ({
  [CALL_API]: {
    endpoint: `${apiUrl}/IseUsers/login`,
    method: 'POST',
    types: ['loginREQUEST', 'loginSUCCESS', 'loginFAILURE'],
    body: JSON.stringify({
      email,
      password
    })
  }
});

const createGetUndoTasksAticon = (organizationID, userID, token, apiUrl) => ({
  [CALL_API]: {
    endpoint: `${apiUrl}/Organizations/${organizationID}/tasks`, // TODO, add query conditions
    method: 'GET',
    types: [
      'getUndoTasksREQUEST',
      'getUndoTasksSUCCESS',
      'getUndoTasksFAILURE'
    ],
    headers: JSON.stringify({
      Authorization: token
    })
  }
});

const createGetCompleteTasksAticon = (
  organizationID,
  userID,
  token,
  apiUrl
) => ({
  [CALL_API]: {
    endpoint: `${apiUrl}/Organizations/${organizationID}/tasks`, // TODO, add query conditions
    method: 'GET',
    types: [
      'getUndoTasksREQUEST',
      'getUndoTasksSUCCESS',
      'getUndoTasksFAILURE'
    ],
    headers: JSON.stringify({
      Authorization: token
    })
  }
});

// TODO
// const createGetFacilitiesAction = (...) => ({
//   [CALL_API]: {
//     ...
//   }
// })
//
// const createGetCheckPatternsAction = (...) => ({
//   [CALL_API]: {
//     ...
//   }
// })

export const login = (email, password, apiUrl) => {
  dispatch(createLoginAction(email, password, apiUrl));
};

export const getUndoTasks = (organizationID, userID, token, apiUrl) => {
  dispatch(createGetUndoTasksAticon(organizationID, userID, token, apiUrl));
};

export const getCompleteTasks = (organizationID, userID, token, apiUrl) => {
  dispatch(createGetCompleteTasksAticon(organizationID, userID, token, apiUrl));
};

// TODO
// export const getFacilities = (...) => {
//   dispatch(createGetFacilitiesAction(...));
// };
//
// export const getCheckPatterns = (...) => {
//   dispatch(createGetCheckPatternsAction(...));
// };
