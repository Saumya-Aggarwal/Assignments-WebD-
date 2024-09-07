const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
];

// function calculateTotalSpentByCategory(transactions) {
//     const categoryTotalMap = {};
//     transactions.forEach((transaction) => {
//       const { category, price } = transaction; //automatically does this{ category: 'Food', price: 10 }
//       console.log({category,price});
//       if (category in categoryTotalMap) {

//         categoryTotalMap[category] += price;
//         console.log(categoryTotalMap);
//       } else {
//         categoryTotalMap[category] = price;
//         console.log(categoryTotalMap); //stores the value as {food : 20}
//       }
//     });

//     const result = [];
//     for (const x in categoryTotalMap) {
//       console.log(x);
//       result.push({ category: x, totalSpent: categoryTotalMap[x] });
//     }
//     return result;
//   }
function calculateTotalSpentByCategory(transactions) {
  const categoryTotalSpent = {};
  transactions.forEach((element) => {
    const { category, price } = element;
    if (category in categoryTotalSpent) {
      categoryTotalSpent[category] += price;
    } else {
      categoryTotalSpent[category] = price;
    }
  });
  result =[];
  for (const x in categoryTotalSpent) {
    result.push({ category: x, totalSpent: categoryTotalSpent[x] });
  }
  return result;
}

console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
