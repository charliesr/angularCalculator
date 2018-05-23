import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Calculadora } from './Calculadora';
import { ICalculadora } from './ICalculadora';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})

export class CalcComponent {
  result = 0;
  calc: ICalculadora;
  calcForm = new FormGroup(
    {
      num1: new FormControl(),
      num2: new FormControl()
    }
  );

  constructor() {
    this.calc = new Calculadora();
  }

  sum(): void {
    this.calc.num1 = +this.calcForm.get('num1').value;
    this.calc.num2 = +this.calcForm.get('num2').value;
    this.result = this.calc.suma();
  }

  res(): void {
    this.calc.num1 = +this.calcForm.get('num1').value;
    this.calc.num2 = +this.calcForm.get('num2').value;
    this.result = this.calc.resta();
  }
  mul(): void {
    this.calc.num1 = +this.calcForm.get('num1').value;
    this.calc.num2 = +this.calcForm.get('num2').value;
    this.result = this.calc.multiplicacion();
  }
  div(): void {
    this.calc.num1 = +this.calcForm.get('num1').value;
    this.calc.num2 = +this.calcForm.get('num2').value;
    this.result = this.calc.division();
  }


}
