import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ikigai-components',
  templateUrl: './ikigai-components.component.html',
  styleUrls: ['./ikigai-components.component.scss']
})

export class IkigaiComponentsComponent implements OnInit {
  @ViewChild('myModal') public myModal: ModalDirective;
  htmlContent = '<h1>Sathish</h1>';

  constructor() { }

  ngOnInit(): void {
  }

}
