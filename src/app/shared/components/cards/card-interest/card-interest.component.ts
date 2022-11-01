import { Component, Input, OnInit } from '@angular/core';
import { ICardInterest } from './icard-interest.metadata';

@Component({
  selector: 'app-card-interest',
  templateUrl: './card-interest.component.html',
  styleUrls: ['./card-interest.component.scss']
})
export class CardInterestComponent implements OnInit {

  @Input() dataInterest: ICardInterest = {
    id: 1,
    avatar: '../../../../../assets/img/default-user.png',
    title: 'Lorem Ipsum dolor sit amet',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    link: 'www.google.com'
};

  constructor() { }

  ngOnInit(): void {
  }

}
