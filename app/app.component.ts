import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <button class="btn btn-primary" (click)="addMealHasBeenClicked()">Add a New Meal</button>
    <new-meal [showNewMeal]='showNewMeal' (emittNewMeal)="addNewMeal($event)"></new-meal>
    <meal-list [meals]='meals' (clickSenderAddMeal)=addMealShow($event)></meal-list>
    <add-food [selectedMeal]="selectedMeal"></add-food>
  <div>
  `
})

export class AppComponent {
  showNewMeal: boolean = false;
  selectedMeal = null;
  meals: Meal[] = [new Meal('this is a date', 'Breakfast', 'this is details')];



  addMealHasBeenClicked() {
    this.showNewMeal = true;
  }

  addMealShow(currentMeal) {
    this.selectedMeal = currentMeal;
  }

  addNewMeal(newMeal) {
    console.log(newMeal)
    this.meals.push(newMeal);
  }

}
