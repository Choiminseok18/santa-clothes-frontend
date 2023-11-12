import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_FIND_POSTS,
  LIST_FIND_POSTS_SUCCESS,
  LIST_FIND_POSTS_FAILURE,
] = createRequestActionTypes('findPosts/LIST_FIND_POSTS');

export const listFindPosts = createAction(
  LIST_FIND_POSTS,
    content => content,
);

const listFindPostsSaga = createRequestSaga(LIST_FIND_POSTS, postsAPI.listFindPosts);
export function* findPostsSaga() {
  yield takeLatest(LIST_FIND_POSTS, listFindPostsSaga);
}

const initialState = {
  posts:[],
  postsError: null,
};

const findPosts = handleActions(
  {
    [LIST_FIND_POSTS_SUCCESS]: (state, { payload: content }) => ({
      ...state,
      posts: content,
    }),
    [LIST_FIND_POSTS_FAILURE]: (state, { payload: postsError }) => ({
      ...state,
      postsError,
    }),
  },
  initialState,
);

export default findPosts;