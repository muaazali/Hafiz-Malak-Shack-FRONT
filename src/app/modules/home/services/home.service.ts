import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    constructor() {}

    data = [
        {
            title: 'Banana Sprinkles Milkshake',
            price: 20,
            img: 'assets/images/img_1.jpg',
        },
        {
            title: 'Oreo Chocolate Milkshake',
            price: 20,
            img: 'assets/images/img_2.jpg',
        },
        {
            title: 'Apple Milkshake',
            price: 20,
            img: 'assets/images/img_3.jpg',
        },
    ];

    public getSpecials() {
        return this.data;
    }
}
