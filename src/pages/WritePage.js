import DonateEditorContainer from '../containers/Donate/DonateEditorContainer';
import Responsive from '../components/common/Responsive';
import DonateTagBoxContainer from "../containers/Donate/DonateTagBoxContainer";
import DonateWriteActionButtonContainer from "../containers/Donate/DonateWriteActionButtonContainer";

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