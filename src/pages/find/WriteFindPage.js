import Responsive from '../../components/common/Responsive';
import FindWriteActionButtonContainer from "../../containers/find/FindWriteActionButtonContainer";
import FindEditorContainer from "../../containers/find/FindEditorContainer";
import FindTagBoxContainer from "../../containers/find/FineTagBoxContainer";

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