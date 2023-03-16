import CategoryFilters from '../CategoryFilters/CategoryFilters';
import Products from '../Products/Products';

const Dashboard = () => {
  return (
    <div>
      <CategoryFilters></CategoryFilters>
      <Products></Products>
      {/* AGREGAR OTROS COMPONENTES AQUI */}
    </div>
  );
};
export default Dashboard;
