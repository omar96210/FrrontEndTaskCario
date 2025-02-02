import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PreferencesService } from '../../../localstorge/preferences.service';
import { MasterInfoDataShowComponent } from "../../../component/master-info-data-show/master-info-data-show.component";

@Component({
  selector: 'app-master-information-component',
  standalone: true,
  imports: [TranslateModule, MasterInfoDataShowComponent],
  templateUrl: './master-information-component.component.html',
  styleUrl: './master-information-component.component.scss'
})
export class MasterInformationComponentComponent {

@Input() masterInfo: any


constructor(
  private translate: TranslateService,

  public preferencesService: PreferencesService,

) {


  this.translate.use(this.preferencesService.getAppLanguage());

}

  
}
