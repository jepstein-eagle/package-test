import { Component } from '@angular/core';
import { format } from 'date-fns';
@Component({
  selector: 'package-test-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent {
  constructor() {
    format(new Date(2023, 1, 11), 'MM/dd/yyyy')
  }
}
