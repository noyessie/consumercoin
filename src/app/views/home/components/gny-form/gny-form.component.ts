import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gny-form',
  templateUrl: './gny-form.component.html',
  styleUrls: ['./gny-form.component.scss']
})
export class GnyFormComponent implements OnInit {

	public gnyForm:any;

  constructor() { 
  	this.gnyForm = new FormGroup({
  		Gender: new FormControl(''),
  		FirstName: new FormControl(''),
  		LastName: new FormControl(''),
  		StreetAddress: new FormControl(''),
  		City:new FormControl(''),
  		State:new FormControl(''),
  		Zipcode:new FormControl(''),
  		Nationality: new FormControl(''),
  		DateOfBirth : new FormControl(''),

  	})
  }

  ngOnInit() {
  }

  save(){
  	console.log(this.gnyForm.value);
  }

}
