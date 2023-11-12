import Responsive from '../../components/common/Responsive';
import FindWriteActionButtonContainer from "../../containers/Find/FindWriteActionButtonContainer";
import FindEditorContainer from "../../containers/Find/FindEditorContainer";
import FindTagBoxContainer from "../../containers/Find/FineTagBoxContainer";

const WriteFindPage = () => {
  return (
    <Responsive>
      <FindEditorContainer />
      <FindTagBoxContainer />
      <FindWriteActionButtonContainer />
    </Responsive>
  );
};

export default WriteFindPage;