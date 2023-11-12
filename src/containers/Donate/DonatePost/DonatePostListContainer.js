import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from "../../../components/common/PostList";
import { listDonatePosts } from "../../../modules/donatePosts";

const DonatePostListContainer = () => {
  const dispatch = useDispatch();
  const { posts, postsError, loading} = useSelector(
    ({ donatePosts, loading }) => ({
      posts: donatePosts.posts,
      postsError: donatePosts.postsError,
      loading: loading['posts/LIST_DONATE_POSTS'],
    }),
  );
  useEffect(() => {
    dispatch(listDonatePosts());
  }, [dispatch]);

  return (
    <PostList
      loading={loading}
      postsError={postsError}
      posts={posts.content}
    />
  );
};

export default DonatePostListContainer;