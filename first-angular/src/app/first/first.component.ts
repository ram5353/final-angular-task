import { Component, OnInit } from '@angular/core';
import {Router,Routes} from '@angular/router';
import {DetailService} from '../detail.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  constructor(private router: Router,private detail: DetailService) { }
 y: string;
  ngOnInit() {

  }
  Submit(value) {

    this.detail.setx(value);
    this.router.navigate(['sec']);
  }
}





