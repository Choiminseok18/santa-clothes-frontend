import DonateTemplate from "../../components/donate/DonateTemplate";
import DonatePostListContainer from "../../containers/donate/DonatePost/DonatePostListContainer";

const donatePage = () => {
  return (
    <div>
      <DonateTemplate />
      <DonatePostListContainer />
    </div>
  );
};

export default donatePage;