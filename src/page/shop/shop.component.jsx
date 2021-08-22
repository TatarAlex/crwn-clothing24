import React from "react";

import { SHOP_DATA } from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

function ShopPage() {
  const collections = SHOP_DATA;
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default ShopPage;
