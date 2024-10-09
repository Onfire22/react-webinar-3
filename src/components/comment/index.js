import { cn as bem } from "@bem-react/classname";
import './style.css';

const Comment = ({ username, date, text, depth }) => {
  const cn = bem('Comment');

  return (
    <div className={cn()} style={{ 'marginLeft': `${depth}px` }}>
      <div className={cn("header")}>
        <p className={cn("author")}>{username}</p>
        <p className={cn("date")}>{date}</p>
      </div>
      <p className={cn("text")}>{text}</p>
      <button className={cn("reply")} type="button">Ответить</button>
    </div>
  );
};

export default Comment;
