import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import productsArray from '../../data/products';
import CustomButton from '../../components/common/custom-button';
import { addToCart } from '../../store/cartSlice';
import {
  PageWrapper,
  Breadcrumb,
  BackLink,
  DetailsContainer,
  ImageBox,
  InfoBox,
  Badge,
  RelatedBadge,
  ProductName,
  Category,
  Rating,
  Description,
  Price,
  QuantityBox,
  QtyBtn,
  QtyValue,
  Actions,
  RelatedSection,
  MaxQtyMessage,
  RelatedCard,
  RelatedImage,
  RelatedContent,
  RelatedCategory,
  RelatedName,
  RelatedDescription,
  RelatedRating,
  RelatedPrice,
} from './productDetails.styles';

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);

  const product = productsArray.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div>
        <Header />
        <PageWrapper>
          <h2>{t('productNotFound')}</h2>
          <Link to="/products">{t('backToProducts')}</Link>
        </PageWrapper>
        <Footer />
      </div>
    );
  }

  const maxQty = product.id === 1 ? 3 : 99;
  const atMax = quantity >= maxQty;

  const increase = () => {
    if (quantity < maxQty) setQuantity((q) => q + 1);
  };

  const decrease = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  const addItem = () => {
    dispatch(addToCart({ product, quantity }));
  };

  const buyNow = () => {
    dispatch(addToCart({ product, quantity }));
    navigate('/cart');
  };

  const related = productsArray.filter((item) => item.id !== product.id);

  return (
    <div>
      <Header />
      <PageWrapper>
        <Breadcrumb>
          <Link to="/">{t('homeBreadcrumb')}</Link> /{' '}
          <Link to="/products">{t('productsBreadcrumb')}</Link> /{' '}
          <span>{product.name}</span>
        </Breadcrumb>

        <BackLink>
          <Link to="/products">{t('backToProducts')}</Link>
        </BackLink>

        <DetailsContainer>
          <ImageBox>📦</ImageBox>

          <InfoBox>
            {product.badge && <Badge $type={product.badge}>{product.badge}</Badge>}
            <ProductName>{product.name}</ProductName>
            <Category>{product.category}</Category>
            <Rating>
              ⭐ {product.rating} ({product.reviewsCount} {t('reviews')})
            </Rating>
            <Description>{product.description}</Description>
            <Price>
              ${product.price}
              <span>/mo</span>
            </Price>

            <QuantityBox>
              <QtyBtn type="button" onClick={decrease} disabled={quantity === 1}>
                −
              </QtyBtn>
              <QtyValue>{quantity}</QtyValue>
              <QtyBtn
                type="button"
                onClick={increase}
                disabled={atMax}
                $atMaxQuantity={atMax}
              >
                +
              </QtyBtn>
            </QuantityBox>

            {atMax && (
              <MaxQtyMessage>
                {t('onlyLeft', { count: maxQty })}
              </MaxQtyMessage>
            )}

            <Actions>
              <CustomButton onClick={addItem}>{t('addToCart')}</CustomButton>
              <CustomButton onClick={buyNow}>{t('buyNow')}</CustomButton>
            </Actions>
          </InfoBox>
        </DetailsContainer>

        <RelatedSection>
          <h2>{t('relatedProducts')}</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="related-swiper"
          >
            {related.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  to={`/products/${item.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <RelatedCard>
                    <RelatedImage>
                      📦
                      {item.badge && (
                        <RelatedBadge $type={item.badge}>{item.badge}</RelatedBadge>
                      )}
                    </RelatedImage>
                    <RelatedContent>
                      <RelatedCategory>{item.category}</RelatedCategory>
                      <RelatedName>{item.name}</RelatedName>
                      <RelatedDescription>{item.description}</RelatedDescription>
                      <RelatedRating>
                        ⭐ {item.rating} ({item.reviewsCount})
                      </RelatedRating>
                      <RelatedPrice>
                        ${item.price}
                        <span>/mo</span>
                      </RelatedPrice>
                    </RelatedContent>
                  </RelatedCard>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </RelatedSection>
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default ProductDetails;