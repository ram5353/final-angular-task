import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-sec',
  templateUrl: './sec.component.html',
  styleUrls: ['./sec.component.css']
})
export class SecComponent implements OnInit {
  s: string;

  constructor(private detail: DetailService) { }

  ngOnInit() {
   this.s = this.detail.getx();
  }




}
