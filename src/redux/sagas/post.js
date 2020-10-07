
import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../reducers/post';
import { fetchPosts, fetchProperties, fetchUsers } from '../../service/api';

function* fetchPostsSaga() {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  try {
    const posts = yield call(fetchPosts);
    const users = yield call(fetchUsers);
    const properties = yield call(fetchProperties);

    yield put({
      type: actionTypes.loadPostsSucceed,
      posts,
      users,
      properties,
    });
  } catch(error) {
    console.log('[Error in loading posts]', error);
    yield put({ type: actionTypes.loadPostsFail, error });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

export function* watchPosts() {
  yield takeLatest(actionTypes.loadPostsRequest, fetchPostsSaga);
}
