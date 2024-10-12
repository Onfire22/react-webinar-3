import { useSelector as useSelectorRedux } from "react-redux";
import Comment from "../comment";
import CommentInput from "../comment-input";
import { Link } from "react-router-dom";
import formateDate from "../../utils/dateFormantter";
import useSelector from "../../hooks/use-selector";
import listToTree from "../../utils/list-to-tree";
import treeToList from "../../utils/tree-to-list";
import './style.css';

const Comments = ({ articleId }) => {
  const { comments } = useSelectorRedux((state) => state.comments);
  const exists = useSelector((state) => state.session.exists);
  const data = treeToList(listToTree(comments), (item, level) => {
    return {
      author: item.author?.profile.name,
      date: item.dateCreate,
      text: item.text,
      id: item._id,
      level: (level - 1) * 30,
    }
  });

  return (
    <div className="Comments-container">
      <p className="Comments-title">
        {`Комментарии (${comments.length})`}
      </p>
      <div>
        {data.slice(1).map((comment) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              username={comment.author}
              date={formateDate(comment.date)}
              text={comment.text}
              depth={comment.level}
              exists={exists}
            />
          );
        })}
      </div>
      {
        !exists ?
        <>
          <Link className="Nav-link" to="/login">Войдите</Link>
          <span>, чтобы иметь возможность комментировать</span>
        </>
        :
        <CommentInput id={articleId} type="article" />
      }
    </div>
  );
};

export default Comments;
