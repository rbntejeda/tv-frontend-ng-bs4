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

  public params = new HttpParams();
  public page=1;

  public OnPageChange(e:number){
    this.pagination.page=e;
    this.entryService.Get(this.pagination.Params()).subscribe((response)=>{
      this.pagination.Load(response.headers);
      this.entries=response.body;
    })
  }

  async ngOnInit() {
    this.entryService.Get(this.pagination.Params()).subscribe((response)=>{
      this.entries=response.body;
      this.pagination.Load(response.headers);
    })
  }

}
