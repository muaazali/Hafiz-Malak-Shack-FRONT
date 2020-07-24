import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './modules/user/user.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UserComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
