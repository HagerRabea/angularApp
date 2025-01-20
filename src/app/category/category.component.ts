import { CommonModule } from '@angular/common';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  caterories:any[]=[];
  imgSrc='https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png'
constructor(private _DataService:DataService){

}

ngOnInit(): void {
  this._DataService.getAllCatergory().subscribe((data)=>{
    console.log(data);
    this.caterories=data;
  })
}
}
