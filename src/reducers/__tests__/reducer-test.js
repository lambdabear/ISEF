import { user, undoTasks } from '../reducers';
import {
  // LOGIN_REQUEST,
  LOGIN_SUCCESS
  // LOGIN_FAILURE,
  // GET_UNDO_TASKS_REQUEST,
  // GET_UNDO_TASKS_SUCCESS
  // GET_UNDO_TASKS_FAILURE,
  // GET_COMPLETE_TASKS_REQUEST,
  // GET_COMPLETE_TASKS_SUCCESS,
  // GET_COMPLETE_TASKS_FAILURE
} from '../../actions/apiFSAs';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(user(undefined, {})).toEqual({});
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      user(
        {},
        {
          type: LOGIN_SUCCESS,
          payload: {
            userID: '123456',
            userName: 'mike',
            userEmail: 'mike@demo.com',
            organizationID: 'yzkj20170707',
            token: 'oiuy20354sop'
          }
        }
      )
    ).toEqual({
      id: '123456',
      name: 'mike',
      email: 'mike@demo.com',
      organizationID: 'yzkj20170707',
      token: 'oiuy20354sop'
    });
  });
});

// TODO
// describe('undoTasks reducer', () => {})
