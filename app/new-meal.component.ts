import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div>
    <div *ngIf="showNewMeal">
      <hr>
      <h3>Add a New Meal</h3>
      <div class="form-group">
        <label>Enter Date:</label>
        <input #mealDate class="form-control">
      </div>
      <div class="form-group">
        <label>Enter Meal Time</label><br>
        <input #mealTime class="form-control">
      </div>
      <div class="form-group">
        <label>Enter Meal Details</label><br>
        <input #mealDetails class="form-control">
      </div>
      <button class="btn btn-primary" (click)="submitForm(mealDate.value, mealTime.value, mealDetails.value)">Create Meal</button>
    </div>
  </div>

  `
})

export class NewMealComponent{
  @Input() showNewMeal;
  @Output() emittNewMeal = new EventEmitter()

  submitForm(mealDate: string, mealTime: string, mealDetails: string) {
    var newMealToAdd =  new Meal(mealDate, mealTime, mealDetails);
    this.emittNewMeal.emit(newMealToAdd);
  }

}
