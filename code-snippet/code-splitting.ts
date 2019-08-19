const DynamicModules: DynamicModules = {
  smartphone: {
    seller: () => import(/* webpackChunkName: "smartphone-seller" */ './SmartPhoneTransaction/Seller'),
    buyer: () => import(/* webpackChunkName: "smartphone-buyer" */ './SmartPhoneTransaction/Buyer'),
  },
  furniture: {
    seller: () => import(/* webpackChunkName: "furniture-seller" */ './FurnitureTransaction/Seller'),
    buyer: () => import(/* webpackChunkName: "furniture-buyer" */ './FurnitureTransaction/Buyer'),
  },
  yoyoShipping: {
    seller: () => import(/* webpackChunkName: "yoyo-seller" */ './YoyoShippingTransaction/Seller'),
    buyer: () => import(/* webpackChunkName: "yoyo-buyer" */ './YoyoShippingTransaction/Buyer'),
  },
};