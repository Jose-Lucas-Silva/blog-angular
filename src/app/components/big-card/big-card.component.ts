import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: String = "";
  @Input()
  cardTitle: String = "";
  @Input()
  CardDescription: String = "";
  @Input()
  Id:string = "0";


  constructor() {

  }

  ngOnInit(): void {
  }



}
