import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  constructor(private awtenticate: AuthenticationService) { }

  historyText : String = '';
  mathOperators : String = '';
  firstNum : any;
  secondNum : any;
  result: any;

  ngOnInit() {
    this.awtenticate.authenticated = false;
  }
  
  numBtn(num: number){
    if (this.mathOperators == '') {
      this.firstNum = this.firstNum == null ? num : this.firstNum * 10 + num;
      this.result = this.result == null ? num.toString() : this.result + num.toString();
      this.historyText = this.result;
    } else {
      this.secondNum = this.secondNum == null ? num : this.secondNum * 10 + num;
      this.result = this.result == null ? num.toString() : this.result + num.toString();
      this.historyText += num.toString();
    }
  }

  mathOperation(oprtr: String) {
    if (this.firstNum != null && this.secondNum != null) {
      this.equal();
      this.historyText += this.mathOperators.toString();
      this.result = this.historyText
    }
    if (this.firstNum != null) {
      this.mathOperators = oprtr;
      this.historyText += this.mathOperators.toString();
      this.result += this.mathOperators.toString();
    }
  }

  equal(){
    if (this.mathOperators,this.firstNum,this.secondNum != null){
      switch (this.mathOperators) {
        case "+":
          this.result = this.firstNum + this.secondNum;
          break;
        case "-":
          this.result = this.firstNum - this.secondNum;
          break;
        case "*":
          this.result = this.firstNum * this.secondNum;
          break;
        case "/":
          if (this.secondNum == 0) {
            this.result = 'Error';
          } else {
            this.result = this.firstNum / this.secondNum;
          }
          break;
        default:
          break;
      }
    }
    this.firstNum = this.result;
    this.secondNum = null;
    this.mathOperators = '';
  }

  clear(){
    this.historyText = ''
    this.firstNum = null
    this.secondNum = null
    this.result = null;
    this.mathOperators = ''
  }
}
