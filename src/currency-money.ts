export abstract class Money {

    constructor(protected amount: number, protected currency: string) { }

    equals(object: this) {
        return this.amount === object.amount && this.constructor === object.constructor;
    }
    abstract times(multiplier: number): Money;


    static dollar(amount: number): Money {
        return new Dollar(amount, "USD");
    }

    static franc(amount: number): Money {
        return new Franc(amount, "CHF")
    }
}

export class Dollar extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency);
    }

    times(multiplier: number): Money {
        return Money.dollar(this.amount * multiplier)
    }

}
export class Franc extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency);
    }

    times(multiplier: number): Money {
        return Money.franc(this.amount * multiplier)
    }



}