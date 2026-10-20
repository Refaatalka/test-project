import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCardList from './ProductCardList';
import ProductCardGrid from './ProductCardGrid';
import productsArray from '../../data/products';
import { addToCart } from '../../store/cartSlice';
import {
  Page,
  PageHeader,
  Title,
  Subtitle,
  FilterBar,
  Categories,
  CategoryBtn,
  RightControls,
  SortSelect,
  ViewToggle,
  ToggleBtn,
  ResultsCount,
  ProductsGrid,
  ProductsList,
  EmptyMessage,
} from './products.styles';

function Products() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const categories = [
    { key: 'All', label: t('all') },
    { key: 'Software', label: t('software') },
    { key: 'AI', label: t('ai') },
    { key: 'Hardware', label: t('hardware') },
    { key: 'Robotics', label: t('robotics') },
    { key: 'Security', label: t('security') },
  ];

  const filtered =
    selectedCategory === 'All'
      ? productsArray
      : productsArray.filter((p) => p.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.id - b.id;
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  return (
    <Page>
      <Header />

      <PageHeader>
        <Title>{t('ourProducts')}</Title>
        <Subtitle>{t('productsSubtitle')}</Subtitle>
      </PageHeader>

      <div
        className="container"
        style={{ maxWidth: 1140, margin: '0 auto', padding: '0 20px' }}
      >
        <FilterBar>
          <Categories>
            {categories.map((cat) => (
              <CategoryBtn
                key={cat.key}
                $active={selectedCategory === cat.key}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {cat.label}
              </CategoryBtn>
            ))}
          </Categories>

          <RightControls>
            <SortSelect
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">{t('sortDefault')}</option>
              <option value="price-asc">{t('sortPriceAsc')}</option>
              <option value="price-desc">{t('sortPriceDesc')}</option>
              <option value="rating">{t('sortRating')}</option>
            </SortSelect>

            <ViewToggle>
              <ToggleBtn
                type="button"
                $active={viewMode === 'grid'}
                onClick={() => setViewMode('grid')}
                title={t('gridView')}
              >
                ▦
              </ToggleBtn>
              <ToggleBtn
                type="button"
                $active={viewMode === 'list'}
                onClick={() => setViewMode('list')}
                title={t('listView')}
              >
                ☰
              </ToggleBtn>
            </ViewToggle>
          </RightControls>
        </FilterBar>

        <ResultsCount>
          {t('productsFound', { count: sorted.length })}
        </ResultsCount>

        {sorted.length === 0 ? (
          <EmptyMessage>{t('noProducts')}</EmptyMessage>
        ) : viewMode === 'grid' ? (
          <ProductsGrid>
            {sorted.map((product) => (
              <ProductCardGrid key={product.id} product={product} />
            ))}
          </ProductsGrid>
        ) : (
          <ProductsList>
            {sorted.map((product) => (
              <ProductCardList
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </ProductsList>
        )}
      </div>

      <Footer />
    </Page>
  );
}

export default Products;