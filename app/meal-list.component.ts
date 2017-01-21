import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h3></h3>
    <div *ngFor = "let currentMeal of meals">
    <div class="col-md-3">
      <hr>
      {{currentMeal.mealTime}} on  {{currentMeal.date}}
      <p>{{currentMeal.details}}</p>
      <p>{{currentMeal.totalCalories}}</p>
      <meal-details [currentMeal]="currentMeal"></meal-details>

      <button class="btn btn-primary" (click)="addButtonHasBeenClicked(currentMeal)">Add Foods</button>
      <hr>
    </div>
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
