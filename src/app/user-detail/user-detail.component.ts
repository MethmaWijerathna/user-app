import { Component, OnInit, Input } from '@angular/core';
import {DetailsService} from '../services/DetailsService/details.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userDetails:any;

  @Input()
  userID: string;

  constructor(private details: DetailsService) { }

  ngOnInit(): void {
    this.details.getDetails(this.userID).subscribe((result) => {
      this.userDetails = result;
    })
  }

}
