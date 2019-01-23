import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from 'src/app/_service/playlist.service';
import { Playlist } from 'src/app/_class/playlist';
import { HttpParams } from '@angular/common/http';
import { EntryService } from 'src/app/_service/entry.service';
import { Entry } from 'src/app/_class/entry';
import { Pagination } from 'src/app/_class/pagination';
import * as _ from "lodash";
import { PlaylistEntryService } from 'src/app/_service/playlist-entry.service';

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.css']
})
export class PlaylistViewComponent implements OnInit {

  constructor(private route:ActivatedRoute, private playlistService:PlaylistService, private entryService:EntryService,private playlistEntryServices:PlaylistEntryService) { }

  id: number;
  private sub: any;
  model:Playlist={id:null,title:null,creado:null};
  params=(new HttpParams).set('expand','playlistEntries');
  models:Entry[];
  
  pagination = new Pagination({page:1});
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(async ({id}) => {
      this.id = +id;
      this.model = await this.playlistService.GetByPk(id,this.params).toPromise();
   });
   this.RescueData();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  
  async OnPageChange(e:number){
    this.pagination.page=e;
    var { body } = await this.entryService.GetAll(this.pagination.Params()).toPromise();
    this.models=body;
  }

  async RescueData()
  {
    var { headers, body } = await this.entryService.GetAll(this.pagination.Params()).toPromise();
    this.pagination.Load(headers);
    this.models=body;
  }

  OnUpdatePerPage(e)
  {
    this.pagination.perPage=e;
    this.RescueData();
  }

  OnFilterChange(e){
    var key = 'filter[title][like]';
    if(e){
      this.pagination.AddParams(key,e);
    }else{
      this.pagination.DelParams(key)
    }
    this.RescueData();
  }

  isChecked(id)
  {
   return this.model.playlistEntries? _.some(this.model.playlistEntries,{entry_id:id}):false;
  }

  async onChangeChecked(entry_id)
  {
    let pe = _.find(this.model.playlistEntries,{entry_id:entry_id})
    if(pe)
    {
      await this.playlistEntryServices.Delete(pe).toPromise();
      _.remove(this.model.playlistEntries,{entry_id:entry_id});
    }
    else
    {
      this.model.playlistEntries.push(await this.playlistEntryServices.Create({entry_id:entry_id,playlist_id:this.id,indice:0}).toPromise())
    }
  }

}
