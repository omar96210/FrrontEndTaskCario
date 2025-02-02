import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PreferencesService } from '../../localstorge/preferences.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

constructor(
  private translate: TranslateService,

  public preferencesService: PreferencesService,

) {


  this.translate.use(preferencesService.getAppLanguage());

}
@Output() ChangeLang = new EventEmitter<Number>();


changeLang(){

  this.ChangeLang.emit();

}
}
