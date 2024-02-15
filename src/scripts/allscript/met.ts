// type TCategory = "smartphone" | "laptop"
// type TStuff = {
//     category:TCategory,
//     price:number,
//     count:number
// }

// let proucts:TStuff[] = [
//     {
//     category:"smartphone",
//     price:40000,
//     count:50
// },
// {
//     category:"laptop",
//     price:60000,
//     count:100
// },
// {
//     category:"smartphone",
//     price:40000,
//     count:50
// },
// ]
// // 1.отсортировать массив  по категориям (сделать под каждую категорию)
// let smartphones:TStuff[] = proucts.filter((e) => e.category === "smartphone")
// let laptop:TStuff[] = proucts.filter((e) => e.category === "laptop")
// // 2.отсортировать массивы по цене (по убыванию)
// smartphones.sort((a,b) =>{
// return a.price - b.price
// }).reverse()
// // console.log(smartphones)
// // console.log(laptop)
// // 3.создали функцию по добавлению товара в каждую категорию
// function addStav (cat:TCategory, price:number, count:number){
//     if(cat === "smartphone"){
//         smartphones.push({
//             category:cat,
//             price:price,
//             count:count
//         })
//     } else {
//         laptop.push({
//             category:cat,
//             price:price,
//             count:count
//         })
//     }

// }
// addStav ("smartphone", 15000,10)
// // console.log (smartphones)
// // добавить по два товара в массив с каждой категории
// function addStav2(cat: TCategory, price: number, count: number) {
//     const newItem: TStuff = {
//         category: cat,
//         price: price,
//         count: count,
//     };

//     if (cat === "smartphone") {
//         // Добавить два товара
//         smartphones.push(newItem, { ...newItem, count: count });
//     } else {
//         // Добавить два товара
//         laptop.push(newItem, { ...newItem, count: count });
//     }
// }

// addStav2("smartphone", 455000, 1150);
// addStav2("laptop", 465000, 1250);
// // console.log(smartphones);
// // console.log(laptop);

// type TStuff1 = {
//     category: "smartphone" | "laptop";
//     price: number;
//     count: number;
// };

// let products: TStuff1[] = [
//     {
//         category: "smartphone",
//         price: 160000,
//         count: 50,
//     },
//     {
//         category: "laptop",
//         price: 120000,
//         count: 100,
//     },
//     {
//         category: "smartphone",
//         price: 140000,
//         count: 50,
//     },
// ];

// // Уменьшаем цену товара, если она больше 140000
// products.forEach((product) => {
//     if (product.price > 140000) {
//         const discountedPrice = 0.8 * product.price; // Уменьшаем цену на 20%
//         // console.log(`Товар ${product.category} с ценой ${product.price} больше 140000. Измененная цена: ${discountedPrice}`);
//        }
// });
// // Увеличивать цену товара, если она больше 140000
// products.forEach((product) => {
//     if (product.price > 140000) {
//         const discountedPrice = 1.1 * product.price; // Увеличить цену на 10%
//         // console.log(`Товар ${product.category} с ценой ${product.price} больше 140000. Измененная цена: ${discountedPrice}`);
//        }
// });

// products.sort((a, b) => {
// return a.price - b.price;
// }).forEach(product =>{
// // console.log (product)
// });
// laptop.sort((a, b) => {
//     return b.price - a.price;
//     }).forEach(product =>{
//     console.log (laptop)
//     });

//     products = [...laptop, ...smartphones]
//     products.sort((a, b) => {
//         return b.price - a.price;
//     })

//     console.log(products)
type TDEpartmentName = 'TECH' | "DESING" | "PROJECTS"
type TEmployee = {
    name: string;
    sallary: number,
    delaysCount: number,
    isFired: boolean,
    departmentName: TDEpartmentName
}
enum ESpeciality {
    TECH = "технический отдел",
    DESING = "дизайн",
    PROJECTS = "проектировщики"
}
let employeers: TEmployee[] = [{
    "name": "Iolanthe",
    "sallary": 189203,
    "delaysCount": 4,
    "isFired": false,
    departmentName: "DESING"
}, {
    "name": "Mehetabel",
    "sallary": 234634,
    "delaysCount": 5,
    "isFired": false,
    departmentName:"PROJECTS"
}, {
    "name": "Alister",
    "sallary": 199635,
    "delaysCount": 4,
    "isFired": false,
    departmentName: "TECH"
}, {
    "name": "Brandi",
    "sallary": 135511,
    "delaysCount": 0,
    "isFired": false,
    departmentName: "PROJECTS"
}, {
    "name": "Bianka",
    "sallary": 153668,
    "delaysCount": 4,
    "isFired": false,
    departmentName: "TECH"
}, {
    "name": "Casper",
    "sallary": 185022,
    "delaysCount": 1,
    "isFired": false,
    departmentName: "DESING"
}, {
    "name": "Cyrille",
    "sallary": 112640,
    "delaysCount": 3,
    "isFired": false,
    departmentName:"PROJECTS"
}, {
    "name": "Carmella",
    "sallary": 243789,
    "delaysCount": 4,
    "isFired": false,
    departmentName:"DESING"
}, {
    "name": "Tessa",
    "sallary": 249164,
    "delaysCount": 0,
    "isFired": false,
    departmentName:"PROJECTS"
}, {
    "name": "Tamqrah",
    "sallary": 197802,
    "delaysCount": 1,
    "isFired": false,
    departmentName:"DESING"
}, {
    "name": "Valentine",
    "sallary": 102137,
    "delaysCount": 4,
    "isFired": false,
    departmentName:"PROJECTS"
}, {
    "name": "Fabian",
    "sallary": 118621,
    "delaysCount": 6,
    "isFired": false,
    departmentName:"DESING"
}, {
    "name": "Roberto",
    "sallary": 137482,
    "delaysCount": 4,
    "isFired": false,
    departmentName:"DESING"
}, {
    "name": "Kellie",
    "sallary": 230601,
    "delaysCount": 5,
    "isFired": false,
    departmentName:"TECH"
}, {
    "name": "Guenevere",
    "sallary": 170304,
    "delaysCount": 0,
    "isFired": false,
    departmentName:"DESING"
}, {
    "name": "Ahmed",
    "sallary": 143085,
    "delaysCount": 6,
    "isFired": false,
    departmentName:"PROJECTS"
}, {
    "name": "Yvonne",
    "sallary": 155866,
    "delaysCount": 4,
    "isFired": false,
    departmentName:"TECH"
}, {
    "name": "Dorotea",
    "sallary": 122566,
    "delaysCount": 4,
    "isFired": false,
    departmentName:"TECH"
}, {
    "name": "Eydie",
    "sallary": 96114,
    "delaysCount": 0,
    "isFired": false,
    departmentName:"PROJECTS"
}, {
    "name": "Merralee",
    "sallary": 124859,
    "delaysCount": 4,
    "isFired": false,
    departmentName:"TECH"
}]

let effectiveEmployeers = employeers.filter((element) => {
    return element.delaysCount === 0
}).map((element) => ({
    ...element,
    sallary: element.sallary * 1.2
}))

let notEffectiveEmployeers = employeers.filter((element) => {
    return element.delaysCount > 4
}).sort((a, b) => {
    return b.delaysCount - a.delaysCount
})
.map((element) =>({
    ...element,
    isFired:!element.isFired
}))
console.log(effectiveEmployeers)
console.log(notEffectiveEmployeers)