import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div *ngIf="showNewMeal">
    <div class="col-md-3">
      <h3>Add a New Meal:</h3>
      <div class="form-group">
        <label>Enter Date:</label>
        <input #mealDate class='form-control' type='date'>
      </div>
      <label>Enter Meal Time</label>
      <select #mealTime class="form-control">
        <option value="Breakfast" selected="selected">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select><br>
      <div class="form-group">
        <label>Enter Meal Details</label><br>
        <input #mealDetails class="form-control">
      </div>
      <button class="btn btn-primary btn-inverse" (click)="submitForm(mealDate.value, mealTime.value, mealDetails.value)">Create Meal</button>
    </div>
  </div>
  `
})

export class NewMealComponent{
  @Input() showNewMeal;
  @Output() emittNewFood = new EventEmitter()

  submitForm(mealDate: string, mealTime: string, mealDetails: string) {
    var newMealToAdd =  new Meal(mealDate, mealTime, mealDetails);

    this.emittNewFood.emit(newMealToAdd);
  }

}
