import PropTypes from 'prop-types';
import './styles.css';

const PageContent = ({ item = {}, onAdd = () => {} }) => {
  return (
    <div className="Content">
      <p className="item-info">
        {item?.description}
      </p>
      <p className="item-info">
        Страна производитель:
        <span className="item-info-accent">{` ${item?.madeIn.title}`}</span>
      </p>
      <p className="item-info">
        Категория:
        <span className="item-info-accent">{` ${item?.category.title}`}</span>
      </p>
      <p className="item-info">
        Год выпуска:
        <span className="item-info-accent">{` ${item?.edition}`}</span>
      </p>
      <p className="item-info">
        Цена:
        <span className="item-info-accent">{` ${item?.price}  ₽`}</span>
      </p>
      <button onClick={() => onAdd(item?._id)}>Добавить</button>
    </div>
  );
};

export default PageContent;
