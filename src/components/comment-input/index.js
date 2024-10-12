import './style.css';
import newCommentActions from '../../store-redux/comments/actions';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cn as bem } from '@bem-react/classname';

const CommentInput = ({ id, type, toggleOpen }) => {
  const cn = bem('CommentForm');
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setText('');
      return;
    };
    dispatch(newCommentActions.createComment(text, id, type));
    setText('');
    if (type === 'comment') {
      toggleOpen();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className={cn()} onSubmit={handleSubmit}>
      {type === "article" && <p className={cn("title")}>Новый комментарий</p>}
      {type === "comment" && <p className={cn("title")}>Новый ответ</p>}
      <textarea className={cn("input")} value={text} onChange={({ target }) => setText(target.value)} ref={inputRef} />
      <div className={cn("controls")}>
        {(type === "article" || type === "comment") && <button type="submit">Отправить</button>}
        {type === "comment" && <button type="button" onClick={toggleOpen}>Отменить</button>}
      </div>
    </form>
  );
};

export default CommentInput;
