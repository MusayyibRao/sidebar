import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserlistService } from '../service/userlist.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  data:Array<any>
  totalRecords:string | undefined
  page:number=1;


  constructor(private userlist:UserlistService) { 
    this.data=new Array<any>()
  }

  ngOnInit(): void {
  }

getUsers(){

this.userlist.getData().subscribe((data)=>{
  console.log(data)
  this.data =data.results
  this.totalRecords=data.results.length
})

}

}




