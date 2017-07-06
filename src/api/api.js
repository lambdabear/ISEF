import { dispatch } from '../store/store';
import config from './apiConfig';
import {
  createLoginAction,
  createGetUndoTasksAticon,
  createGetCompleteTasksAticon
  // createGetFacilitiesAction,
  // createGetCheckPatternsAction,
  // createPostCheckAction
} from './apiAction';

const login = (email, password, apiUrl) => {
  dispatch(createLoginAction(email, password, apiUrl));
};

const getUndoTasks = (organizationID, userID, token, apiUrl) => {
  dispatch(createGetUndoTasksAticon(organizationID, userID, token, apiUrl));
};

const getCompleteTasks = (organizationID, userID, token, apiUrl) => {
  dispatch(createGetCompleteTasksAticon(organizationID, userID, token, apiUrl));
};

// TODO
// const getFacilities = (...) => {
//   dispatch(createGetFacilitiesAction(...));
// };
//
// const getCheckPatterns = (...) => {
//   dispatch(createGetCheckPatternsAction(...));
// };
//
// const postCheck = (...) => {
//   dispatch(createPostCheckAction(...));
// };

const { email, password, apiUrl, organizationID, userID, token } = config;

export const doLogin = () => {
  login(email, password, apiUrl);
};

export const doGetUndoTasks = () => {
  getUndoTasks(organizationID, userID, token, apiUrl);
};

export const doGetCompleteTasks = () => {
  getCompleteTasks(organizationID, userID, token, apiUrl);
};

// TODO
// export const doGetFacilities = () => {
//   getFacilities(...)
// }
//
// export const doGetCheckPatterns = () => {
//   getCheckPatterns(...)
// }
//
// export const doPostCheck = (check) => {
//   postCheck(... check)
// }
