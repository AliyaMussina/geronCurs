// let array = [2019, 2020, 2021, 2022, 2023, 2024];
// let array2 = ["весна", "осень", "лето", "зима"];
// console.log(array[3]);
// console.log(array2[2]);
// console.log(array2[3]);
// console.log(array2[0]);

// type TObject = {
//     name: string,
//     age: number
// }
// let array3:TObject[] = [
//     {
//         name: "aliya",
//         age: 23
//     },
//     {
//         name: "aliya",
//         age: 22
//     },
//     {
//         name: "aliya",
//         age: 45
//     }
// ]
// console.log(array3[1].age)
// console.log(array3[0].name)
// console.log(array3[2])

// ------------------------------------------------------------------------------------
// type TObjects = {
//     title: string;
//     days: number;
// };

// let array4: TObjects[] = [
//     { title: "Январь", days: 30 },
//     { title: "Февраль", days: 28 },
//     { title: "Март", days: 16 },
//     { title: "Апрель", days: 31 },
//     { title: "Май", days: 25 },
// ];
// array4.push({
//     title: "Июнь",
//     days: 8
// });
// console.log(array4);

// let monthWithMostDays = array4.reduce((maxMonth, currentMonth) => {
//     if (currentMonth.days > maxMonth.days) {
//         return currentMonth;
//     } else {
//         return maxMonth;
//     }
// });
// let monthWithFewerDays = array4.reduce((minMonth, currentMonth) => {
//     if (currentMonth.days < minMonth.days) {
//         return currentMonth;
//     } else {
//         return minMonth;
//     }
// });

// const monthsWithLessThan30Days = array4.filter((month) => month.days < 30);

// console.log("Месяцы с меньше чем 30 днями:", monthsWithLessThan30Days);


// const totalDays = array4.reduce((acc, month) => acc + month.days, 0);
// console.log("Общее количество дней во всех месяцах:", totalDays);
// console.log("Месяц с наибольшим количеством дней:", monthWithMostDays.title);
// console.log("Месяц с наименьшим количеством дней:", monthWithFewerDays.title);
// ---------------------------------------------------------------------------------------------------
// type TObjects = {
//     title: string;
//     category: string;
//     price: number;
//     name?: string;
// };

// let array4: TObjects[] = [
//     { title: "BOSH-30", category: "Холодильник", price: 1500000 },
//     { title: "BOSH-20", category: "Телевизор", price: 50000 },
//     { title: "BOSH-15", category: "Плита", price: 250000 },
// ];

// console.log(array4);

// let expensiveProduct = array4.reduce((maxProduct, currentProduct) => {
//     if (currentProduct.price > maxProduct.price) {
//         return currentProduct;
//     } else {
//         return maxProduct;
//     }
// });
// let cheapProduct = array4.reduce((minProduct, currentProduct) => {
//     if (currentProduct.price < minProduct.price) {
//         return currentProduct;
//     } else {
//         return minProduct;
//     }
// });

// console.log("Самый дорогой товар:", expensiveProduct.category);
// console.log("Самый дешевый товар:", cheapProduct.category);

// -------------------------------------------------------------------------------------------------------
// type Product = {
//     name: string;
//     price: number;
// }

// const product: Product [] = [{
//     name: "Название товара",
//     price: 16000,
// },
//     {
//         name: "Название товара",
//         price: 160000,
//     },
//     {
//         name: "Название товара",
//         price: 16000,
//     }
// ]
// if (product.price > 140000) {
//     // Уменьшаем цену на 10%
//     product.price = product.price * 0.9;
// }
// // через цикл 
// console.log(`Цена товара после применения скидки: ${product.price}`);




