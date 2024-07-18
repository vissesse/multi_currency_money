import { Bank, Expression, Money, Sum } from "../src/currency-money";
// page 67
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
        const sum = five.plus(five)
        const bank = new Bank()
        const reduced = bank.reduce(sum, 'USD')
        expect(reduced.equals(Money.dollar(10))).toBeTruthy()
    })

    test("Test plus return sum", () => {

        const five: Money = Money.dollar(5)
        const result: Expression = five.plus(five)
        const sum: Sum = result as Sum;
        expect(five).toBe(sum.addend)
    })

    
});

