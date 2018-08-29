import {
  Component,
   OnInit
} from '@angular/core';

import {
  FormGroup,
  FormControl
} from '@angular/forms';

import { GnyService } from '../../../../shared/services/gny.service';

@Component({
  selector: 'app-gny-form',
  templateUrl: './gny-form.component.html',
  styleUrls: ['./gny-form.component.scss']
})
export class GnyFormComponent implements OnInit {

	public gnyForm:any;

  constructor(
      private gnyService: GnyService
    ) {
  	this.gnyForm = new FormGroup({
  		Gender: new FormControl(''),
      Email: new FormControl(''),
  		FirstName: new FormControl(''),
  		LastName: new FormControl(''),
  		StreetAddress: new FormControl(''),
  		City:new FormControl(''),
  		Country:new FormControl(''),
  		State:new FormControl(''),
  		Zipcode:new FormControl(''),
  		Nationality: new FormControl(''),
  		DateOfBirth : new FormControl(''),
      PassportIdImage: new FormControl(''),
      SelfieImage: new FormControl(''),
      NumberOfGNYTokens: new FormControl(''),
      SendingToGNYCoinAmount: new FormControl(''),
      SendingToGNYCoinType: new FormControl(''),
      SendingToGNYCoinAddress: new FormControl(''),
      SourceOfFunds: new FormControl(''),
      SourceOfFundsField: new FormControl(''),
      RiskWarningYesNo: new FormControl(''),
      IHaveReadYesNo: new FormControl(''),
      IUnderstandYesNo: new FormControl(''),


  	})
  }
  ngOnInit() {

    console.log("init");
  }

  change_passport_file(files){
    this.gnyForm.patchValue({
      PassportIdImage:files[0]
    })
  }

  change_selfie_file(files){
    this.gnyForm.patchValue({
      SelfieImage:files[0]
    })
  }


  save(){
  	console.log(this.gnyForm.value);
    console.log(new FormData(this.gnyForm.value));
    this.gnyService.gny(this.gnyForm.value);
  }

  change_date(date){
    console.log("change date");
    this.gnyForm.patchValue({
      DateOfBirth: date
    })
  }

}
