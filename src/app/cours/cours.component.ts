import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  @Input() coursTitre: string;
  @Input() coursStatus: string;
  @Input() coursContenu: any[];
  constructor() { 
    
  }

  ngOnInit() {
  }

  getColor(){
    if(this.coursStatus === "on"){
      return 'green';
    }
    else if(this.coursStatus ==="En cours"){
      return "red";
    }
  }
  color(truc){
    if (truc ==='titre'){
      return 'red';
    }
    else{
      return 'black';
    }
    
  }

}