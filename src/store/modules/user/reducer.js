import produce from 'immer';

export default function user(state = {}, action) {
  switch (action.type) {
    case '@user/ADD_SUCCESS':
      return produce(state, draft => {
        draft = action.user;
      });

    default:
      return state;
  }
}
