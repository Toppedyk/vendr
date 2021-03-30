import ValuesController from "./Controllers/ValuesController.js";
import MoneyController from "./Controllers/MoneyController.js"
class App {
  valuesController = new ValuesController();
  moneyController = new MoneyController();
}

window["app"] = new App();
