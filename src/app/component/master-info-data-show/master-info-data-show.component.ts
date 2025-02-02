import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { PreferencesService } from '../../localstorge/preferences.service';

@Component({
  selector: 'app-master-info-data-show',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './master-info-data-show.component.html',
  styleUrl: './master-info-data-show.component.scss'
})
export class MasterInfoDataShowComponent {

@Input() labelText: any
@Input() data: any
@Input() dataType: any
@Input() currencyData: any
@Input() imageSrc: any
@Input() noBorder: any=false
@Input() padNumberEnable: any=false



constructor(
  private translate: TranslateService,

  public preferencesService: PreferencesService,

) {


  this.translate.use(preferencesService.getAppLanguage());

}

}
