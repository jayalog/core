import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/common/material-components.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoadingOverlayModule } from '../../core/common/loading-overlay/loading-overlay.module';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    LoadingOverlayModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
