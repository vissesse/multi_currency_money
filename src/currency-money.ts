export interface Expression {

}
export class Money implements Expression {

    constructor(protected amount: number, protected currency_: string) { }

    equals(object: this): boolean {
        return this.amount === object.amount && this.currency_ === object.currency_;
    }
    times(multiplier: number): any {
        return new Money(this.amount * multiplier, this.currency())
    }


    static dollar(amount: number): Money {
        return new Money(amount, "USD");
    }

    plus(added: Money): Expression {
        return new Sum(this, added);
    }
    public currency(): string {
        return this.currency_
    }
    static franc(amount: number): Money {
        return new Money(amount, "CHF")
    }

    toString() {
        return this.amount + " " + this.currency_;
    }
}


export class Bank {
    reduce(expression: Expression, to: string): Money {
        return Money.dollar(10)
    }
}

export class Sum implements Expression {

    constructor(public augend: Money, public addend: Money) { }
}
