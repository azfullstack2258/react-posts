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
      // Attach user and property to each post
      return posts.map((post) => {
        const { user_id: userId, property_id: propertyId } = post;
        const user =
          users.find(({ id }) => id === userId);
        const property =
          properties.find(({ id }) => id === propertyId);
        
        return {
          ...post,
          user,
          property
        };
      });
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
