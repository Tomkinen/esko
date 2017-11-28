import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectedlunch',
  templateUrl: './selectedlunch.component.html',
  styleUrls: ['./selectedlunch.component.css']
})
export class SelectedlunchComponent implements OnInit {

  constructor() { }
  @Input() public restaurant;
  ngOnInit() {
  }

}
