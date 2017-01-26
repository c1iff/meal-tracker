import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h3>Filter by Calories</h3>
  <div class="row">
    <div class="col-md-3">
      <select class="form-control" (change)="onChange($event.target.value)">
        <option value="0" selected="selected">All Meals</option>
        <option value="500">Meals with more than 500 calories</option>
        <option value="1000">Meals with more than 1000 calories</option>
      </select>
      </div>
      </div>
    <br>
    <div *ngFor = "let currentMeal of meals | calories:filterByCalories">
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

  filterByCalories: string = "0";

  addButtonHasBeenClicked(currentMeal) {
    this.clickSenderAddMeal.emit(currentMeal);
  }

  editButtonHasBeenClicked(currentMeal) {
    this.clickSenderEdit.emit(currentMeal);
  }

  onChange(optionFromMenu) {
  this.filterByCalories = optionFromMenu;
  }
}
