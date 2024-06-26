// Maximum profit by buying and selling a share at most twice
// Last Updated : 31 Mar, 2023
// In daily share trading, a buyer buys shares in the morning and sells them on the same day. If the trader is allowed to make at most 2 transactions in a day, the second transaction can only start after the first one is complete (Buy->sell->Buy->sell). Given stock prices throughout the day, find out the maximum profit that a share trader could have made.

// Examples: Input:   price[] = {10, 22, 5, 75, 65, 80}
// Output:  87
// Trader earns 87 as sum of 12, 75
// Buy at 10, sell at 22,
// Buy at 5 and sell at 80

// Input:   price[] = {2, 30, 15, 10, 8, 25, 80}
// Output:  100
// Trader earns 100 as sum of 28 and 72
// Buy at price 2, sell at 30, buy at 8 and sell at 80

// Input:   price[] = {100, 30, 15, 10, 8, 25, 80};
// Output:  72
// Buy at price 8 and sell at 80.

// Input:   price[] = {90, 80, 70, 60, 50}\
// Output:  0
// Not possible to earn.

//**Very Intersting Question,i'm pleased to do it. Lets Do it**/

// const prices = [10, 22, 5, 75, 65, 80];
// const len = prices.length;
// const findProfit = (arr, len) => {
//   let firstbuy,
//     firstsell = 0;
//   let secondsell = arr[len - 1],
//     secondbuy = 0;
//   if (arr[0] < arr[1]) {
//     firstbuy = arr[0];
//   } else {
//     firstbuy = 0;
//   }
//   let totalprofit = 0;
//   let i;
//   for (i = 0; i < arr.length - 1; i++) {
//     if (firstbuy < arr[i] && arr[i] > arr[i + 1]) {
//       firstsell = arr[i];
//       break;
//     }
//   }

//   for (let j = arr.length; j > i; j--) {
//     if (arr[j - 1] < arr[j]) {
//       secondbuy = arr[j - 1];
//     }
//   }
//   if (i == 0) {
//     totalprofit = secondsell - secondbuy;
//   } else {
//     totalprofit = firstsell - firstbuy + (secondsell - secondbuy);
//   }

//   return totalprofit;
// };

// console.log(findProfit(prices, len));
