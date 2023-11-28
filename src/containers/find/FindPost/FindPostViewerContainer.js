import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readFindPost, unloadFindPost } from '../../../modules/findPost';
import {useParams} from "react-router";
import PostViewer from "../../../components/common/PostViewer";

const FindPostViewerContainer = () => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { findPostId } = useParams();
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(({ findPost, loading }) => ({
    post: findPost.post,
    error: findPost.error,
    loading: loading['findPost/READ_FIND_POST'],
  }));

  useEffect(() => {
    dispatch(readFindPost(findPostId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadFindPost());
    };
  }, [dispatch, findPostId]);

  return <PostViewer post={post} loading={loading} error={error} isButton={false}/>;
};

export default FindPostViewerContainer;