import { useEffect, useCallback } from 'react';
import Editor from '../../components/common/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/writeDonate';

const DonateEditorContainer = () => {
  const dispatch = useDispatch();
  const { title, text } = useSelector(({ writeDonate }) => ({
    title: writeDonate.title,
    text: writeDonate.text,
  }));
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch,
  ]);
  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return <Editor onChangeField={onChangeField} title={title} text={text} />;
};

export default DonateEditorContainer;