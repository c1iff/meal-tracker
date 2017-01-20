import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div>
    <li *ngFor = "let currentMeal of meals">date: {{currentMeal.date}}
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
