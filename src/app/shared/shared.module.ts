import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './theme/footer/footer.component';
import { HeaderComponent } from './theme/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]

})
export class SharedModule { }
