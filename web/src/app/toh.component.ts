import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'toh-app',
  templateUrl: 'toh.component.html',
  styleUrls: ['toh.component.css']
})
export class TohAppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(private _title: Title) {
  }

  ngOnInit() {
    this._title.setTitle(this.title);
  }
}
