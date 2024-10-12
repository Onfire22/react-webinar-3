import { cn as bem } from "@bem-react/classname";
import { useState } from 'react';
import CommentInput from "../comment-input";
import './style.css';
import SignInLink from "../signin-link";

const Comment = ({ username, date, text, depth, id, exists }) => {
  const [open, setOpen] = useState(false);
  const cn = bem('Comment');

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={cn()} style={{ 'marginLeft': `${depth}px` }}>
      <div className={cn("header")}>
        <p className={cn("author")}>{username}</p>
        <p className={cn("date")}>{date}</p>
      </div>
      <p className={cn("text")}>{text}</p>
      {!open && <button className={cn("reply")} type="button" onClick={toggleOpen}>Ответить</button>}
      {open && exists && <CommentInput id={id} type="comment" toggleOpen={toggleOpen} />}
      {open && !exists && (
        <p className={cn("exists")}>
          <SignInLink />
          <span>, чтобы иметь возможность ответить.</span>
          <button className={cn('cancel')} type="button" onClick={toggleOpen}>Отмена</button>
        </p>
      ) }
    </div>
  );
};

export default Comment;
