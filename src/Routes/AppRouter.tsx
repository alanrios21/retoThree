import { Route, Routes as RouterRoutes } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import ListProducts from '../pages/ListProducts';
import ListClients from '../pages/ListClients';
import GlobalSales from '../pages/GlobalSales';
import Analytics from '../pages/Analytics';

const AppRouter = () => {

  return (
    <div>
      <RouterRoutes> 
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ListProducts />} />
        <Route path="/clients" element={<ListClients />} />
        <Route path="/geography" element={<GlobalSales />} />
        <Route path="/analytics" element={<Analytics />} />
      </RouterRoutes>
    </div>
  );
};

export default AppRouter;
