import { BasketProduct, Shop } from "./order-types";
import data from "..//data/data.json"

export class Catalogue {
    private _data: Shop[] = [];

    constructor(){
        this._data = data;
    }

    get products(){
        const list:BasketProduct[] = [];

        this._data.forEach(({products, id }) => {
            products.forEach ((product) =>{
                list.push({shopId: id, ...product });
            });
        });
        return list;
    }
}
export const catalogue = new Catalogue();

export class Catalogue1 {
    private _data: Shop[] = [];

    constructor(){
        this._data = data;
    }

    get products(){
        const list:BasketProduct[] = [];

        this._data.forEach(({products, id }) => {
            products.forEach ((product) =>{
                list.push({shopId: id, ...product });
            });
        });
        return list;
    }
}
export const catalogue1 = new Catalogue1();