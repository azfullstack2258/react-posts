import produce from 'immer';
import { createAction } from 'redux-actions';

export const actionTypes = {
  loadPostsRequest: 'post/load_posts_request',
  loadPostsSucceed: 'post/load_posts_succeed',
  loadPostsFail: 'post/load_posts_fail',
  setLoadingStatus: 'post/set_loading_status',
};

export const loadPosts = createAction(actionTypes.loadPostsRequest);

const defaultState = {
  isLoading: false,
  posts: [],
  error: null,
};

const postReducer = (state = defaultState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.setLoadingStatus:
        draft.isLoading = action.payload;
        break;
      case actionTypes.loadPostsSucceed:
        draft.posts = action.posts;
        break;
      case actionTypes.loadPostsFail:
        draft.error = action.error;
        break;
      default:
        break;
    }
  });

export default postReducer;
