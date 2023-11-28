import styled from "styled-components";
import Responsive from "./Responsive";
import palette from "../../lib/styles/palette";
import {Link} from "react-router-dom";

const PostListBlock = styled(Responsive)`
  margin-top: 6rem;
 
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  position: relative;
  display: flex;
  justify-content: space-between;

  &:first-child {
    padding-top: 0;
  }

  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0;
    margin-top: 0;

    &:hover {
      color: ${palette.gray[6]};
    }
  }

  p {
    margin-top: 2rem;
  }
`;

const SubInfo = styled.div`
  /* margin-top: 1rem; */
  color: ${palette.gray[6]};

  /* span 사이에 가운뎃점 문자 보여 주기 */

  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7'; /* 가운뎃점 문자 */
  }
  b {
    color: ${palette.pink[1]};
  }
`;


const PostItem = ({ post, pageName }) => {
  const { title, createdDate, tag, user, id } = post;
  const Date = createdDate ? createdDate.slice(0, 10) : '';
  return (
    <PostItemBlock>
      <Link style={{textDecoration: "none", color: "black"}} to={`/${pageName}/${id}`}><h3>{title}</h3></Link>
      <SubInfo>
        <span>{user}</span>
        <span>{Date}</span>
        <span><b>#{tag}</b></span>
      </SubInfo>
    </PostItemBlock>
  );
};
const PostList = ({ posts, loading, postsError, pageName }) => {
  // 에러 발생 시
  if (postsError) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock>
      {/*  로딩 중이 아니고, 포스트 배열이 존재할 때만 보여 줌 */}
      {!loading && posts && (
        <div>
          {[...posts].map(post => (
            <PostItem post={post} pageName={pageName}/>
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;