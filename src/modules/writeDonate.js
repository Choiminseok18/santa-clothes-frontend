import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'writeDonate/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'writeDonate/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_DONATE_POST,
  WRITE_DONATE_POST_SUCCESS,
  WRITE_DONATE_POST_FAILURE,
] = createRequestActionTypes('/writeDonate/WRITE_POST'); // 포스트 작성

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeDonatePost = createAction(WRITE_DONATE_POST, ({ title, image, text, tag, userId }) => ({
  title,
  image,
  text,
  tag,
  userId
}));

// 사가 생성
const writeDonatePostSaga = createRequestSaga(WRITE_DONATE_POST, postsAPI.writeDonatePost);
export function* writeDonateSaga() {
  yield takeLatest(WRITE_DONATE_POST, writeDonatePostSaga);
}

const initialState = {
  title: '',
  image: '',
  text: '',
  tag: '',
  userId: '1',
  post: null,
  postError: null,
};

const writeDonate = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [WRITE_DONATE_POST]: state => ({
      ...state,
      post:null,
      postError: null,
    }),
    // 포스트 작성 성공
    [WRITE_DONATE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    //포스트 작성 실패
    [WRITE_DONATE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

export default writeDonate;