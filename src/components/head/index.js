import { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import useSelector from '../../hooks/use-selector';
import useStore from '../../hooks/use-store';

function Head({ title, children }) {
  const store = useStore();
  const navigate = useNavigate();
  const name = useSelector((state) => state?.user?.userData?.name);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const logOut = useCallback(() => store.actions.user.logOut(), [store]);

  const handleLogout = () => {
    logOut();
  };

  return (
    <>
      <div className="Header-head">
        {
          loggedIn ?
          (
            <>
              <Link to="/profile">{name}</Link>
              <button type="button" onClick={handleLogout}>Выйти</button>
            </>
          )
          :
          (
            <button type="button" onClick={() => navigate('/login')}>Войти</button>
          )
        }
      </div>
      <div className="Head">
        <div className="Head-place">
          <h1>{title}</h1>
        </div>
        <div className="Head-place">{children}</div>
      </div>
    </>
  );
}

Head.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};

export default memo(Head);
