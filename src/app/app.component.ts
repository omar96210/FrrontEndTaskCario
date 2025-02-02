import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "./layout/layout/layout.component";
import { PreferencesService } from './localstorge/preferences.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ LayoutComponent,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'FrontEndTaskCairo';

 constructor(
   private translate: TranslateService,
 
   public preferencesService: PreferencesService,
 
 ) {
 
 
   this.translate.use(preferencesService.getAppLanguage());
 
 }
  ngOnInit(): void {

    if(this.preferencesService.getAppLanguage()==''||this.preferencesService.getAppLanguage()==null){
      this.preferencesService.setAppLanguage('En')
    }

  }
}
