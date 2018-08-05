import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jameshrandolphv-app';

  today = new Date();

  getTime() {
    let h = this.today.getHours() + '';
    let m = this.today.getMinutes() < 10 ? '0' + this.today.getMinutes() : this.today.getMinutes() + '';
    return h + ':' + m;
  }
}
