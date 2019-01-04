import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from 'src/app/_service/playlist.service';
import { Playlist } from 'src/app/_class/playlist';

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
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.playlistService.GetByPk(this.id).subscribe(
        data => {
          this.model=data.body;
        }
      );
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
