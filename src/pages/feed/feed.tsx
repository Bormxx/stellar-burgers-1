import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { getFeeds, ordersSelector } from '../../services/reducers/orders';

export const Feed: FC = () => {
  /** TODO: взять переменную из стора */
  const orders = useAppSelector(ordersSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFeeds());
  }, []);
  const handleGetFeeds = useCallback(() => {
    dispatch(getFeeds());
  }, []);
  return (
    <div>
      <FeedUI orders={orders} handleGetFeeds={handleGetFeeds} />;
    </div>
  );
};
