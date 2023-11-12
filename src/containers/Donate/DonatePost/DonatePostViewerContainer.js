import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readDonatePost, unloadDonatePost } from '../../../modules/donatePost';
import {useParams} from "react-router";
import PostViewer from "../../../components/common/PostViewer";

const DonatePostViewerContainer = () => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { donatePostId } = useParams();
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(({ donatePost, loading }) => ({
    post: donatePost.post,
    error: donatePost.error,
    loading: loading['donatePost/READ_DONATE_POST'],
  }));

  useEffect(() => {
    dispatch(readDonatePost(donatePostId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadDonatePost());
    };
  }, [dispatch, donatePostId]);

  return <PostViewer post={post} loading={loading} error={error} />;
};

export default DonatePostViewerContainer;