import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skip-link',
  templateUrl: './skip-link.component.html',
  styleUrls: ['./skip-link.component.scss']
})
export class SkipLinkComponent implements OnInit {
  @Input () title: string;
  @Input () identity: string;

  constructor() { }

  ngOnInit() {
  }

}
