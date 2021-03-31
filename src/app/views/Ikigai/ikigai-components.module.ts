import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IkigaiComponentsRoutingModule } from './ikigai-components-routing.module';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AngularEditorModule } from '@kolkov/angular-editor';

import { IkigaiComponentsComponent } from './ikigai-components/ikigai-components.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  imports: [
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CommonModule,
    IkigaiComponentsRoutingModule,
    AngularEditorModule, 
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule, 
    EditorModule
  ],
  declarations: [IkigaiComponentsComponent],
})
export class IkigaiComponentsModule {
 }
