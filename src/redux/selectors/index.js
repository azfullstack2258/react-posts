import { createSelector } from 'reselect';

const postDomain = state => state.post;

const makeSelectPostsLoading = () =>
  createSelector(
    postDomain,
    (subdomain) => subdomain.isLoading
  );

const makeSelectPostsError = () =>
  createSelector(
    postDomain,
    (subdomain) => subdomain.error
  );

const makeSelectPosts = () =>
  createSelector(
    postDomain,
    (subdomain) => subdomain.posts
  );

const makeSelectUsers = () =>
  createSelector(
    postDomain,
    (subdomain) => subdomain.users
  );

const makeSelectProperties = () =>
  createSelector(
    postDomain,
    (subdomain) => subdomain.properties
  );

const makeSelectPostData = () =>
  createSelector(
    makeSelectPosts(),
    makeSelectUsers(),
    makeSelectProperties(),
    (posts, users, properties) => {
      console.log('posts, users, properties', posts, users, properties);
      return posts;
    }
  );

export {
  makeSelectPostsLoading,
  makeSelectPostsError,
  makeSelectPosts,
  makeSelectUsers,
  makeSelectProperties,
  makeSelectPostData
};
