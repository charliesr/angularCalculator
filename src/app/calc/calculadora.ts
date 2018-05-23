import { ICalculadora } from './ICalculadora';

export class Calculadora implements ICalculadora {
    num1: number;
    num2: number;
    suma(): number {
        return this.num1 + this.num2;
    }

    resta(): number {
        return this.num1 - this.num2;
    }

    multiplicacion(): number {
        return this.num1 * this.num2;
    }

    division(): number {
        return this.num1 / this.num2;
    }

}
