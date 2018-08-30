import {
  Component,
   OnInit,
   Input
} from '@angular/core';

import {
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

import {
  Router
} from '@angular/router';

import { GnyService } from '../../../../shared/services/gny.service';
import { NationalityService } from '../../../../shared/services/nationality.service';
import { CountryService } from '../../../../shared/services/country.service';

@Component({
  selector: 'required-error',
  template: "<div *ngIf=\"control.invalid && (control.dirty || control.touched)\" style=\"color:red;font-size:0.8em; text-transform:capitalize \"> {{fieldName}} is required </div> ",

})
export class RequiredErrorComponent implements OnInit{

  @Input() control : FormControl;
  @Input('name') fieldName : string; 

  ngOnInit(){

  }
}

@Component({
  selector: 'app-gny-form',
  templateUrl: './gny-form.component.html',
  styleUrls: ['./gny-form.component.scss']
})
export class GnyFormComponent implements OnInit {

	public gnyForm:any;
  public countries : Array<String>;
  public nationalities : Array<String>;

  constructor(
      private gnyService: GnyService,
      private countryService: CountryService,
      private nationalityService: NationalityService,
      private _router:Router
    ) {
  	this.gnyForm = new FormGroup({
  		Gender: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
  		FirstName: new FormControl('', [Validators.required]),
  		LastName: new FormControl('', [Validators.required]),
  		StreetAddress: new FormControl('', [Validators.required]),
  		City:new FormControl('', [Validators.required]),
  		Country:new FormControl('', [Validators.required]),
  		State:new FormControl('', [Validators.required]),
  		Zipcode:new FormControl('', [Validators.required]),
  		Nationality: new FormControl('', [Validators.required]),
  		DateOfBirth : new FormControl('', [Validators.required]),
      PassportIdImage: new FormControl('', [Validators.required]),
      SelfieImage: new FormControl('', [Validators.required]),
      NumberOfGNYTokens: new FormControl('', [Validators.required]),
      SendingToGNYCoinAmount: new FormControl('', [Validators.required]),
      SendingToGNYCoinType: new FormControl('', [Validators.required]),
      SendingToGNYCoinAddress: new FormControl('', [Validators.required]),
      SourceOfFunds: new FormControl('', [Validators.required]),
      SourceOfFundsField: new FormControl('', [Validators.required]),
      RiskWarningYesNo: new FormControl('', [Validators.required]),
      IHaveReadYesNo: new FormControl('', [Validators.required]),
      IUnderstandYesNo: new FormControl('', [Validators.required]),
      PassportImageType: new FormControl('', [Validators.required]),
      PassportImageReferenceNumber: new FormControl('', [Validators.required]),


  	})
  }
  ngOnInit() {
    this.countries = this.countryService.list();
    this.nationalities = this.nationalityService.list();

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
    this.gnyService.gny(this.gnyForm.value).then((result)=>{
      console.log(result);
      if(result){
        this._router.navigate(['/success'])
      }
    });
  }

  change_date(date){
    console.log("date has change" , date);
    console.log("change date",date.toLocaleDateString("en-US",{
      day:"2-digit",
      month:"2-digit",
      year:"2-digit"
    }));
    this.gnyForm.patchValue({
      DateOfBirth: date.toLocaleDateString("en-US",{
        day:"2-digit",
        month:"2-digit",
        year:"numeric"
      })
    })
  }

}
