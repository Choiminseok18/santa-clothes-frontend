import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'writeDelivery/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'writeDelivery/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_DELIVERY_INPUT,
  WRITE_DELIVERY_INPUT_SUCCESS,
  WRITE_DELIVERY_INPUT_FAILURE,
] = createRequestActionTypes('writeDelivery/WRITE_DELIVERY'); // 주소 작성

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }) => ({key, value})
);
export const writeDeliveryInput = createAction(WRITE_DELIVERY_INPUT, ({text, infoId, shopId, userId}) => ({
  text,
  infoId,
  shopId,
  userId,
}));

// 사가 생성
const writeDeliveryInputSaga = createRequestSaga(WRITE_DELIVERY_INPUT, postsAPI.writeDeliveryInput);
export function* writeDeliverySaga() {
  yield takeLatest(WRITE_DELIVERY_INPUT, writeDeliveryInputSaga);
}

const initialState = {
  text: '',
  infoId: '',
  shopId: '',
  userId: JSON.parse(localStorage.getItem('member')) ? JSON.parse(localStorage.getItem('member')).id : '',
};

const writeDelivery = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    // 배송 요청 사항 작성 성공
    [WRITE_DELIVERY_INPUT_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      success
    }),
    // 배송 요청 사항 작성 실패
    [WRITE_DELIVERY_INPUT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default writeDelivery;