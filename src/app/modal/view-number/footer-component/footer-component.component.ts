import { Component, Input, OnInit } from '@angular/core';
import { PreferencesService } from '../../../localstorge/preferences.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-footer-component',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer-component.component.html',
  styleUrl: './footer-component.component.scss'
})
export class FooterComponentComponent implements OnInit {


  @Input() createdBy: any = {}


  constructor(
    private translate: TranslateService,

    public preferencesService: PreferencesService,

  ) {


    this.translate.use(this.preferencesService.getAppLanguage());

  }




  ngOnInit(): void {


  }
  getFormattedDate() {

    const date = new Date(this.createdBy.creationdate);
    return date.toLocaleDateString();
  }

  getFormattedTime() {
    const date = new Date(this.createdBy.creationdate);
    if (isNaN(date.getTime())) {
      return 'Invalid Time';
    }

    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  getAmPm() {
    const date = new Date(this.createdBy.creationdate);
    return date.getHours() >= 12 ? 'PM' : 'AM';
  }

}
