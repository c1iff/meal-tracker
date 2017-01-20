import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div>
    <li *ngFor = "let currentMeal of meals">{{currentMeal.mealTime}} on  {{currentMeal.date}}

      <p>{{currentMeal.details}}</p>
      <p>{{currentMeal.totalCalories}}</p>
      <p>foods array:{{currentMeal.foods}}</p>
      <meal-details [currentMeal]="currentMeal"></meal-details>

      <button class="btn btn-primary" (click)="addButtonHasBeenClicked(currentMeal)">Add Foods</button>
    <li>
  </div>
  `
})

export class MealListComponent{
  @Input() meals;
  @Output() clickSenderAddMeal = new EventEmitter();

  addButtonHasBeenClicked(currentMeal) {
    this.clickSenderAddMeal.emit(currentMeal);
  }
}
