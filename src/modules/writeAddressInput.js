import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'addressInput/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'addressInput/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_ADDRESS_INPUT,
  WRITE_ADDRESS_INPUT_SUCCESS,
  WRITE_ADDRESS_INPUT_FAILURE,
] = createRequestActionTypes('addressInput/WRITE_ADDRESS'); // 주소 작성

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }) => ({key, value})
);
export const writeAddressInput = createAction(WRITE_ADDRESS_INPUT, ({username, address, phoneNumber, userId}) => ({
  username,
  address,
  phoneNumber,
  userId,
}));

// 사가 생성
const writeAddressInputSaga = createRequestSaga(WRITE_ADDRESS_INPUT, postsAPI.writeAddressInput);
export function* AddressInputSaga() {
  yield takeLatest(WRITE_ADDRESS_INPUT, writeAddressInputSaga);
}

const initialState = {
  username: '',
  address: '',
  phoneNumber: '',
  userId: JSON.parse(localStorage.getItem('member')) ? JSON.parse(localStorage.getItem('member')).id : '',
  infoId: '',
  shopId: '',
  success: null,
  error: null,
};

const writeAddress = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    // 주소 작성 성공
    [WRITE_ADDRESS_INPUT_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      success
    }),
    //주소 작성 실패
    [WRITE_ADDRESS_INPUT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default writeAddress;