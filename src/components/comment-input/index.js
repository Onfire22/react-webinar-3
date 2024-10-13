import './style.css';
import { useState, useRef, useEffect } from 'react';
import { cn as bem } from '@bem-react/classname';

const CommentInput = ({ type, onClose, onSubmit }) => {
  const cn = bem('CommentForm');
  const inputRef = useRef(null);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setText('');
      return;
    };
    onSubmit(text);
    setText('');
    if (type === 'comment') {
      onClose();
    }
  };

  useEffect(() => {
    if (type === 'comment') {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form className={cn()} onSubmit={handleSubmit}>
      {type === "article" && <p className={cn("title")}>Новый комментарий</p>}
      {type === "comment" && <p className={cn("title")}>Новый ответ</p>}
      <textarea className={cn("input")} value={text} onChange={({ target }) => setText(target.value)} ref={inputRef} />
      <div className={cn("controls")}>
        {(type === "article" || type === "comment") && <button type="submit">Отправить</button>}
        {type === "comment" && <button type="button" onClick={onClose}>Отменить</button>}
      </div>
    </form>
  );
};

export default CommentInput;
