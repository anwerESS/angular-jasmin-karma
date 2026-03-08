import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgFor, NgIf} from '@angular/common';
import {GradePipe} from './pipe/grade.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgFor, GradePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'unit-testing';
  btnText = "Subscribe";
  isSubscribed = false;
  marks = [97, 68, 83, 29, 75]

  subscribe() {
    this.isSubscribed = true;
    this.btnText = "Subscribed";
  }}
