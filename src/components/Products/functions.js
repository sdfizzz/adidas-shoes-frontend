export function getImage(id, fileName, height) {
  return `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`;
}

export function getPriceString(price, currency) {
  switch (currency) {
    case 'USD':
      return `$${price / 100}`;
    case 'RUR':
      return `₽${price / 100}`;
    default:
      return '';
  }
}
