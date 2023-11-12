import DonateTemplate from "../../components/Donate/DonateTemplate";
import DonatePostListContainer from "../../containers/Donate/DonatePost/DonatePostListContainer";

const donatePage = () => {
  return (
    <div>
      <DonateTemplate />
      <DonatePostListContainer />
    </div>
  );
};

export default donatePage;