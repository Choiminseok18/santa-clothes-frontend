import Responsive from '../../components/common/Responsive';
import DonateEditorContainer from "../../containers/donate/DonateEditorContainer";
import DonateTagBoxContainer from "../../containers/donate/DonateTagBoxContainer";
import DonateWriteActionButtonContainer from "../../containers/donate/DonateWriteActionButtonContainer";


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