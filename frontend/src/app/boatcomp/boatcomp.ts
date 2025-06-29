import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-boatcomp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './boatcomp.html',
  styleUrls: ['./boatcomp.scss']
})
export class Boatcomp {
  name: string = '';
  weight_limit: number = 0;
  brand: string = '';

  constructor(private http: HttpClient ) 
  {
    
  }

  register()
  {
    let bodyData = {
      "name" : this.name,
      "weight_limit" : this.weight_limit,
      "brand" : this.brand, 
  };
    this.http.post("http://localhost:8000/boats/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Boat Registered Successfully")
        this.name = '';
        this.weight_limit = 0;
        this.brand  = '';
    });
  }
}
