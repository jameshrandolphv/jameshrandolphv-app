import { Component, OnInit } from '@angular/core';
import { WindowService } from '../../window.service';

@Component({
  selector: 'app-music-window',
  templateUrl: './music-window.component.html',
  styleUrls: ['./music-window.component.css']
})
export class MusicWindowComponent implements OnInit {

  constructor(public windowService: WindowService) { }

  ngOnInit() {
  }

  toggleWindow() {
    this.windowService.displayMusic = !this.windowService.displayMusic;
  }

}
