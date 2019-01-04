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

  public models:Playlist[]=[];
  public pagination = new Pagination({page:1});
  
  public OnPageChange(e:number){
    this.pagination.page=e;
    this.playListServices.Get(this.pagination.Params()).subscribe((response)=>{
      this.models=response.body;
    })
  }

  public RescueData()
  {
    this.playListServices.Get(this.pagination.Params()).subscribe((response)=>{
      this.pagination.Load(response.headers);
      this.models=response.body;
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
