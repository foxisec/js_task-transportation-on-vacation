/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
<<<<<<< HEAD
  const DAILY_RATE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;

  let totalCost = days * DAILY_RATE;

  if (days >= LONG_TERM) {
    totalCost -= LONG_TERM_DISCOUNT;
  } else if (days >= MID_TERM) {
    totalCost -= MID_TERM_DISCOUNT;
  }

  return totalCost;
=======
  // write code here
>>>>>>> b1a3d0d9a9103838b0ee5ab218f5910b0ee87c7b
}

module.exports = calculateRentalCost;
