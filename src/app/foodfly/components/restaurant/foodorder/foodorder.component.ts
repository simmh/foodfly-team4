import { Component, OnInit } from '@angular/core';
import { FoodorderService } from '../../../core/services/foodorder.service';
import { FoodList} from '../../../core/interface/foodorder.interface';

import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'foodfly-foodorder',
  templateUrl: './foodorder.component.html',
  styleUrls: ['./foodorder.component.css'],
  providers: [FoodorderService],
  animations: [
    trigger('accordion', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ height: 0 }),
        animate(200, style({ height: '*' }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(200, style({ height: 0 }))
      ])
    ])
  ]
})
export class FoodorderComponent implements OnInit {

  constructor(public foodorderservice: FoodorderService) {}

  navItems: string[] = ['메뉴', '정보', '리뷰'];

  selectedItem: string;

  foodlist: FoodList[] = [
    { id: 1, name: '안동찜닭', price: 25000, amount: 1 },
    { id: 2, name: '후라이드', price: 15000, amount: 1 },
    { id: 3, name: '양념치킨', price: 16000, amount: 1 }
  ];

  subMenu = false;

  sideMenu = false;


  ngOnInit() {
    this.selectedItem = this.navItems[0];
  }

  changeNavItem(navItem: string) {
    this.selectedItem = navItem;
  }
}

