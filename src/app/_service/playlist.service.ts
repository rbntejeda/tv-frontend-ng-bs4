import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Playlist } from '../_class/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  
  base = "playlist";

  constructor(private http:HttpClient) { }

  Get(params?:HttpParams)
  {
    return this.http.get<Playlist[]>(`${environment.endpoint}/${this.base}`, { params, observe:"response" });
  }

  GetByPk(id:number,params?:HttpParams)
  {
    return this.http.get<Playlist>(`${environment.endpoint}/${this.base}/${id}`, { params });
  }

  Create(model:Playlist)
  {
    return this.http.post<Playlist>(`${environment.endpoint}/${this.base}`, model);
  }

  Update(id,model)
  {
    return this.http.put<Playlist>(`${environment.endpoint}/${this.base}/${id}`, model);
  }

  Delete(id)
  {
    return this.http.delete<Playlist>(`${environment.endpoint}/${this.base}/${id}`);
  }

  Download(id)
  {
    return this.http.get(`${environment.endpoint}/file/${id}`,{responseType:"arraybuffer" });
  }
}
