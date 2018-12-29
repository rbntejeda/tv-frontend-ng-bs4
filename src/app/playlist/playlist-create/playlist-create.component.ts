import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/_class/entry';

@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrls: ['./playlist-create.component.css']
})
export class PlaylistCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(new Entry({id:1,path:"hola",title:"hola",duration:-1}))
  }

}
