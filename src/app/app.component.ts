import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
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
