import { Component, OnInit } from '@angular/core';
import { menuList } from './menu.model'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 recipes: menuList[] = [
    new menuList('Chicken Tikka', 'Non-veg Appetizer', 'http://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg'),
    new menuList('Mozerella sticks', 'Veg Appetizer', 'http://img.sndimg.com/food/image/upload/w_772,h_386,c_fill,fl_progressive,q_80/v1/img/recipes/30/97/7/rCPq9e9QCuke3PYJclYM_mfood1.jpg'),
    new menuList('Apollo Fish', 'Non-Veg Appetizer', 'http://3.bp.blogspot.com/-QFKDO-mSJfc/V1onOsKkoSI/AAAAAAAADWw/HnOJIUW1BPkDReXInD6vfnyfZeuyYxwFgCK4B/s1600/image_4.jpeg'),
    new menuList('Chilli Paneer Masala', 'Veg Appetizer', 'http://34c6b8841d4124020671-5bfabe5484726969ac662c6d377e2f3c.r16.cf2.rackcdn.com/uploads/old/qEl7unKipn.jpg'),
    new menuList('Fried Fish', 'Non-Veg Appetizer', 'http://caribbeanpot.com/wp-content/uploads/2014/04/jamaican-jerk-fish-10.jpg'),
    new menuList('Nachos-cheese dip', 'Veg Appetizer', 'https://i.ytimg.com/vi/6AYLRxdultc/maxresdefault.jpg'),
    new menuList('Shrimp masala', 'Non-Veg Appetizer', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/3/3/0/FNM_040110-Copy-That-003_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539155471.jpeg')

  ];





  constructor() { }

  ngOnInit() {
  }

}
