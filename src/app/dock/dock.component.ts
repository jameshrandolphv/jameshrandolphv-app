import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.css']
})
export class DockComponent implements OnInit {

  constructor(private windowService: WindowService) { }

  ngOnInit() {
  }

  toggleMusic() {
    this.windowService.displayMusic = !this.windowService.displayMusic;
    console.log(this.windowService.displayMusic);
  }

}
