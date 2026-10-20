import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  PageWrapper,
  Title,
  EmptyBox,
  OrdersList,
  OrderCard,
  OrderHeader,
  OrderProducts,
  ProductRow,
  OrderTotal,
  TotalPrice,
} from './styles';

function Orders() {
  const { t } = useTranslation();
  const orders = useSelector((state) => state.orders.items || []);

  const totalPrice = orders.reduce((sum, order) => sum + order.total, 0);

  if (orders.length === 0) {
    return (
      <>
        <Header />
        <PageWrapper>
          <Title>{t('myOrders')}</Title>
          <EmptyBox>
            <p>{t('noOrders')}</p>
            <Link to="/products">{t('browseProducts')}</Link>
          </EmptyBox>
        </PageWrapper>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <PageWrapper>
        <Title>
          {t('myOrders')} <span>({orders.length})</span>
        </Title>

        <OrdersList>
          {orders
            .slice()
            .reverse()
            .map((order) => (
              <OrderCard key={order.id}>
                <OrderHeader>
                  <div>
                    <strong>{t('order')} #{order.id}</strong>
                    <span>{order.date}</span>
                  </div>
                  <OrderTotal>${order.total}</OrderTotal>
                </OrderHeader>

                <OrderProducts>
                  {order.products.map((product) => (
                    <ProductRow key={product.id}>
                      <span>
                        {product.name} × {product.quantity}
                      </span>
                      <span>
                        ${(product.price * product.quantity)}
                      </span>
                    </ProductRow>
                  ))}
                </OrderProducts>
              </OrderCard>
            ))}
        </OrdersList>

        <TotalPrice>
          <span>{t('totalOfAllOrders')}</span>
          <strong>${totalPrice}</strong>
        </TotalPrice>
      </PageWrapper>
      <Footer />
    </>
  );
}

export default Orders;