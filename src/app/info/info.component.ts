import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {

  router = inject(Router);

  goBack() {
    this.router.navigate(['/']);
  }
}
