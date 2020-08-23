import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    constructor() {}

    data = [
        {
            title: 'Milkshake 1',
            price: 20,
            img: 'assets/images/img_1.jpg',
        },
        {
            title: 'Milkshake 2',
            price: 20,
            img: 'assets/images/img_2.jpg',
        },
        {
            title: 'Milkshake 3',
            price: 20,
            img: 'assets/images/img_3.jpg',
        },
    ];

    public getSpecials() {
        return this.data;
    }
}
