import { Component, OnInit } from '@angular/core';
import { SbaInformation } from '../../_models/sba-info.models';
import { GetdataService } from '../../_services/getdata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarInfo: SbaInformation;

  constructor( private getService:GetdataService) { }

  public ngOnInit(): void {
    this.loadSbainformation();
  }

  private loadSbainformation(): void{
    this.getService.getSbainformation()
      .subscribe(data => {
        this.navbarInfo= data
      })
  }


}
