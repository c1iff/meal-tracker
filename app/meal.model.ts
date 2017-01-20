export class Meal {

  public totalCalories: number = 0;
  public foods = [];

  constructor (public date: string, public mealTime: string,
  public details: string) {

  }
  public addFood(food) {
        this.foods.push(food);
    }
}
