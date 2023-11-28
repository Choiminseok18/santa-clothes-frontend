import DonateEditorContainer from '../containers/donate/DonateEditorContainer';
import Responsive from '../components/common/Responsive';
import DonateTagBoxContainer from "../containers/donate/DonateTagBoxContainer";
import DonateWriteActionButtonContainer from "../containers/donate/DonateWriteActionButtonContainer";

const WritePage = () => {
  return (
    <Responsive>
      <DonateEditorContainer />
      <DonateTagBoxContainer />
      <DonateWriteActionButtonContainer />
    </Responsive>
  );
};

export default WritePage;