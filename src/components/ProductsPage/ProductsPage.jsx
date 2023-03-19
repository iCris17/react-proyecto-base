import Header from '../Header/Header';

import ProductsPageBody from '../ProductsPageBody/ProductsPageBody';
import CategoryFilters from '../CategoryFilters/CategoryFilters';
import Products from '../Products/Products';

const ProductsPage = () => {
  return (
    <>
      <Header></Header>
      <ProductsPageBody></ProductsPageBody>
      <CategoryFilters></CategoryFilters>
      <Products></Products>
    </>
  );
};

export default ProductsPage;
