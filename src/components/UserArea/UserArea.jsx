import Header from '../Header/Header';

import ProductsPageBody from '../ProductsPageBody/ProductsPageBody';
import UsersNav from '../UsersNav/UsersNav';

const ProductsPage = () => {
  return (
    <>
      <Header></Header>
      <ProductsPageBody></ProductsPageBody>
      <UsersNav></UsersNav>
      {/* TIENES QUE AGREGAR LOS DEMAS COMPONENTES AQUI */}
    </>
  );
};

export default ProductsPage;
