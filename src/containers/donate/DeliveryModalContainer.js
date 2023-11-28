import DeliveryModal from "../../components/common/DeliveryModal";
import {useDispatch, useSelector} from "react-redux";
import writeDelivery from "../../modules/writeDelivery";

export default function DeliveryModalContainer () {
    const dispatch = useDispatch();
    const {text, userId, shopId, success} = useSelector(({writeDelivery, donatePost, writeAddressInput}) => ({
      text: writeDelivery.text,
      userId: writeDelivery.userId,
      shopId: donatePost.shopId,
      // infoId: writeAddressInput.success,
  }))

  const onPublic = () => {
      dispatch(
        writeDelivery(
          text,
        userId,
        shopId,
        success,
      ))
  }


    return (
        <>
            <DeliveryModal onPublic={onPublic}></DeliveryModal>
        </>
    )
}