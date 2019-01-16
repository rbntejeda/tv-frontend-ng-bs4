import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/_service/entry.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private entryServices:EntryService) { }

  ngOnInit() {
  }

  async OnSyncEntries(){
    await this.entryServices.Refresh().toPromise();
    await this.entryServices.Sync().toPromise();
  }

}
