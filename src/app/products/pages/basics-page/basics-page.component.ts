import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'daniel';
  public nameUpper: string = 'Daniel';
  public fullName: string = 'daNiEL jAeN'

  public customDate: Date = new Date();
}
