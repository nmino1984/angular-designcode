 import { Component, OnInit } from '@angular/core';
import { ICardInterest } from '@shared/components/cards/card-interest/icard-interest.metadata';
import { INTEREST_DATA } from  '@data/constants/interest.constants'

@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.component.html',
  styleUrls: ['./interest-list.component.scss']
})
export class InterestListComponent implements OnInit {

  public interest: ICardInterest[] = INTEREST_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
