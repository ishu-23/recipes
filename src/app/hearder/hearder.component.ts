import { Component} from '@angular/core';
import { dataStoredService } from '../shared/data-stored.service';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrl: './hearder.component.css'
})
export class HearderComponent {

  constructor(private dataStoredService:dataStoredService){}

  onFetchData(){
    this.dataStoredService.getData();
  }
  onSaveData(){
    this.dataStoredService.saveData();
  }
}

