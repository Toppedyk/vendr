import { ProxyState } from "../AppState.js";
import {moneyService} from '../Services/MoneyService.js'

function _draw(){
let money = ProxyState.totalMoney;
document.getElementById('total').innerHTML = `Total money: $${money}`
}

function _drawPurchase(){
  let template=''
  ProxyState.snacks.forEach((snack,i)=>{
    template+=`<li>${ProxyState.snacks[i].name}: ${ProxyState.snacks[i].owned}</li>`
  })
  document.getElementById('count').innerHTML=`${template}`
}

function _drawButton(){
  let template=''
  ProxyState.snacks.forEach((snack,i) => {
    template += `<button class="btn btn-warning m-2" onclick="app.moneyController.buySnack(${i})">Buy ${snack.name}: $${snack.price}</button>`
  })
  document.getElementById('buttons').innerHTML=`${template}`;
}

export default class MoneyController{
  constructor(){
    console.log('Money Controller')
    ProxyState.on('totalMoney',_draw)
    ProxyState.on('totalMoney',_drawPurchase)
    _drawButton()
    _drawPurchase()
  }
  addQuarter(){
    moneyService.addQuarter();
  }
  buySnack(index){
    moneyService.buySnack(index)
  }
}

