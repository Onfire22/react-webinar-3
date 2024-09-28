import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

const LinkToMainPage = ({ route = '/', className = '', onClick = () => {}, title }) => (
  <Link to={route} className={className} onClick={() => onClick()}>{title}</Link>
);

LinkToMainPage.propTypes = {
  route: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default LinkToMainPage;
