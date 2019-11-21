import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
    console.log('YEET');
  }

}
