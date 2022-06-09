// Coding chllenge #4
/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:

1. Create an array 'bills' containing all 10 test bill values

2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
*/

function calculateTotalBills(bills) {
  let tips = [];
  let totals = [];

  bills.forEach(bill => {
    let tip = calctip(bill)
    tips.push(tip)
    totals.push(tip + bill)
  });

  console.log("bills: " + bills);
  console.log("tips: " + tips);
  console.log("totals: " + totals);
}

let bills_1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
calculateTotalBills(bills_1)


