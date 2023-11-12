import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from "../../../components/common/PostList";
import { listFindPosts } from "../../../modules/findPosts";

const FindPostListContainer = () => {
  const dispatch = useDispatch();
  const { posts, postsError, loading} = useSelector(
    ({ findPosts, loading }) => ({
      posts: findPosts.posts,
      postsError: findPosts.postsError,
      loading: loading['posts/LIST_FIND_POSTS'],
    }),
  );
  useEffect(() => {
    dispatch(listFindPosts());
  }, [dispatch]);

  return (
    <PostList
      loading={loading}
      postsError={postsError}
      posts={posts.content}
    />
  );
};

export default FindPostListContainer;