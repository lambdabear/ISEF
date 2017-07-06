import { CALL_API } from 'redux-api-middleware';
import { dispatch } from '../store/store';

const APIURL = 'http://192.168.2.84:8000/api';
// const EMAIL = 'demo@demo.com';
// const PASSWORD = 'demo123';

const creatLoginAction = (email, password) => ({
  [CALL_API]: {
    endpoint: `${APIURL}/IseUsers/login`,
    method: 'POST',
    types: ['loginREQUEST', 'loginSUCCESS', 'loginFAILURE'],
    body: JSON.stringify({
      email,
      password
    })
  }
});

const creatGetUndoTasksAticon = (organizationID, userID, token) => ({
  [CALL_API]: {
    endpoint: `${APIURL}/Organizations/${organizationID}/tasks`, // TODO, add query conditions
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

const creatGetCompleteTasksAticon = (organizationID, userID, token) => ({
  [CALL_API]: {
    endpoint: `${APIURL}/Organizations/${organizationID}/tasks`, // TODO, add query conditions
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

export const login = (email, password) => {
  dispatch(creatLoginAction(email, password));
};

export const getUndoTasks = (organizationID, userID, token) => {
  dispatch(creatGetUndoTasksAticon(organizationID, userID, token));
};

export const getCompleteTasks = (organizationID, userID, token) => {
  dispatch(creatGetCompleteTasksAticon(organizationID, userID, token));
};
