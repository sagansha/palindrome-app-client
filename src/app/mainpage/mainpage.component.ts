import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Palindrome } from '../Palindrom';
import { PalindromService } from '../palindrom.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

  palindrome: Palindrome = new Palindrome();
  values: any;
  currData: String;
  ERR_MSG1 = "Word should be in 100 characters";
  ERR_MSG2 = "Word should not be 0 Character";
  
  constructor(private service: PalindromService) {
    this.getData();
   }

  addData() {
    if (this.currData) {
      this.palindrome.value = this.currData.trim();
      if (this.palindrome.value.length > 100) {
        alert(this.ERR_MSG1);
      }
    } else {
      alert(this.ERR_MSG2);
    }

    this.service.addNewData(this.palindrome).subscribe((data: any) => { this.values = data },
      err => {
        if (err.status === 406) {
          alert(err.error.errorMessage);
        }
      });

  }

  getData() {
    this.service.getAllData().subscribe((res: any) => {
      this.values = res;
    });
  }

}
