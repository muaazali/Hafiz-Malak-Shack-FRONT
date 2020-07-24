import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NavSearchComponent } from './components/nav-search/nav-search.component';

@NgModule({
    declarations: [NavbarComponent, NavItemComponent, NavSearchComponent],
    imports: [CommonModule, MatIconModule, MatInputModule],
    exports: [NavbarComponent],
})
export class NavbarModule {}
