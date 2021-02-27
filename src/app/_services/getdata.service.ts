import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { SbaInformation } from '../_models/sba-info.models';
import { HomeBannerSlider } from '../_models/banner-slider.models';
import { VisaCategoryList } from '../_models/visa-categories.models';
import { EnquireForm } from '../_models/enquire-form.models';
import { StudyDestinations } from '../_models/study-abroad-countries.models';
import { University } from '../_models/university-lists.models';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private _http:HttpClient) { }

  getSbainformation():Observable<any>{
    return this._http.get<SbaInformation[]>(`${environment.apiUrl}`+'/sbainfo')
    .pipe(map(data =>data))
  }
  getHomeSlider():Observable<any>{
    return this._http.get<HomeBannerSlider[]>(`${environment.apiUrl}`+'/home-banner-sliders')
  }
  getVisaCategories():Observable<any>{
    return this._http.get<VisaCategoryList[]>(`${environment.apiUrl}`+'/visacategories')
  }

  getStudyAbroad(): Observable<any>{
    return this._http.get<StudyDestinations[]>(`${environment.apiUrl}`+'/study-abroad-countries')
  }
   getDestination(id){
   return this._http.get(`${environment.apiUrl}`+'/study-abroad-countries/'+id).pipe(map(data => data))

 }
 getUniversity():Observable<any>{
  return this._http.get<University[]>(`${environment.apiUrl}`+'/university-lists')
}
 

}
