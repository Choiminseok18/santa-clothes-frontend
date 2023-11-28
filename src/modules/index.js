import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from "./loading";
import writeFind, { writeFindSaga } from "./writeFind";
import writeDonate, {writeDonateSaga} from "./writeDonate";
import findPosts, {findPostsSaga}  from "./findPosts";
import findPost, {findPostSaga} from "./findPost";
import donatePost, {donatePostSaga} from "./donatePost";
import donatePosts, {donatePostsSaga} from "./donatePosts";
import writeAddress, {AddressInputSaga} from "./writeAddressInput";
import writeDelivery, {writeDeliverySaga} from "./writeDelivery";

const rootReducer = combineReducers({
  loading,
  writeFind,
  writeDonate,
  findPosts,
  findPost,
  donatePost,
  donatePosts,
  writeAddress,
  writeDelivery,
});

export function* rootSaga() {
  yield all([writeFindSaga(), writeDonateSaga(), findPostsSaga(), findPostSaga(), donatePostsSaga(), donatePostSaga(), AddressInputSaga(), writeDeliverySaga(),]);
}

export default rootReducer;