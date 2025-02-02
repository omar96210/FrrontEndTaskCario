import { Component, Input, OnInit } from '@angular/core';
import { PreferencesService } from '../../../localstorge/preferences.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-body-component',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './body-component.component.html',
  styleUrl: './body-component.component.scss'
})
export class BodyComponentComponent implements OnInit {


  @Input() data: any = []
  @Input() currencyData: any = {}
  numRecourd: any = 5
  generatedArray: number[] = [];
  constructor(
    private translate: TranslateService,

    public preferencesService: PreferencesService,

  ) {


    this.translate.use(this.preferencesService.getAppLanguage());

  }
  ngOnInit(): void {
    this.generateArray()

  }


  generateArray() {
    this.generatedArray = Array.from({ length: (this.data.length / this.numRecourd) }, (_, index) => index + 1);
    this.currentPage=1
    this.getTableRecourd(this.numRecourd, this.currentPage)
  }
  ResponsData: any
  getTableRecourd(pageSize: any, currentPage: any) {
    //this is implement of the backend way of sending data to the frontEnd it will select only the need record not all the array to insure fasr respons

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = startIndex + pageSize;


    this.ResponsData = this.data.slice(startIndex, endIndex);


  }
  currentPage: any = 1
  SetCureentPage(page: any) {
    this.currentPage = page
    this.getTableRecourd(this.numRecourd, this.currentPage)
  }

  nextPage() {
    if(this.currentPage<(this.data.length / this.numRecourd)){
      this.currentPage++ 
      this.getTableRecourd(this.numRecourd, this.currentPage)
    }

  }
  prevPage() {
    if(this.currentPage>1){
      this.currentPage--
      this.getTableRecourd(this.numRecourd, this.currentPage)
    }
  }

}
