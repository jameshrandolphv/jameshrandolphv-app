import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jameshrandolphv-app';

  hour = '12';
  minute = "00";
  second = "00";

  constructor() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 500);
  }

  updateTime() {
    let today = new Date();
    this.hour = today.getHours() + '';
    this.minute = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes() + '';
    this.second = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds() + '';
  }

  toggleBackground() {
    if (document.getElementById('app-window').style.backgroundImage === 'url("../assets/images/white-material.png")' || document.getElementById('app-window').style.backgroundImage === '') {
      document.getElementById('app-window').style.backgroundImage = 'url("../assets/images/white-material-blur.png")';
      document.getElementById('blur-toggle').innerHTML = 'blur_on';
    } else {
      document.getElementById('app-window').style.backgroundImage = 'url("../assets/images/white-material.png")';
      document.getElementById('blur-toggle').innerHTML = 'blur_off';
    }
  }

}
