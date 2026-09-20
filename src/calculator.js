function calculateTotal(price, quantity) {
  const total = price * quantity;

  // Potential bug: discount can make the total negative
  return total;
}



function processPayment(user, amount) {
  // Security issue: sensitive information
  console.log("Processing payment for", user.email, user.password);

  // Bug: payment amount isn't validated
  return chargeCard(amount);
}

function chargeCard(amount) {
  return true;
}

module.exports = {
  calculateTotal,
  applyDiscount,
  processPayment,
};