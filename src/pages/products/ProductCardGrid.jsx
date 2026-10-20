import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addToCart } from '../../store/cartSlice';
import {
  Card,
  ImagePlaceholder,
  CubeIcon,
  Content,
  Badge,
  Name,
  Category,
  Description,
  Price,
  Rating,
  Stars,
  Buttons,
  DetailsBtn,
  AddBtn,
} from './ProductCardGrid.styles';

function ProductCardGrid({ product }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleAdd = () => {
    dispatch(
      addToCart({
        product,
        quantity: 1,
      })
    );
  };

  const rating = Number(product.rating) || 0;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <Card>
      <ImagePlaceholder $color={product.color}>
        <CubeIcon />
        {product.badge && <Badge $type={product.badge}>{product.badge}</Badge>}
      </ImagePlaceholder>
      <Content>
        <Category>◇ {product.category}</Category>
        <Name>{product.name}</Name>
        <Description>{product.description}</Description>
        <Rating>
          <Stars>
            {'★'.repeat(fullStars)}
            {hasHalfStar && '☆'}
          </Stars>
          <span>({product.reviewsCount})</span>
        </Rating>
        <Price>
          ${product.price}
          <span>/mo</span>
        </Price>
        <Buttons>
          <Link to={`/products/${product.id}`} className="btn-link">
            <DetailsBtn type="button">{t('details')}</DetailsBtn>
          </Link>
          <AddBtn type="button" onClick={handleAdd}>
            🛒 {t('add')}
          </AddBtn>
        </Buttons>
      </Content>
    </Card>
  );
}

export default ProductCardGrid;