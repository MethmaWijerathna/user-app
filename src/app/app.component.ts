import { Component } from '@angular/core';
import {UsersService} from './UserService/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userValues: any;
  idClicked: string;

  currentPage: number = 1;
  view: String = "home";

  title = 'user-app';

  constructor(private userData: UsersService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setUserValues('1')
  }

  goToUserDetails(id){
    this.view = "details"
    this.idClicked = id
  }

  goToHome(){
    this.view = "home"
  }

  goToNext(){
    if (this.userValues.total_pages > this.currentPage) {
      this.currentPage++
      this.setUserValues(String(this.currentPage))
    }
  }

  goToPrevious(){
    if (1 < this.currentPage) {
      this.currentPage--
      this.setUserValues(String(this.currentPage))
    }
  }

  setUserValues(page){
    this.userData.getUsers(page).subscribe((result) => {
      this.userValues = result;
    })
  }
}
