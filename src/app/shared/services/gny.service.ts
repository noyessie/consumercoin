import { Injectable } from '@angular/core';
import { RequestOptions , Headers} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GnyService {
	endpoint = "http://67.207.157.12:8080/genie/api/consumerCoin/new/";

  constructor(
  		private http: HttpClient,
  	) { }

  gny(data){
  	let headers = new HttpHeaders();
  	headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
		headers.append('Access-Control-Allow-Origin','*');
    const options = { headers: headers };

    let formData = new FormData();
		for(let key in data){
			formData.append(key , data[key]);
		}

		console.log("sended form data" , formData);

    return this.http.post(this.endpoint , formData , options)
    	.toPromise()
    	.then(success =>{
    		console.log("success ", (success as any).FlikResponse	);
				return success;

    	} , error =>{
    		console.log("error" , error);
    	});

  }

}
