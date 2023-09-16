import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import write, { writeSaga } from './write';
import loading from "./loading";

const rootReducer = combineReducers({
  loading,
  write,
});

export function* rootSaga() {
  yield all([writeSaga()]);
}

export default rootReducer;