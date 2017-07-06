import { CALL_API } from 'redux-api-middleware';

export const createLoginAction = (email, password, apiUrl) => ({
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
      'getUndoTasksREQUEST',
      'getUndoTasksSUCCESS',
      'getUndoTasksFAILURE'
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
