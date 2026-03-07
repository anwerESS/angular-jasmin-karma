import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'unit-testing';
  btnText = "Subscribe";
  isSubscribed = false;

  subscribe() {
    this.isSubscribed = true;
    this.btnText = "Subscribed";
  }}
