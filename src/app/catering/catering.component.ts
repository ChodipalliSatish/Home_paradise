import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit  {
  current: number = 0;
  items: Array<any>;
  
  
  constructor() {}

  ngOnInit(){
    
    this.items =[
                  {
                    "title": "Vegeterian-Starters",
                    "description": "Nachos, Potato Fries, chana Wraps, paneer sticks "
                  },
                  {
                    "title": "Non-vegeterian Starters",
                    "description": "Chicken-65, Curry-leaf chicken, Lamb chops, prawns 35"
                  },
                  {
                    "title": "Vegeterian-Meals",
                    "description": "Dal-curry, Baighan fry, Potato curry, palak-paneer, All vegetable korma, Vegetable Biryani, Jeera Rice, "
                  },
                  {
                    "title": "Non-Vegeterian Meals",
                    "description": "Butter Chicken, Mutton biryani, Rogan Gosh, Prawns fry, Fish curry, Chicken biryani"
                  },
                  {
                    "title": "Icecreams & Desserts",
                    "description": "Fruit and Nut Ice cream, Strawberry Ice cream, Red-velvet pastery cake, vanilla-banana cake "
                  },
                  {
                    "title": "Beverages",
                    "description": "Coco-cola, Pepsi, sprite, Mazza, Ice-tea, Cold-coffee "
                  }
                ]
    
  }
  
}

 


