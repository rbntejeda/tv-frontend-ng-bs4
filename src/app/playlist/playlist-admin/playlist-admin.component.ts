import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/_class/pagination';
import { PlaylistService } from 'src/app/_service/playlist.service';
import { Playlist } from 'src/app/_class/playlist';

@Component({
  selector: 'app-playlist-admin',
  templateUrl: './playlist-admin.component.html',
  styleUrls: ['./playlist-admin.component.css']
})
export class PlaylistAdminComponent implements OnInit {

  constructor(private playListServices:PlaylistService) { }

  models:Playlist[]=[];
  pagination = new Pagination({page:1});
  
  OnPageChange(e:number){
    this.pagination.page=e;
    this.playListServices.Get(this.pagination.Params()).subscribe((response)=>{
      this.models=response.body;
    })
  }

  RescueData()
  {
    this.playListServices.Get(this.pagination.Params()).subscribe((response)=>{
      this.pagination.Load(response.headers);
      this.models=response.body;
    })
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

  async onDelete(id)
  {
    await this.playListServices.Delete(id).toPromise();
    this.RescueData();
  }

  ngOnInit() {
    this.RescueData();
  }

}
