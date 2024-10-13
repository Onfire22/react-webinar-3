import { useDispatch, useSelector as useSelectorRedux } from "react-redux";
import { useState } from "react";
import newCommentActions from '../../store-redux/comments/actions';
import Comment from "../comment";
import CommentInput from "../comment-input";
import formateDate from "../../utils/dateFormantter";
import useSelector from "../../hooks/use-selector";
import listToTree from "../../utils/list-to-tree";
import treeToList from "../../utils/tree-to-list";
import SignInLink from "../signin-link";
import './style.css';

const Comments = ({ articleId }) => {
  const dispatch = useDispatch();
  const { comments } = useSelectorRedux((state) => state.comments);
  const exists = useSelector((state) => state.session.exists);
  const [state, setState] = useState({
    showComment: true,
    showAnswer: false,
    targetCommentId: '',
    placeForComment: '',
  });
  const data = treeToList(listToTree(comments), (item, level) => {
    return {
      author: item.author?.profile.name,
      date: item.dateCreate,
      text: item.text,
      id: item._id,
      parent: item.parent,
      level: level,
    }
  }).slice(1);

  const openAnswer = (id) => {
    const placeForComment = data.findLast((comment) => comment.parent._id === id)?.id;
    setState({
      ...state,
      showAnswer: true,
      showComment: false,
      targetCommentId: id,
      placeForComment: placeForComment || id,
    });
  };

  const closeAnswer = () => {
    setState({
      ...state,
      showComment: true,
      showAnswer: false,
      targetCommentId: '',
      placeForComment: '',
    });
  };

  const handleSubmit = (text) => {
    dispatch(newCommentActions.createComment(text, state.targetCommentId, 'comment'));
  };

  return (
    <div className="Comments-container">
      <p className="Comments-title">
        {`Комментарии (${comments.length})`}
      </p>
      <ul>
        {data.map((comment) => {
          return (
            <li className="Comment-item" key={comment.id} style={{ 'marginLeft': comment.level >= 10 ? '0px' : `${(comment.level - 1) * 30}px` }}>
              <Comment
                id={comment.id}
                username={comment.author}
                date={formateDate(comment.date)}
                text={comment.text}
                onOpen={openAnswer}
              />
              {
                state.placeForComment === comment.id && 
                state.showAnswer && 
                (exists ? (
                  <CommentInput
                    id={comment.id}
                    type="comment"
                    onClose={closeAnswer}
                    onSubmit={handleSubmit}
                  />
                ) :
                (
                  <p className="feedback">
                    <SignInLink />
                    <span>, чтобы иметь возможность ответить.</span>
                    <button className="feedback-cancel" type="button" onClick={closeAnswer}>Отмена</button>
                  </p>
                ))
              }
            </li>
          );
        })}
      </ul>
      {
        state.showComment && (exists ?
          <CommentInput id={articleId} type="article" />
        :
        <>
          <SignInLink />
          <span>, чтобы иметь возможность комментировать</span>
        </>
      )}
    </div>
  );
};

export default Comments;
