import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NewMealComponent } from './new-meal.component';
import { MealListComponent } from './meal-list.component';
import { AddFoodComponent } from './add-food.component';
import { MealDetailsComponent } from './meal-details.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriesPipe } from './calories.pipe';

import { FormsModule }  from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NewMealComponent, MealListComponent, AddFoodComponent, MealDetailsComponent, EditMealComponent, CaloriesPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
