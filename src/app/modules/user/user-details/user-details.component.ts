import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS_DATA } from '@data/constants/users.constants';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
//import { CardUserComponent } from '@shared/components';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public users: ICardUser[] = USERS_DATA;
  public id: number;
  public currentUser: ICardUser = {
    id: 1,
      avatar: './assets/img/futbol.jpg',
      name : 'Noel Miño Herrera',
      age : 38,
      description : "Programador FullStack",
      work: "Project Manager"
  };

  constructor(private router: ActivatedRoute) {
      this.id = +this.router.snapshot.params['id'];
      this.currentUser = this.users.find(user => user.id === this.id)!;
   }

  ngOnInit(): void {
  }

}
