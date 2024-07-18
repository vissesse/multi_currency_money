export class Money {

    constructor(protected amount: number, protected currency_: string) { }

    equals(object: this): boolean {
        return this.amount === object.amount && this.currency_ === object.currency_;
    }
    times(multiplier: number): any {
        return new Money(this.amount * multiplier, this.currency())
    }


    static dollar(amount: number): Money {
        return new Dollar(amount, "USD");
    }

    public currency(): string {
        return this.currency_
    }
    static franc(amount: number): Money {
        return new Franc(amount, "CHF")
    }

    toString() {
        return this.amount + " " + this.currency;
    }
}

export class Dollar extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency);
    }

    static dollar(amount: number) {
        return new Money(amount, "USD")
    }
}
export class Franc extends Money {
    constructor(amount: number, currency: string) {
        super(amount, currency);
    }
    static franc(amount: number) {
        return new Money(amount, "CHF")
    }
}