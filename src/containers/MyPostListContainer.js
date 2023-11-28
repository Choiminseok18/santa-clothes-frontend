import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from "../../../components/common/PostList";
import { listFindPosts } from "../../../modules/findPosts";

const MyPostListContainer = () => {
  const dispatch = useDispatch();
  const { posts, postsError, loading} = useSelector(
    ({ myPosts, loading }) => ({
      posts: myPosts.posts,
      postsError: myPosts.postsError,
      loading: loading['posts/LIST_MY_POSTS'],
    }),
  );
  useEffect(() => {
    dispatch(listMyPosts());
  }, [dispatch]);

  return (
    <PostList
      loading={loading}
      postsError={postsError}
      posts={posts.content}
      pageName="my"
    />
  );
};

export default FindPostListContainer;