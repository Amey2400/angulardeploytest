import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]

})
export class AppComponent {
  public datatosent:string = '';
  formControl: FormControl;
  TestDataform: FormGroup;
  title = 'deploytest';
  constructor(public api:ApiService,public fb: FormBuilder) {
    this.TestDataform=this.fb.group({
      data1:['',[Validators.required]]
    });
   }
  
  //to send all the data to django model blocks after simulate button pressing
  onSubmit(TestDataform1){
    this.datatosent=TestDataform1.value.data1;
    this.api.sendData(this.datatosent).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
