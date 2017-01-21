import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  template: `
  <div>
    <li *ngFor = "let food of currentMeal.foods">{{food.food}}</li>
  </div>
  `
})

export class MealDetailsComponent{
  @Input() currentMeal;

}
