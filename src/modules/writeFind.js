import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'writeFind/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'writeFind/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_FIND_POST,
  WRITE_FIND_POST_SUCCESS,
  WRITE_FIND_POST_FAILURE,
] = createRequestActionTypes('/writeFind/WRITE_POST'); // 포스트 작성

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeFindPost = createAction(WRITE_FIND_POST, ({ title, image, text, tag, userId }) => ({
  title,
  image,
  text,
  tag,
  userId
}));

// 사가 생성
const writeFindPostSaga = createRequestSaga(WRITE_FIND_POST, postsAPI.writeFindPost);
export function* writeFindSaga() {
  yield takeLatest(WRITE_FIND_POST, writeFindPostSaga);
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

const writeFind = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [WRITE_FIND_POST]: state => ({
      ...state,
      post:null,
      postError: null,
    }),
    // 포스트 작성 성공
    [WRITE_FIND_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    //포스트 작성 실패
    [WRITE_FIND_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

export default writeFind;