/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
function getIncludingVATprice(preTax, vat) {
  const includingVATprice = (Number(preTax) + (preTax * vat / 100));
  return includingVATprice;
}

export default getIncludingVATprice;
