import { Bank } from "../src/Bank";
import { Expression } from "../src/Expression";
import { Money } from "../src/Money";
import { Sum } from "../src/Sum";

describe('Tenting currency-money app'.toUpperCase(), () => {
    test("Should run", () => {
    })
    test("Test Multiplication", () => {
        const five = Money.dollar(5);
        expect(five.times(2)).toEqual(Money.dollar(10))
        expect(five.times(3)).toEqual(Money.dollar(15))


    })
    test("Test quality", () => {
        expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
        expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
        expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy()

    })

    test("test Currency", () => {
        expect(Money.dollar(1).currency()).toBe("USD")
        expect(Money.franc(1).currency()).toBe("CHF")
    })

    test("test simple addiction", () => {
        const five = Money.dollar(5)
        const sum: Expression = five.plus(five)
        const bank: Bank = new Bank()
        const reduced: Money = bank.reduce(sum, 'USD')
        expect(reduced).toEqual(Money.dollar(10))
    })

    test("Test plus return sum", () => {

        const five: Money = Money.dollar(5)
        const result: Expression = five.plus(five)
        const sum: Sum = result as Sum;
        expect(five).toBe(sum.augend)
        expect(five).toBe(sum.addend)
    })

    test("Test Reduce Sum", () => {
        const sum = new Sum(Money.dollar(3), Money.dollar(4))
        const bank = new Bank();
        const result = bank.reduce(sum, "USD")
        expect(result).toEqual(Money.dollar(7));
    })

    test("Test Reduce Money", () => {
        const bank = new Bank();
        const result: Money = bank.reduce(Money.dollar(1), 'USD')
        expect(result).toEqual(Money.dollar(1))
    })

    test("Test Reduce Money difference reduce currency", () => {
        const bank = new Bank();
        bank.addRate("CHF", "USD", 2);
        bank.rate("CHF", "USD");
        const result = bank.reduce(Money.franc(2), "USD")
        expect(result).toEqual(Money.dollar(1))
    })

    test("Test Array Equals", () => {

        expect(['abc']).toEqual(['abc'])
    })

    test("Test Identity Rate", () => {
        expect(new Bank().rate("USD", "USD")).toBe(1)
    })

    test("Test Mixed Addiction", () => {
        const fiveBucks: Expression = Money.dollar(5)
        const tenFrancs: Expression = Money.franc(10)

        const bank = new Bank();
        bank.addRate("CHF", "USD", 2)
        const result = bank.reduce(fiveBucks.plus(tenFrancs), "USD")
        expect(result).toEqual(Money.dollar(10))
    })
    test("Test Sum Plus Money", () => {
        const fiveBucks = Money.dollar(5)
        const tenFrancs = Money.franc(10)
        const bank = new Bank()
        bank.addRate("CHF", "USD", 2)
        const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks)
        const result = bank.reduce(sum, "USD")
        expect(result).toEqual(Money.dollar(15))

    })
    test("Test Sum Times", () => {
        const fiveBucks = Money.dollar(5)
        const tenFrancs = Money.franc(10)
        const bank = new Bank()
        bank.addRate("CHF", "USD", 2)
        const sum = new Sum(fiveBucks, tenFrancs).times(2)
        const result = bank.reduce(sum, "USD")
        expect(result).toEqual(Money.dollar(20))
    })

});

