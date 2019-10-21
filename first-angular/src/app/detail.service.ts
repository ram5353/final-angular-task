import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
 x: string;
 setx(y: string)
 {
  this.x=y;
 }

 getx(): string
 {
   return this.x;
 }

  constructor() { }
}
