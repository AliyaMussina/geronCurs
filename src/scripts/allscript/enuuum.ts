// enum Statuses{
// CREATED,
// SENT,
// RECEIVED,
// COMPLETED,
// }
// let statusServer:Statuses

// type TStatusCallBack = (status:string) =>void
// let setStatusServer = (currentStatus:Statuses, callback:TStatusCallBack) =>{
//     statusServer = currentStatus
//     const statusMessage = checkStatus(currentStatus)
//     callback(statusMessage)
// }

// let getStatusServer = (callback:TStatusCallBack) => {
//     const statusMessage = checkStatus(statusServer)
//     callback(statusMessage)
// }

// let checkStatus = (currentStatus:Statuses) =>{
//     switch(currentStatus){
//         case Statuses.CREATED:
//             return 'заявка создана сотрудником и передана руководителю'
//         case Statuses.SENT:
//             return 'руководитель отправил заявку на исполнение'
//         case Statuses.RECEIVED:
//             return 'сотрудник подтверждает заявку'
//         case Statuses.COMPLETED:
//             return 'бухгалтер подтверждает завершение заявки'
//         default:
//             return 'Такого статуса не найдено'        
//     }
// }
// setStatusServer(Statuses.RECEIVED, (message) =>{
//     console.log(message)
// } )
// getStatusServer((message) =>{
//     console.log(message)
// })

// Продуктовый магазин с 3 видами продукции: молочная, мучная и мясная. 
// Вывести на какую сумму было продано каждой продукции для каждого 
// дня недели (Пон-Воскр). Также вывести общий доход за всю неделю.

// enum products {
//     milk = "молочная",
//     flour = "мучная",
//     meat = "мясная"
// }
// let mondayProducts = (milkCount: number, flourCount: number, meatCount: number) =>{
//     console.log(`В понедельник продали: ${products.milk}:${milkCount}, ${products.flour}:${flourCount}, ${products.meat}:${meatCount}`)
//     return milkCount + flourCount + meatCount
// }
// let tuesdayProducts = (milkCount: number, flourCount: number, meatCount: number) =>{
//     console.log(`Во вторник продали: ${products.milk}:${milkCount}, ${products.flour}:${flourCount}, ${products.meat}:${meatCount}`)
//     return milkCount + flourCount + meatCount
// }
// let wednesdayProducts = (milkCount: number, flourCount: number, meatCount: number) =>{
//     console.log(`В среду продали: ${products.milk}:${milkCount}, ${products.flour}:${flourCount}, ${products.meat}:${meatCount}`)
//     return milkCount + flourCount + meatCount
// }
// let thursdayProducts = (milkCount: number, flourCount: number, meatCount: number) =>{
//     console.log(`В четверг продали: ${products.milk}:${milkCount}, ${products.flour}:${flourCount}, ${products.meat}:${meatCount}`)
//     return milkCount + flourCount + meatCount
// }
// let fridayProducts = (milkCount: number, flourCount: number, meatCount: number) =>{
//     console.log(`В пятницу продали: ${products.milk}:${milkCount}, ${products.flour}:${flourCount}, ${products.meat}:${meatCount}`)
//     return milkCount + flourCount + meatCount
// }
// let saturdayProducts = (milkCount: number, flourCount: number, meatCount: number) =>{
//     console.log(`В субботу продали: ${products.milk}:${milkCount}, ${products.flour}:${flourCount}, ${products.meat}:${meatCount}`)
//     return milkCount + flourCount + meatCount
// }
// let sundayProducts = (milkCount: number, flourCount: number, meatCount: number) =>{
//     console.log(`В воскресение продали: ${products.milk}:${milkCount}, ${products.flour}:${flourCount}, ${products.meat}:${meatCount}`)
//     return milkCount + flourCount + meatCount
// }
//  let getSumOfProducts = () =>{
//     let productsSum:number = mondayProducts(3,4,5) + tuesdayProducts (6,2,3) + wednesdayProducts (4,8,9)+ 
//     thursdayProducts (1,9,3) + fridayProducts (7,5,3) + saturdayProducts (7,5,2) + sundayProducts (5,8,8)
// console.log (`За неделю продали ${productsSum} продуктов`)
// }
//  getSumOfProducts()

// Центр связи предлагает 4 оператора: Beeline, Tele2, Kcell, Active. При 
// выборе оператора необходимо выводить стоимость подключения. Если 
// пользователь выбирает Kcell, то подключение бесплатное.

// enum operators {
//     Beeline,
//     Tele2,
//     Kcell,
//     Active
// }

// let currentOperator: operators = operators.Kcell;

// let checkOperator = (operator: operators) => {
//     switch (operator) {
//         case operators.Beeline:
//             return `Стоимость подключения: 2500`
//         case operators.Tele2:
//             return `Стоимость подключения: 2200`
//         case operators.Kcell:
//             return `Подключение бесплатно`
//         case operators.Active:
//             return `Стоимость подключения: 3500`

//     }
// }
// console.log(checkOperator(currentOperator))

// Определение enum для компаний
enum Company {
    Company1,
    Company2,
    Company3,
    Company4,
    Company5,
}
let CompanyDohot = ( CompanyCount1: number,  CompanyCount2: number,  CompanyCount3: number, CompanyCount4: number,  CompanyCount5: number) => {
    console.log(`доход компании: ${Company.Company1}:${CompanyCount1}, ${Company.Company2}:${CompanyCount2}, ${Company.Company3}:${CompanyCount3}, ${Company.Company4}:${CompanyCount4},
    ${Company.Company5}:${CompanyCount5}`)
    return CompanyCount1 + CompanyCount2 + CompanyCount3 + CompanyCount4 + CompanyCount5
}

 let getSumOfCompany = () =>{
    let CompanySum:number = CompanyDohot(3000000,44585222,52556621, 5484884, 5545455)
console.log (`За неделю продали ${CompanySum} продуктов`)
}

getSumOfCompany()

// // Функция для вычисления зарплаты бухгалтера
// function calculateSalary(income: Record<Company, number>): number {
//     let totalSalary = 0;

//     // Проход по каждой компании и вычисление зарплаты
//     for (const company in Company) {
//         const companyIncome = income[Company[company]];

//         // Вычисление зарплаты с учетом условий
//         const salaryFromCompany = 0.3 * Math.min(120000, companyIncome);

//         // Добавление к общей зарплате
//         totalSalary += salaryFromCompany;
//     }

//     return totalSalary;
// }

// // Пример использования функции с фиктивными данными по доходам компаний
// const incomeData: Record<Company, number> = {
//     [Company.Company1]: 150000,
//     [Company.Company2]: 100000,
//     [Company.Company3]: 130000,
//     [Company.Company4]: 110000,
//     [Company.Company5]: 140000,
// };

// // Вычисление и вывод зарплаты бухгалтера
// const accountantSalary = calculateSalary(incomeData);
// console.log(`Зарплата бухгалтера за месяц: ${accountantSalary}`);