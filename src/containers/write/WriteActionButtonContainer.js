import React, { useEffect } from "react";
import WriteActionButtons from "../../component/write/WriteActionButtons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom'; // 사용된 라우팅 훅들을 import

import { writePost } from '../..//modules/write';

const WriteActionButtonContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 네비게이션을 처리
  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
  }));

  // 포스트 등록
  const onPublish = () => {
    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    navigate(-1); // 뒤로 가기
  };

  // 성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`); // 새로운 경로로 이동
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);

  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteActionButtonContainer;
