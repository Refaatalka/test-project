import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  removeFromCart,
  clearCart,
  updateQuantity,
  selectCartCount,
} from '../../store/cartSlice';
import { addOrder } from '../../store/ordersSlice';
import {
  PageWrapper,
  Title,
  RemoveButton,
  EmptyBox,
  SuccessText,
  CartLayout,
  CartList,
  CartItem,
  QtyControl,
  Summary,
  SummaryTitle,
} from './styles';

function Cart() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const items = useSelector((state) => state.cart.items || []);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = useSelector(selectCartCount);
  const [isSuccess, setIsSuccess] = useState(false);

  const changeQty = (id, qty, amount) => {
    const next = qty + amount;
    if (next < 1) {
      dispatch(removeFromCart(id));
      return;
    }
    dispatch(updateQuantity({ id, quantity: next }));
  };

  const handleCheckout = () => {
    if (items.length === 0) return;

    const isConfirmed = window.confirm(
      t('confirmPurchase', { total: total.toFixed(2) })
    );

    if (!isConfirmed) return;

    dispatch(
      addOrder({
        products: items,
        total: total,
      })
    );

    dispatch(clearCart());
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  if (items.length === 0) {
    return (
      <>
        <Header />
        <PageWrapper>
          <Title>{t('yourCart')}</Title>

          {isSuccess ? (
            <EmptyBox>
              <SuccessText>{t('purchaseSuccess')}</SuccessText>
              <Link to="/products">{t('browseProducts')}</Link>
            </EmptyBox>
          ) : (
            <EmptyBox>
              <p>{t('cartEmpty')}</p>
              <Link to="/products">{t('browseProducts')}</Link>
            </EmptyBox>
          )}
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
          {t('yourCart')} <span>({itemCount} {t('items')})</span>
        </Title>
        <CartLayout>
          <CartList>
            {items.map((item) => (
              <CartItem key={item.id}>
                <div className="item-img">📦</div>
                <div className="item-details">
                  <h3>
                    <Link to={`/products/${item.id}`}>{item.name}</Link>
                  </h3>
                  <span className="cat">{item.category}</span>
                  <div className="price">
                    ${item.price} <span>/mo</span>
                  </div>
                </div>
                <div className="item-actions">
                  <QtyControl>
                    <button
                      type="button"
                      onClick={() => changeQty(item.id, item.quantity, -1)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => changeQty(item.id, item.quantity, 1)}
                    >
                      +
                    </button>
                  </QtyControl>
                  <RemoveButton
                    type="button"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    {t('remove')}
                  </RemoveButton>
                </div>
              </CartItem>
            ))}
          </CartList>
          <Summary>
            <SummaryTitle>{t('orderSummary')}</SummaryTitle>
            <div className="row">
              <span>{t('item')}</span>
              <span>{itemCount}</span>
            </div>
            <div className="row">
              <span>{t('total')}</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <button className="btn-checkout" onClick={handleCheckout}>
              {t('checkout')}
            </button>
            <button
              className="btn-clear"
              onClick={() => dispatch(clearCart())}
            >
              {t('clearCart')}
            </button>
          </Summary>
        </CartLayout>
      </PageWrapper>
      <Footer />
    </>
  );
}

export default Cart;