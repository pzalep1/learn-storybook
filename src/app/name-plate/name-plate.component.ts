import { Component, OnInit, Input } from '@angular/core';

interface Employee {
  name: string;
  title: string;
}

@Component({
  selector: 'app-name-plate',
  templateUrl: './name-plate.component.html',
  styleUrls: ['./name-plate.component.scss']
})
export class NamePlateComponent implements OnInit {
  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
