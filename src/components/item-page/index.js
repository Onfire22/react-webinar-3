import Head from '../head';
import useSelector from '../../store/use-selector';
import BasketTool from '../basket-tool';
import PageLayout from '../page-layout';
import PageContent from '../item-page-content';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles.css';

const ItemPage = ({ onOpen, onAdd }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const select = useSelector(state => ({
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  useEffect(() => {
    fetch(`/api/v1/articles/${id}?fields=madeIn(title,code),category(title),description,edition,price,_id`)
      .then((data) => data.json())
      .then((data) => setItem(data.result));
    return () => setItem(null);
  }, []);

  return (
    <PageLayout>
      <Head title={'Название товара'}/>
      <BasketTool onOpen={onOpen} amount={select.amount} sum={select.sum} />
      <PageContent item={item} onAdd={onAdd} />
    </PageLayout>
  );
};

export default ItemPage;
