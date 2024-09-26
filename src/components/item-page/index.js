import React from 'react';
import Head from '../head';
import useSelector from '../../store/use-selector';
import BasketTool from '../basket-tool';
import PageLayout from '../page-layout';
import PageContent from '../item-page-content';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_ROUTES } from '../../routes';
import './styles.css';

const ItemPage = ({ onOpen, onAdd }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const select = useSelector(state => ({
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  useEffect(() => {
    fetch(API_ROUTES.getItemById(id))
      .then((data) => data.json())
      .then((data) => setItem(data.result));
    return () => setItem(null);
  }, []); 

  return (
    <PageLayout>
      <Head title={item?.title}/>
      <BasketTool onOpen={onOpen} amount={select.amount} sum={select.sum} />
      <PageContent item={item} onAdd={onAdd} />
    </PageLayout>
  );
};

export default React.memo(ItemPage);
