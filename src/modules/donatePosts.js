import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_DONATE_POSTS,
  LIST_DONATE_POSTS_SUCCESS,
  LIST_DONATE_POSTS_FAILURE,
] = createRequestActionTypes('donatePosts/LIST_DONATE_POSTS');

export const listDonatePosts = createAction(
  LIST_DONATE_POSTS,
  content => content,
);

const listDonatePostsSaga = createRequestSaga(LIST_DONATE_POSTS, postsAPI.listDonatePosts);
export function* donatePostsSaga() {
  yield takeLatest(LIST_DONATE_POSTS, listDonatePostsSaga);
}

const initialState = {
  posts:[],
  postsError: null,
};

const donatePosts = handleActions(
  {
    [LIST_DONATE_POSTS_SUCCESS]: (state, { payload: content }) => ({
      ...state,
      posts: content,
    }),
    [LIST_DONATE_POSTS_FAILURE]: (state, { payload: postsError }) => ({
      ...state,
      postsError,
    }),
  },
  initialState,
);

export default donatePosts;