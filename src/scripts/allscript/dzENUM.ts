// №5 
// Тип функции для расчета стоимости заказа
// type CalculateOrderCallback = (totalAmount: number, hasPromoCode: boolean) => number;

// // Функция для расчета стоимости заказа с учетом доставки и скидки
// function calculateOrder(amount: number, hasPromoCode: boolean, callback: CalculateOrderCallback): number {
//     let totalAmount = amount;

//     // Проверка на бесплатную доставку при заказе от 4000
//     if (amount >= 4000) {
//         console.log('Доставка бесплатна!');
//     }

//     // Применение скидки в 15% при наличии промокода
//     if (hasPromoCode) {
//         console.log('Применен промокод. Скидка 15%');
//         totalAmount *= 0.85; // Применение скидки
//     }

//     // Вызов callback для окончательного расчета стоимости
//     return callback(totalAmount, hasPromoCode);
// }

// // Функция callback для вывода стоимости заказа
// const displayOrderCost: CalculateOrderCallback = (totalAmount, hasPromoCode) => {
//     console.log(`Итоговая стоимость заказа: ${totalAmount.toFixed(2)}${hasPromoCode ? ' (с учетом скидки)' : ''}`);
//     return totalAmount;
// };

// // Пример использования функции
// const orderAmount = 4500; // Задайте сумму заказа
// const promoCodeApplied = false; // Укажите, применен ли промокод

// calculateOrder(orderAmount, promoCodeApplied, displayOrderCost);


// ------------------
// №7
// enum ExhibitionStage {
//     Selection,
//     Contest,
//     Duel,
//     Grand,
// }

// // Тип функции для вывода результата
// type ExhibitionCallback = (stage: ExhibitionStage, points: number, status: string) => void;

// // Функция для прохождения каждого этапа
// function completeExhibitionStage(stage: ExhibitionStage, callback: ExhibitionCallback): void {
//     let pointsEarned = 0; // Начальные баллы после каждого этапа

//     // Определение баллов и условия для каждого этапа
//     switch (stage) {
//         case ExhibitionStage.Selection:
//             pointsEarned += 5000; // Баллы за Отбор
//             break;
//         case ExhibitionStage.Contest:
//             pointsEarned += 10000; // Баллы за Конкурс
//             break;
//         case ExhibitionStage.Duel:
//             pointsEarned += 15000; // Баллы за Дуэль
//             break;
//         case ExhibitionStage.Grand:
//             pointsEarned += 20000; // Баллы за Гранд
//             break;
//     }

//     // Определение статуса прохождения
//     const status = pointsEarned >= 20000 ? 'Команда прошла в финал!' : 'Команда продолжает выставку.';

//     // Вызов callback для вывода результата
//     callback(stage, pointsEarned, status);
// }
// // Функция callback для вывода результата
// const displayExhibitionResult: ExhibitionCallback = (stage, points, status) => {
//     console.log(`На этапе ${ExhibitionStage[stage]} команда заработала ${points} баллов. ${status}`);
// };

// completeExhibitionStage(ExhibitionStage.Selection, displayExhibitionResult);
// completeExhibitionStage(ExhibitionStage.Contest, displayExhibitionResult);
// completeExhibitionStage(ExhibitionStage.Duel, displayExhibitionResult);
// completeExhibitionStage(ExhibitionStage.Grand, displayExhibitionResult);

// №8 Определение enum для животных в зоопарке
// enum Animal {
//     Lion,
//     Elephant,
//     Giraffe,
// }

// // Тип функции для расчета корма
// type CalculateFoodCallback = (animal: Animal, dailyFoodRequirementKg: number, yearlyFoodRequirementKg: number) => void;

// // Функция для расчета корма для каждого животного на год
// function calculateFoodForYear(animal: Animal, dailyFoodRequirementKg: number, callback: CalculateFoodCallback): void {
//     const yearlyFoodRequirementKg = dailyFoodRequirementKg * 365; // Расчет корма на год

//     // Вызов callback для вывода результата
//     callback(animal, dailyFoodRequirementKg, yearlyFoodRequirementKg);
// }

// // Функция callback для вывода расчета корма на год
// const displayFoodCalculation: CalculateFoodCallback = (animal, dailyFoodRequirementKg, yearlyFoodRequirementKg) => {
//     console.log(`Для ${Animal[animal]} необходимо ${yearlyFoodRequirementKg} кг корма на год (${dailyFoodRequirementKg} кг в день).`);
// };

// //  использования функции
// const lionDailyFoodRequirementKg = 4; // Задайте дневную потребность в корме для льва
// calculateFoodForYear(Animal.Lion, lionDailyFoodRequirementKg, displayFoodCalculation);

// const elephantDailyFoodRequirementKg = 5; // Задайте дневную потребность в корме для слона
// calculateFoodForYear(Animal.Elephant, elephantDailyFoodRequirementKg, displayFoodCalculation);

// const giraffeDailyFoodRequirementKg = 3; // Задайте дневную потребность в корме для жирафа
// calculateFoodForYear(Animal.Giraffe, giraffeDailyFoodRequirementKg, displayFoodCalculation);
// ----------------------
// №4  Определение enum для передач
// Тип функции для определения статуса пользователя
// Определение enum для статуса пользователя
// enum UserStatus {
//     Novice = 'новичок',
//     Guardian = 'страж',
//     Master = 'магистр',
// }

// type UserStatusCallback = (registrationYears: number, status: UserStatus) => void;

// function determineUserStatus(registrationYears: number, callback: UserStatusCallback): void {
//     let status: UserStatus;

//     if (registrationYears < 2) {
//         status = UserStatus.Novice;
//     } else if (registrationYears < 4) {
//         status = UserStatus.Guardian;
//     } else {
//         status = UserStatus.Master;
//     }

//     callback(registrationYears, status);
// }

// const displayUserStatus: UserStatusCallback = (registrationYears, status) => {
//     console.log(`Пользователь зарегистрирован уже ${registrationYears} ${pluralizeYears(registrationYears)}. Статус: ${status}.`);
// };

// function pluralizeYears(years: number): string {
//     return years === 1 ? 'год' : 'года';
// }
// const userRegistrationYears = 3; 
// determineUserStatus(userRegistrationYears, displayUserStatus);
