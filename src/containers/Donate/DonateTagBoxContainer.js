import { useDispatch, useSelector } from 'react-redux';
import TagBox from '../../components/common/write/TagBox';
import { changeField } from '../../modules/writeDonate';

const DonateTagBoxContainer = () => {
  const dispatch = useDispatch();
  const tag = useSelector(state => state.writeDonate.tag);

  const onChangeTag = nextTags => {
    dispatch(
      changeField({
        key: 'tag',
        value: nextTags,
      }),
    );
  };

  return <TagBox onChangeTag={onChangeTag} tag={tag} />;
};

export default DonateTagBoxContainer;