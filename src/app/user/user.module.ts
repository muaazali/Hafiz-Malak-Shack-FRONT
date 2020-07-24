import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
    declarations: [UserRegistrationComponent, UserComponent, UserLoginComponent],
    imports: [CommonModule],
    exports: [UserComponent],
    entryComponents: [UserLoginComponent, UserRegistrationComponent],
})
export class UserModule {}
