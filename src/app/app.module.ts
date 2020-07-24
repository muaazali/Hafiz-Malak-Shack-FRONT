import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './modules/navbar/navbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './modules/user/user.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, NavbarModule, BrowserAnimationsModule, UserModule, HomeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
