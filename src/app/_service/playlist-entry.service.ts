import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaylistEntryService {

  base = "playlistentry";

  constructor(private http:HttpClient) { }

  Create({entry_id,playlist_id,indice})
  {
    return this.http.post(`${environment.endpoint}/${this.base}`, {entry_id,playlist_id,indice});
  }

  Delete({id})
  {
    return this.http.delete(`${environment.endpoint}/${this.base}/${id}`);
  }
}
