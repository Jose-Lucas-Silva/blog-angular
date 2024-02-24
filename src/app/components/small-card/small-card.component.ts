import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {

  @Input() //O input é para colocarmos dinamicamente no componente que esta usando este componente, no caso, ele esta no home.component
  photoCardSmall: string = "";
  @Input()
  descriptionCardSmall: string = "";
  @Input()
  Id:string = "0";

  constructor() {

  }

  ngOnInit(): void {
  }

}
