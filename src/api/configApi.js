import {
  login,
  getUndoTasks,
  getCompleteTasks
  // getFacilities,
  // getCheckPatterns
} from './api';

const APIURL = 'http://xxx/api';
const EMAIL = '';
const PASSWORD = '';
const ORGANIZATIONID = '';
const USERID = '';
const TOKEN = '';

export const doLogin = () => {
  login(EMAIL, PASSWORD, APIURL);
};

export const doGetUndoTasks = () => {
  getUndoTasks(ORGANIZATIONID, USERID, TOKEN, APIURL);
};

export const doGetCompleteTasks = () => {
  getCompleteTasks(ORGANIZATIONID, USERID, TOKEN, APIURL);
};

// TODO
// export const doGetFacilities = () => {
//   getFacilities(...)
// }
//
// export const doGetCheckPatterns = () => {
//   getCheckPatterns(...)
// }
