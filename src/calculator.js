function calculateTotal(price, quantity) {
  return price * quantity;
}

function applyDiscount(total, discount) {
  return total - discount;
}

module.exports = {
  calculateTotal,
  applyDiscount,
};