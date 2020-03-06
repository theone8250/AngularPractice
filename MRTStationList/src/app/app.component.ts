import { Component } from '@angular/core';

// Constant 我們把 stationList 給 import 進來使用
import { stationList } from './station-list.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
  * 所有列車到站站名之資料
  *
  * @memberof AppComponent
  */
  list = stationList;
}
