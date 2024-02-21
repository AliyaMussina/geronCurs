import { catalogue } from "./Catalogue";
import { BasketProduct, Client, Basket, DeliveryType, Delivery } from "./order-types";




export class Order {
    //параметры
    client: Client;
    delivery: Delivery;
    basket: Basket;


    constructor(client: Client, delivery: DeliveryType) {
        this.client = client;
        this.delivery = {
            dateTime: new Date(),
            type: delivery
        }
        
        this.generateOrder()
    }
    generateOrder(){
        //корзина
        const products: BasketProduct[] = [];
        for (let index = 0; index < Array(5).length; index++) {
            const random = Math.floor(Math.random() * 50);
            const selectProduct = catalogue.products[random];
            products.push(selectProduct);
        }
        //итоговая сумма корзины 
        this.basket = {
            products,
            total: products.reduce(
                //предыдущий элемент(sum),  текущий элемент (currentProduct)
                (sum, currentProduct) => sum + currentProduct.price, 0
            ),
        }

    }
}

