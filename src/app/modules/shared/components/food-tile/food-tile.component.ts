import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'food-tile',
    templateUrl: './food-tile.component.html',
    styleUrls: ['./food-tile.component.less'],
})
export class FoodTileComponent implements OnInit {
    @Input() imageSource: string = '...';
    @Input() foodTitle: string = 'Title';
    @Input() foodPrice: number = 0;
    constructor() {}

    ngOnInit(): void {}
}
