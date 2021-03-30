import { ProxyState } from "../AppState.js";

class MoneyService{
  addQuarter() 
  {
    ProxyState.totalMoney += 0.25
    console.log(ProxyState.totalMoney)
  }

  buySnack(index){
    let type = ProxyState.snacks[index]

    if(ProxyState.totalMoney>=type.price){
      type.owned++
      ProxyState.totalMoney-=type.price
      console.log("Snack Purchased")
    }else{
      console.log('NOT ENOUGH MOOLAH')
    }
  }
}
export const moneyService = new MoneyService()