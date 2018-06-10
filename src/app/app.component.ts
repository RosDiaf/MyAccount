import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDarkTheme: boolean;
  customTheme: string;

  constructor(private router: Router) { }

  ngOnInit() {}

  setDarkTheme(theme) {
    this.customTheme = theme;
    this.isDarkTheme = !this.isDarkTheme;
  }
}
