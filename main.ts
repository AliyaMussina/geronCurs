// import { seasons } from "./src/scripts/data";
// import { TSeason } from "./src/scripts/types";
// ------------------------------------------------------1 задание  - найти самый прибыльный сезон
//  let maxIncome:TSeason | null = null;
//  let maxSeasonName:string | null = null;
//  Object.entries(seasons).forEach(([season, seasonInfo]) => {
//     if (!maxIncome || maxIncome.income < seasonInfo.income) {
//         maxIncome = seasonInfo;
//         maxSeasonName = season;
//     }
//  });
// //  console.log (maxSeasonName, maxIncome);
// ---------------------------------------------------- 2 задание - найти сезон с самым низким доходом и вывести всю информацию о нем
// let minIncome:TSeason | null = null;
// let minSeasonName:string | null = null;
// Object.entries(seasons).forEach(([season, seasonInfo]) => {
//     if (!minIncome || minIncome.income > seasonInfo.income) {
//         minIncome = seasonInfo;
//         minSeasonName = season;
//     }
//  });
// //  console.log (minSeasonName, minIncome);
// --------------------------------------------------- 3 задание - вывести информацию в каком сезоне больше всего появилось новых сотрудников
//  let maxHired:TSeason | null = null;

import { user } from "./src/models/Client"
import { myAddress, myAddress1 } from "./src/models/Delivery"
import { Order } from "./src/models/Order"

//  Object.entries(seasons).forEach(([season, seasonInfo]) => {
//     if (!maxHired || maxHired.hired < seasonInfo.hired) {
//         maxHired = seasonInfo;
//         maxSeasonName = season;
//     }
//  });
//  console.log (maxSeasonName, maxHired);
// ----------------------------------------------------- 4 задание - вывести информацию в каком сезоне было больше всего увольнительных
//  let maxDismiss:TSeason | null = null;

//  Object.entries(seasons).forEach(([season, seasonInfo]) => {
//     if (!maxDismiss || maxDismiss.dismissed < seasonInfo.dismissed) {
//         maxDismiss = seasonInfo;
//         maxSeasonName = season;
//     }
//  });

// -----------------------------------------------------------------lesson заказ


// const newOrder1 = new Order(user,myAddress)
// const newOrder2 = new Order(user,myAddress1)
// const newOrder3 = new Order(user,myAddress)
// const newOrder4 = new Order(user,myAddress1)

// console.log(newOrder1)
// console.log(newOrder2)
// console.log(newOrder3)
// console.log(newOrder4)


// ----------------------------------------------------------lesson 15
// import {format} from "date-fns";
// import{ru} from "date-fns/locale";
// import{parse} from "date-fns";

// const currentDate = new Date ();
// const formattedDate3 = format(currentDate, "d MMMM",{
// locale:ru
// })

// const formattedDate = format(currentDate, "p",{
// locale:ru
// })
// const formattedDate2 = format(currentDate, "pp",{
//     locale:ru
//     })


// console.log(formattedDate);
// console.log(formattedDate2);
// console.log(formattedDate3);
// console.log(parse("20.12.2024", "dd.MM.yyyy", new Date()));

// ----------------------------------------------------------------15.1(2,3)
// const date1: Date = new Date('2023-12-20');
// const date2: Date = new Date('2024-02-13');
// // Разница в миллисекундах
// const timeS: number = date2.getTime() - date1.getTime();
// // Разница в днях
// const days: number = Math.floor(timeS/ (24 * 60 * 60 * 1000));
// console.log(`Разница в днях: ${days} дней`);

// const date = new Date('2024-02-01');
// const formattedDate = date.toLocaleDateString('ru', {
//   day: '2-digit',
//   month: 'long',
// });
// console.log(formattedDate); 


// const randomMonth = Math.floor(Math.random() * 12) + 1;
// const generatedDate = new Date(`2023-${randomMonth}-25`);
// const formattedDate2 = generatedDate.toLocaleDateString('ru', {
//   day: '2-digit',
//   month: 'long',
//   year: 'numeric',
// });

// console.log(formattedDate2);
// -----------------------------------------------------------14.1 
// interface Transaction {
//   sumT: number;
//   category: string;
//   type: 'income' | 'expense';
// }

// const transactions: Transaction[] = [
//   { sumT: 100, category: 'Еда', type: 'expense' },
//   { sumT: 200, category: 'Транспорт', type: 'expense' },
//   { sumT: 300, category: 'Жилье', type: 'expense' },
//   { sumT: 150, category: 'Еда', type: 'expense' },
//   { sumT: 950, category: 'Зарплата', type: 'income' },
// ];

// const expenseByCategory = transactions.reduce((accumulator, transaction) => {
//   if (transaction.type === 'expense') {
//     const { category, sumT } = transaction;
//     const categoryExists = Object.keys(accumulator).some((existingCategory) => existingCategory === category);
//       if (categoryExists) {
//       accumulator[category] += sumT;
//     } else {
//       accumulator[category] = sumT;
//     }
//   }

//   return accumulator;
// }, {} as Record<string, number>);


// console.log('Общая сумма расходов по категориям:');
// for (const category in expenseByCategory) {
//   console.log(`${category}: ${expenseByCategory[category]}`);
// }
// -------------------------------------------------14.2
// interface Book {
//   title: string;
//   author: string;
//   year: number;
//   genre: string;
// }

// const libraryCatalog: Book[] = [
//   { title: 'Book1', author: 'Author1', year: 2020, genre: 'Fiction' },
//   { title: 'Book2', author: 'Author2', year: 2018, genre: 'Mystery' },
//   { title: 'Book1', author: 'Author1', year: 2020, genre: 'Fiction' },
//   { title: 'Book3', author: 'Author3', year: 2015, genre: 'Sci-Fi' },
//   { title: 'Book2', author: 'Author2', year: 2018, genre: 'Mystery' },
 
// ];
// interface CatalogEntry {
//   book: Book;
//   quantity: number;
// }

// const uniqueBooksCatalog: CatalogEntry[] = libraryCatalog.reduce((catalog, book) => {
//   const existingEntry = catalog.find((entry) => (
//     entry.book.title === book.title &&
//     entry.book.author === book.author &&
//     entry.book.year === book.year &&
//     entry.book.genre === book.genre
//   ));

//   if (existingEntry) {
//     existingEntry.quantity += 1;
//   } else {
//     catalog.push({ book, quantity: 1 });   
//   }

//   return catalog;
// }, [] as CatalogEntry[]);

// console.log('Новый каталог уникальных книг с количеством экземпляров:');
// console.log(uniqueBooksCatalog);

// -------------------------------------------------14.3
// interface DailyData {
//     date: string;
//     sales: number;
//     temperature: number;
//   }
  
//   const salesData: DailyData[] = [
//     { date: '2024-02-01', sales: 800, temperature: 15 },
//     { date: '2024-02-02', sales: 1200, temperature: 18 },
//     { date: '2024-02-03', sales: 950, temperature: 14 },
//   ];
  
//   // Находим первый день с продажами более 1000 единиц
//   const firstDayOver1000Sales = salesData.find((day) => day.sales > 1000);
  
//   if (firstDayOver1000Sales) {
//     console.log(`Первый день с продажами более 1000 единиц: ${firstDayOver1000Sales.date}`);
//     console.log(`Температура воздуха в этот день: ${firstDayOver1000Sales.temperature} градусов`);
//   } else {
//     console.log('Продажи более 1000 единиц не были достигнуты');
//   }
// -------------------------------------------------14.4
// interface RocketStage {
//     phase: string;
//     success: boolean;
//   }
  
//   const rocketFlightStages: RocketStage[] = [
//     { phase: 'Подготовка', success: true },
//     { phase: 'Старт', success: true },
//     { phase: 'Взлет', success: true },
//     { phase: 'Разгон', success: true },
//     { phase: 'Отделение первой ступени', success: true },
//     { phase: 'Вторичный разгон', success: true },
//     { phase: 'Отделение второй ступени', success: true },
//     // Добавьте другие фазы полета по мере необходимости
//   ];
  
//   const allStagesSuccessful = rocketFlightStages.every((stage) => stage.success);
  
//   if (allStagesSuccessful) {
//     console.log('Все фазы полета прошли успешно. Ракету можно отправлять на следующую миссию!');
//   } else {
//     console.log('Не все фазы полета прошли успешно. Ракета требует дополнительной проверки перед следующей миссией.');
//   }

