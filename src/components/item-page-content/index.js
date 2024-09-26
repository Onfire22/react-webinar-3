import React from 'react';
import PropTypes from 'prop-types';
import useLocales from '../../hooks';
import './styles.css';

const PageContent = ({ item = {}, onAdd = () => {} }) => {
  const { lang } = useLocales();

  return (
    <div className="Content">
      <p className="item-info">
        {item?.description}
      </p>
      <p className="item-info">
        {lang.item.edition}
        <span className="item-info-accent">{` ${item?.madeIn.title}`}</span>
      </p>
      <p className="item-info">
        {lang.item.category}
        <span className="item-info-accent">{` ${item?.category.title}`}</span>
      </p>
      <p className="item-info">
        {lang.item.madeIn}
        <span className="item-info-accent">{` ${item?.edition}`}</span>
      </p>
      <p className="item-info">
        {lang.item.price}
        <span className="item-info-accent">{` ${item?.price}  ₽`}</span>
      </p>
      <button onClick={() => onAdd(item?._id)}>{lang.buttons.add}</button>
    </div>
  );
};

PageContent.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.shape({
      title: PropTypes.string,
      _id: PropTypes.string,
    }),
    description: PropTypes.string,
    edition: PropTypes.number,
    madeIn: PropTypes.shape({
      title: PropTypes.string,
      _id: PropTypes.string,
    }),
    price: PropTypes.number,
    title: PropTypes.string,
    _id: PropTypes.string,
  }),
  onAdd: PropTypes.func,
}

export default React.memo(PageContent);
