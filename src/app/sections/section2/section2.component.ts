import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {

  }

  changeLanguaje(idiom: string): void{
    this.translate.use(idiom);
  }

}
