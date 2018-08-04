import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jameshrandolphv-app';

  batteryLevel = '100%';

  constructor() {
    navigator.getBattery().then(
      (battery) => {
        this.batteryLevel = battery.level * 100 + "%";
        battery.addEventListener('levelchange', () => this.batteryLevel = battery.level * 100 + "%");
      }
    );
  }

  today = new Date();

  getTime() {
    let h = this.today.getHours() + '';
    let m = this.today.getMinutes() < 10 ? '0' + this.today.getMinutes() : this.today.getMinutes() + '';
    return h + ':' + m;
  }
}
