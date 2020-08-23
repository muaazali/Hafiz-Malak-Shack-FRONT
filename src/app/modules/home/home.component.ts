import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
    todaysSpecials;

    constructor(public homeService: HomeService) {}

    ngOnInit(): void {
        this.todaysSpecials = this.homeService.getSpecials();
    }
}
