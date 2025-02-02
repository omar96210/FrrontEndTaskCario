import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PreferencesService } from '../../../localstorge/preferences.service';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.scss'
})
export class NavbarComponentComponent {
@Input() modalName: any


constructor(
  private translate: TranslateService,

  public preferencesService: PreferencesService,

) {


  this.translate.use(preferencesService.getAppLanguage());

}

}
