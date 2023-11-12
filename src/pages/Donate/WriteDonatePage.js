import Responsive from '../../components/common/Responsive';
import DonateEditorContainer from "../../containers/Donate/DonateEditorContainer";
import DonateTagBoxContainer from "../../containers/Donate/DonateTagBoxContainer";
import DonateWriteActionButtonContainer from "../../containers/Donate/DonateWriteActionButtonContainer";


const WriteDonatePage = () => {
  return (
    <Responsive>
      <DonateEditorContainer/>
      <DonateTagBoxContainer/>
      <DonateWriteActionButtonContainer/>
    </Responsive>
  );
};

export default WriteDonatePage;