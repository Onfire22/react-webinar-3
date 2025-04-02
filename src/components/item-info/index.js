import './style.css';

function ItemInfo({ description, price, id, onAdd }) {
  return (
    <div className="Item-info">
      <p className="Item-description">{description}</p>
      <ul className="Item-info_table">
        <li className="Item-info_info">
          <p className="Item-info_title">Страна производитель:</p>
          <p className="Item-info_description"></p>
        </li>
        <li className="Item-info_info">
          <p className="Item-info_title">Категория:</p>
          <p className="Item-info_description"></p>
        </li>
        <li className="Item-info_info">
          <p className="Item-info_title">Год выпуска:</p>
          <p className="Item-info_description"></p>
        </li>
      </ul>
      <div className="Item-info_price">
        <p className="Item-info_price-title">Цена: {price} ₽</p>
      </div>
      <button className="Item-info-button" type="button" onClick={() => onAdd(id)}>
        Добавить
      </button>
    </div>
  );
}

export default ItemInfo;
