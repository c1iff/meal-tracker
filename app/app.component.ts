import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <meal-list [meals]='meals' (clickSenderAddMeal)=addMealShow($event)></meal-list>
      <add-food [selectedMeal]="selectedMeal"></add-food>
    </div>
    <div class="row">
    <hr>
      <new-meal [showNewMeal]='showNewMeal' (emittNewMeal)="addNewMeal($event)"></new-meal>
      <button class="btn btn-primary" (click)="addMealHasBeenClicked()">Add a New Meal</button>
    </div>
  </div>
  `
})

export class AppComponent {
  showNewMeal: boolean = false;
  selectedMeal = null;
  meals: Meal[] = [new Meal('2016-1-20', 'Breakfast', 'this is details')];



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
