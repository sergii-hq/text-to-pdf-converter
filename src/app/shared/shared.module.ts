import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PageContentComponent } from './components/layout/page-content/page-content.component';
import { TextareaFieldComponent } from './components/form/textarea-field/textarea-field.component';
import { AsFormControlPipe } from './pipes/as-form-control.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageContentComponent, TextareaFieldComponent, AsFormControlPipe],
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    PageContentComponent,
    TextareaFieldComponent,
  ],
})
export class SharedModule {}
