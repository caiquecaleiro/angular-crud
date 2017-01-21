import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portlet',
  templateUrl: './portlet.component.html'
})
export class PortletComponent {
  @Input() title: string;

  constructor() { }
}
