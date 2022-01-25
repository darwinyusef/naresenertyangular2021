import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguaje(idiom: string): void{
    localStorage.setItem('idiom', idiom);

    if(localStorage.getItem('idiom')){
      let elem = localStorage.getItem('idiom');
      this.translate.use( elem != null ? elem : 'en' );
    }
  }
}
