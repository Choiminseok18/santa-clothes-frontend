import EditorContainer from '../containers/write/EditorContainer';
import Responsive from '../component/common/Responsive';
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteActionButtonContainer from "../containers/write/WriteActionButtonContainer";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonContainer />
    </Responsive>
  );
};

export default WritePage;