import { ProxyState } from "../AppState.js";
import {moneyService} from '../Services/MoneyService.js'


function _draw(){
let money = ProxyState.totalMoney;
document.getElementById('total').innerHTML = `Total money: $${money}`

document.getElementById('count').innerHTML=
`<div class="row">
<div class="col" id='count'>
    <h4>Snacks Purchased:</h4>
    <ul>
        <li>Cheetos: ${ProxyState.snacks[0].owned}</li>
        <li>Milky Way: ${ProxyState.snacks[1].owned}</li>
        <li>Oreos: ${ProxyState.snacks[2].owned}</li>
    </ul>
</div>
</div>`
}

function _drawButton(){
  let template=''
  
  ProxyState.snacks.forEach((snack,i) => {
    template += `<button class="btn btn-warning" onclick="app.moneyController.buySnack(${i})">Buy ${snack.name}: $${snack.price}</button>`
  })
  document.getElementById('buttons').innerHTML=`${template}`;
}


export default class MoneyController{
  constructor(){
    console.log('Money Controller')
    ProxyState.on('totalMoney',_draw)
    _drawButton()
  }
  addQuarter(){
    moneyService.addQuarter();
  }
  
  buySnack(index){
    moneyService.buySnack(index)
  }
}

