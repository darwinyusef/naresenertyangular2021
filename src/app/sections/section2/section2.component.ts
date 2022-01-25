import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  @Input('falsy') falsy: any;
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguaje(idiom: string): void{
    localStorage.setItem('idiom', idiom);

    if(localStorage.getItem('idiom')){
      console.log(localStorage.getItem('idiom'));
      let elem = localStorage.getItem('idiom');
      this.translate.use( elem != null ? elem : 'en' );
    }
  }

}
