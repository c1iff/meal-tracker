import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'add-food',
  template: `
  <div *ngIf="selectedMeal">
    <h3>Add add a food</h3>
    <p>{{selectedMeal.date}}</p>
    <div class="form-group">
      <label>Food Type:</label>
      <input #foodType class="form-control">
    </div>
    <div class="form-group">
      <label>Enter the Calories</label><br>
      <input #foodCalories class="form-control">
    </div>
    <button class="btn btn-primary" (click)="addFood(foodType.value, foodCalories.value)">Add Food</button>
  </div>
  `
})

export class AddFoodComponent{
  @Input() selectedMeal;
  @Output() emittNewFood = new EventEmitter();

  addFood(food, calories) {
    var newFood = {
      food: food,
      calories: calories
    }
    this.selectedMeal.addFood(newFood)
    console.log(this.selectedMeal)
  }
}
