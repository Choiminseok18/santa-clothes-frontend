import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const PostViewerBlock = styled(Responsive)`
  margin-top: 8rem;
  margin-bottom: 15rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;
const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};

  /* span 사이에 가운뎃점 문자 보여 주기 */
  span + span:before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7'; /* 가운뎃점 문자 */
  }
`;

const Tags = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.pink[1]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
     color: ${palette.pink[2]};
    }
  }
`;
const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const DonateButton = styled.button`
  color: ${palette.gray[7]};
  font-size: 1rem;
  cursor: pointer;
  padding: 1rem 1rem;
  border: none;
  border-radius: 6px;
  width: 7rem;
  height: 4rem;
  background-color: ${palette.pink[3]};
  margin: 23rem 30rem 0rem 30rem;
  box-shadow: 2px 2px 5px ${palette.gray[4]};
  &:hover{
    background-color: ${palette.pink[1]};
  }
`

const onHandleClick = () => {
  window.location.href="/donate/address-input";
}


const PostViewer = ({ post, error, loading, isButton }) => {
  const {tag, view, title, nickname, createdDate, text, image} = post;
  const Date = createdDate ? createdDate.slice(0, 10) : '';

  // 에러 발생 시
  if(error) {
    if(error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>
    }
    return <PostViewerBlock>오류 발생</PostViewerBlock>
  }

  // 로딩 중이거나 아직 포스트 데이터가 없을 때
  if(loading || !post) {
    return null;
  }

  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo>
          <span>
            <b>{nickname}</b>
          </span>
          <span>{Date}</span>
        </SubInfo>
        <Tags>
          <div className="tag">#{tag}</div>
        </Tags>
      </PostHead>
      <PostContent
        dangerouslySetInnerHTML={{ __html: text }}
      />
      {isButton && <DonateButton onClick={onHandleClick}>신청하기</DonateButton>}
    </PostViewerBlock>
  );
};

export default PostViewer;