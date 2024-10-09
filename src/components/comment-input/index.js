import './style.css';
import inputHandler from '../../store-redux/new-comment/actions';
import newCommentActions from '../../store-redux/comments/actions';
import { useDispatch, useSelector } from 'react-redux';

const CommentInput = ({ id }) => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.commentsInput.text);

  const handleInput = (e) => {
    dispatch(inputHandler.input(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newCommentActions.createComment(text, id));
  }

  return (
    <form className="CommentForm" onSubmit={handleSubmit}>
      <p>Новый комментарий</p>
      <textarea className="CommentForm-input" value={text} onChange={(e) => handleInput(e)} />
      <button>Отправить</button>
    </form>
  );
};

export default CommentInput;
