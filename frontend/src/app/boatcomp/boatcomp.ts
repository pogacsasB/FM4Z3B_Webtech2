import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-boatcomp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './boatcomp.html',
  styleUrls: ['./boatcomp.scss']
})
export class Boatcomp {
  boatarray: any[] = [];
  currentboatid = "";
  
  name: string = '';
  weight_limit: number = 0;
  brand: string = '';

  constructor(private http: HttpClient ) 
  {
    this.getAllBoats();
  }

  getAllBoats() {
    this.http.get("http://localhost:8000/boats/getAll")
    .subscribe((resultData: any)=>
    {
      this.boatarray = resultData.data;
    });
  }

  register()
  {
    let bodyData = {
      "name" : this.name,
      "weight_limit" : this.weight_limit,
      "brand" : this.brand, 
  };
    this.http.post("http://localhost:8000/boats/create",bodyData).subscribe(()=>
    {
        alert("Boat Registered Successfully")
        this.name = '';
        this.weight_limit = 0;
        this.brand  = '';
        this.getAllBoats();
    });
  }

  UpdateBoat(data: any) 
  {
    this.name = data.name;
    this.weight_limit = data.weight_limit;
    this.brand = data.brand;
    this.currentboatid = data._id;
  }

  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "weight_limit" : this.weight_limit,
      "brand" : this.brand,
    };
    
    this.http.patch("http://localhost:8000/boats/update"+ "/" + this.currentboatid, bodyData).subscribe(()=>
    {
        alert("Boat Updated Successfully!")
        this.getAllBoats();
    });
  }

  save()
  {
    if(this.currentboatid == '')
    {
      this.register();
    }
    else
    {
      this.UpdateRecords();
    }
  }

  DeleteBoat(data: any)
  {
    this.http.delete("http://localhost:8000/boats/delete" + "/" + data._id).subscribe(()=>
    {
      alert("Boat Deleted Successfully!");
      this.getAllBoats();
    });
  }
}
