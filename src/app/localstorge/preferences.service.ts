import { isPlatformBrowser } from '@angular/common';
import { Injectable } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  setdir: any
  _lang:any



  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService,
  ) {



      if (isPlatformBrowser(this.platformId)) {

        this.setdir = localStorage.getItem('setdir'); // get the data at lunch = 
        this._lang = localStorage.getItem('_lang'); // get the data at lunch = 


      }


      
  }



  setAppLanguage(lang: string) {

    this._lang = lang

    if(this._lang=='En'){
      this.setdir='ltr'
    }else{
        this.setdir='rtl'
    }
   
    this.translate.reloadLang(this._lang).subscribe((response)=>{
      this.translate.use(this._lang);

  });
    this.synclang(this._lang,this.setdir);

  }

  getAppLanguage() {
    return this._lang;
  }
  getDir() {
    return this.setdir;
  }

  synclang(lang: any,setdir:any) {
    if (isPlatformBrowser(this.platformId)) {

      localStorage.setItem('_lang',lang); // sync the data

      localStorage.setItem('setdir', setdir); // sync the data/ sync the data
    }


  }
  

 
}
