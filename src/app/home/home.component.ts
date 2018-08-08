import { Component, OnInit, Input } from '@angular/core';
import { WindowService } from '../window.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private windowService: WindowService) { }

  ngOnInit() {
    
  }

}
