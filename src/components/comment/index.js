import { cn as bem } from "@bem-react/classname";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import inputHandler from '../../store-redux/new-comment/actions'
import CommentInput from "../comment-input";
import './style.css';

const Comment = ({ username, date, text, depth, parent }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const cn = bem('Comment');

  const handleOpen = () => {
    setOpen((prev) => !prev);
    dispatch(inputHandler.setParentId(parent._id));
  };

  return (
    <div className={cn()} style={{ 'marginLeft': `${depth}px` }}>
      <div className={cn("header")}>
        <p className={cn("author")}>{username}</p>
        <p className={cn("date")}>{date}</p>
      </div>
      <p className={cn("text")}>{text}</p>
      {!open && <button className={cn("reply")} type="button" onClick={handleOpen}>Ответить</button>}
      {open && <CommentInput />}
    </div>
  );
};

export default Comment;
