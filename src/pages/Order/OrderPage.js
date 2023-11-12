import { useLocation } from 'react-router-dom';
import { OrderFailure } from './components/OrderFailure';
import { OrderSuccess } from './components/OrderSuccess';
import { useTitle } from '../../hooks/useTitle';

export const OrderPage = () => {
  const { state } = useLocation();
  useTitle('Order Summary');

  return (
    <main>
      {state?.status ? <OrderSuccess data={state?.data} /> : <OrderFailure />}
    </main>
  );
};
