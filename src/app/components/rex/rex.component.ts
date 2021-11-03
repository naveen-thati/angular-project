import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rex',
  templateUrl: './rex.component.html',
  styleUrls: ['./rex.component.css']
})
export class RexComponent implements OnInit {
  vegetables = ["carrot", "brinjal"]

  constructor() { }

  ngOnInit(): void {
  }

}
