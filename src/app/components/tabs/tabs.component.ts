import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../../models/tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabs: Tab[];

  constructor() {
  }

  ngOnInit() {
  }

}
