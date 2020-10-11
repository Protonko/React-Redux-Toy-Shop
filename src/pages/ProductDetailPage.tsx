import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import {ProductDetail} from 'components/ProductDetail/ProductDetail';

interface IRouteParams {
  id?: string,
}

export const ProductDetailPage: FC = () => {
  const {id} = useParams<IRouteParams>();
  return (
    <div>
      Hello {id}
      <ProductDetail />
    </div>
  );
}