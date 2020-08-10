import { Component, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-operar',
  templateUrl: './operar.component.html',
  styleUrls: ['./operar.component.css']
})
export class OperarComponent implements OnInit {

  comecarOperar = false
  time: number = 0;
  interval;
  subscribeTimer: any;

  constructor() { }

  ngOnInit() {
    
  }

  operar() {
    this.comecarOperar = true
    this.startTimer();
  }

  fechar() {
    this.comecarOperar = false
    clearInterval(this.interval)
    this.time = 0
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.time++
    },1000)
  }


}
