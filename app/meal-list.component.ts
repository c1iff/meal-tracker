import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h3></h3>
    <div *ngFor = "let currentMeal of meals">
    <div class="col-md-3">
    <div class="panel panel-default">
      <div class="panel-body">
        <h4>{{currentMeal.mealTime}} on  {{currentMeal.date}}</h4>
        <p>{{currentMeal.details}}</p>
        <h5>Total Calories: {{currentMeal.totalCalories}}</h5>
        <meal-details [currentMeal]="currentMeal"></meal-details>
      </div>
    </div>

      <button class="btn btn-info" (click)="addButtonHasBeenClicked(currentMeal)">Add Foods</button>
      <button class="btn btn-danger" (click)="editButtonHasBeenClicked(currentMeal)">Edit Meal</button>

    </div>
  </div>
  `
})

export class MealListComponent{
  @Input() meals;
  @Output() clickSenderAddMeal = new EventEmitter();
  @Output() clickSenderEdit = new EventEmitter();

  addButtonHasBeenClicked(currentMeal) {
    this.clickSenderAddMeal.emit(currentMeal);
  }

  editButtonHasBeenClicked(currentMeal) {
    this.clickSenderEdit.emit(currentMeal);
  }
}
