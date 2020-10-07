import { all } from 'redux-saga/effects';
import { watchPosts } from './post';

export default function* rootSaga() {
  yield all([watchPosts()]);
}
