import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserRigisterComponent } from './user-rigister/user-rigister.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, UserRigisterComponent],
  imports: [BrowserModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
