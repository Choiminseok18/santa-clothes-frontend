import React, { useEffect } from "react";
import WriteActionButtons from "../../components/common/write/WriteActionButtons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'; // 사용된 라우팅 훅들을 import

import { writeFindPost } from "../../modules/writeFind";

const FindWriteActionButtonContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 네비게이션을 처리
  const { title, image, text, tag, userId, post, postError } = useSelector(({ writeFind }) => ({
    title: writeFind.title,
    image: writeFind.image,
    text: writeFind.text,
    tag: writeFind.tag,
    userId: writeFind.userId,
    post: writeFind.post,
    postError: writeFind.postError,
  }));

  // 포스트 등록
  const onPublish = () => {
    dispatch(
      writeFindPost({
        title,
        image,
        text,
        tag,
        userId,
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
      navigate(`/find`); // 새로운 경로로 이동
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);

  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default FindWriteActionButtonContainer;
