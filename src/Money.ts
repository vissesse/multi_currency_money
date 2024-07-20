import { Bank } from "./Bank";
import { Sum } from "./Sum";
import { Expression } from "./Expression";

export class Money implements Expression {

    constructor(public amount: number, protected currency_: string) { }
    public reduce(bank: Bank, to: string): Money {
        const rate = bank.rate(this.currency(), to)
        return new Money(this.amount / rate, to);
    }

    public equals(object: this): boolean {
        return this.amount === object.amount && this.currency_ === object.currency_;
    }
    public times(multiplier: number): Expression {
        return new Money(this.amount * multiplier, this.currency())
    }

    public plus(addend: Expression): Expression {
        return new Sum(this, addend);
    }

    static dollar(amount: number): Money {
        return new Money(amount, "USD");
    }

    public currency(): string {
        return this.currency_
    }
    static franc(amount: number): Money {
        return new Money(amount, "CHF")
    } 
}

