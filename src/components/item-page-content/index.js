import React from 'react';
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

export default React.memo(PageContent);
