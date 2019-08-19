switch (path) {
  case '/seller/smart-phone-transaction':
    <Bundle load={DynamicModules.smartPhone.seller} />
  case '/buyer/furniture-transaction':
  	<Bundle load={DynamicModules.furniture.buyer} />
}