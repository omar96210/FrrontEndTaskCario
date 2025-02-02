import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PreferencesService } from '../../localstorge/preferences.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,CommonModule,TranslateModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  startAnimation:any=false
constructor(
  private translate: TranslateService,

  public preferencesService: PreferencesService,

) {


  this.translate.use(preferencesService.getAppLanguage());

}
  ChangeLang(){
   this.startAnimation=true
   setTimeout(() => {
    if(this.preferencesService.getAppLanguage()=='En'){
      this.preferencesService.setAppLanguage('Ar')
  
    }else if(this.preferencesService.getAppLanguage()=='Ar'){
      this.preferencesService.setAppLanguage('En')
  
    }else{
      this.preferencesService.setAppLanguage('En')
  
    }
    this.startAnimation=false
  }, 1000);



  }

}
