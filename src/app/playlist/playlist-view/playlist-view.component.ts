import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from 'src/app/_service/playlist.service';
import { Playlist } from 'src/app/_class/playlist';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.css']
})
export class PlaylistViewComponent implements OnInit {
  id: number;
  private sub: any;
  model:Playlist;

  constructor(private route:ActivatedRoute, private playlistService:PlaylistService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(async ({id}) => {
      this.id = +id;
      this.model = await this.playlistService.GetByPk(id).toPromise();
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
