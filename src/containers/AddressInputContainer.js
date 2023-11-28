import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {changeField, writeAddressInput} from "../modules/writeAddressInput";
import AddressInput from "../components/common/AddressInput";

export default function AddressInputContainer () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {userId, username, address, phoneNumber, success, error} = useSelector(({ writeAddress,writeDelivery, loading }) => ({
    shopId: writeAddressInput.shopId,
    username: writeAddress.username,
    address: writeAddress.address,
    phoneNumber: writeAddress.phoneNumber,
    userId: writeAddress.userId,
    // infoId: writeDelivery.success,
    success: writeAddress.success,
    error: writeAddress.error,
    // loading: loading['addressInput/WRITE_ADDRESS']
  }));

  const handleChange = e => {
    const {name, value} = e.target;
    dispatch(changeField({
    key: name,
    value: value
  }))
  };

  // 주소 등록
  const onPublish = () => {
    dispatch(
      writeAddressInput({
        username,
        address,
        phoneNumber,
        userId
      }),
    );
  };

  // useEffect(() => {
  //   if (!loading && success) {
  //     dispatch(changeField({
  //       key: infoId,
  //       value: success,
  //     }))
  //   }
  //
  // }, [loading]);



    return <AddressInput
      onPublish={onPublish}
      username={username}
      address={address}
      phoneNumber={phoneNumber}
      handleChange={handleChange}
      error={error}
    />
}