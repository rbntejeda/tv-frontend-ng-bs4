import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/_class/playlist';
import { PlaylistService } from 'src/app/_service/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrls: ['./playlist-create.component.css']
})
export class PlaylistCreateComponent implements OnInit {

  model:Playlist = new Playlist(null,null,null);

  constructor(private playlistService:PlaylistService,private router:Router) { }

  ngOnInit() {
  }

  async onSubmit(){
    this.model = await this.playlistService.Create(this.model).toPromise();
    this.router.navigate(['playlist',this.model.id]);
  }

}
