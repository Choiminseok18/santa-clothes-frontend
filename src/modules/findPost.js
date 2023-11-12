import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as postAPI from '../lib/api/posts'
import { takeLatest } from 'redux-saga/effects';

const [
  READ_FIND_POST,
  READ_FIND_POST_SUCCESS,
  READ_FIND_POST_FAILURE,
] = createRequestActionTypes('findPost/');
const UNLOAD_FIND_POST = 'findPost/UNLOAD_FIND_POST'; // 포스트 페이지에서 벗어날 떄 데이터 비우기

export const readFindPost = createAction(READ_FIND_POST, id => id);
export const unloadFindPost = createAction(UNLOAD_FIND_POST);

const readFindPostSaga = createRequestSaga(READ_FIND_POST, postAPI.readFindPost);
export function* findPostSaga() {
  yield takeLatest(READ_FIND_POST, readFindPostSaga);
}

const initialState = {
  post: {},
  error: null,
};

const findPost = handleActions(
  {
    [READ_FIND_POST_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      post: data,
    }),
    [READ_FIND_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_FIND_POST]: () => initialState,
  },
  initialState,
);

export default findPost;