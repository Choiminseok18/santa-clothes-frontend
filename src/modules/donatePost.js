import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as postAPI from '../lib/api/posts'
import { takeLatest } from 'redux-saga/effects';

const CHANGE_NUM = 'donatePost/CHANGE_NUM';

const [
  READ_DONATE_POST,
  READ_DONATE_POST_SUCCESS,
  READ_DONATE_POST_FAILURE,
] = createRequestActionTypes('donatePost/');
const UNLOAD_DONATE_POST = 'donatePost/UNLOAD_DONATE_POST'; // 포스트 페이지에서 벗어날 떄 데이터 비우기

export const readDonatePost = createAction(READ_DONATE_POST, id => id);
export const unloadDonatePost = createAction(UNLOAD_DONATE_POST);
export const changeNum = createAction(
  CHANGE_NUM,
  ({name, value}) => ({name, value})
);

const readDonatePostSaga = createRequestSaga(READ_DONATE_POST, postAPI.readDonatePost);
export function* donatePostSaga() {
  yield takeLatest(READ_DONATE_POST, readDonatePostSaga);
}

const initialState = {
  post: {},
  error: null,
};

const donatePost = handleActions(
  {
    [CHANGE_NUM]: (state, { payload: { name, value } }) => ({
  ...state,
  [name]: value
}),
    [READ_DONATE_POST_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      post: data,
    }),
    [READ_DONATE_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_DONATE_POST]: () => initialState,
  },
  initialState,
);

export default donatePost;