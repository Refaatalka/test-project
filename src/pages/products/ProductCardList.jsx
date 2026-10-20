import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CustomButton from '../../components/common/custom-button';
import {
  Card,
  ImagePlaceholder,
  Content,
  Badge,
  Name,
  Category,
  Description,
  Price,
  Rating,
  Buttons,
} from './ProductCardList.styles';

function ProductCardList({ product, onAddToCart }) {
  const { t } = useTranslation();

  return (
    <Card>
      <ImagePlaceholder $color={product.color}>
        📦
        {product.badge && (
          <Badge $type={product.badge}>{product.badge}</Badge>
        )}
      </ImagePlaceholder>

      <Content>
        <Name>{product.name}</Name>
        <Category>{product.category}</Category>
        <Description>{product.description}</Description>
        <Rating>
          ⭐ {product.rating} ({product.reviewsCount} {t('reviews')})
        </Rating>
        <Price>
          ${product.price}
          <span>/mo</span>
        </Price>

        <Buttons>
          <Link to={`/products/${product.id}`}>
            <CustomButton>{t('details')}</CustomButton>
          </Link>
          <CustomButton onClick={() => onAddToCart(product)}>
            {t('addToCart')}
          </CustomButton>
        </Buttons>
      </Content>
    </Card>
  );
}

export default ProductCardList;