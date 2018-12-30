import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/_service/entry.service';
import { HttpParams } from '@angular/common/http';
import { Entry } from 'src/app/_class/entry';

@Component({
  selector: 'app-entry-admin',
  templateUrl: './entry-admin.component.html',
  styleUrls: ['./entry-admin.component.css']
})
export class EntryAdminComponent implements OnInit {

  constructor(private entryService:EntryService) { }

  public entries:Entry[]=[];

  public params = new HttpParams();
  public page=1;

  public OnPageChange(e){
    this.params=this.params.set("page",e);
    this.entryService.Get(this.params).subscribe((data)=>{
      this.entries=data;
    })
  }

  async ngOnInit() {
    this.entryService.Get().subscribe((data)=>{
      this.entries=data;
    })
  }

}
