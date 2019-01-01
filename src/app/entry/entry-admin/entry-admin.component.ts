import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/_service/entry.service';
import { HttpParams } from '@angular/common/http';
import { Entry } from 'src/app/_class/entry';
import { Pagination } from 'src/app/_class/pagination';

@Component({
  selector: 'app-entry-admin',
  templateUrl: './entry-admin.component.html',
  styleUrls: ['./entry-admin.component.css']
})
export class EntryAdminComponent implements OnInit {

  constructor(private entryService:EntryService) { }

  public entries:Entry[]=[];
  public pagination = new Pagination({page:1});
  
  public OnPageChange(e:number){
    this.pagination.page=e;
    this.entryService.Get(this.pagination.Params()).subscribe((response)=>{
      // this.pagination.Load(response.headers);
      this.entries=response.body;
    })
  }

  public RescueData()
  {
    this.entryService.Get(this.pagination.Params()).subscribe((response)=>{
      this.pagination.Load(response.headers);
      this.entries=response.body;
    })
  }

  public OnUpdatePerPage(e)
  {
    this.pagination.perPage=e;
    this.RescueData();
  }

  public OnFilterChange(e){
    var key = 'filter[title][like]';
    if(e){
      this.pagination.AddParams(key,e);
    }else{
      this.pagination.DelParams(key)
    }
    this.RescueData();
  }

  ngOnInit() {
    this.RescueData();
  }

}
