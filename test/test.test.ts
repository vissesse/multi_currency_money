import { Dollar, Franc, Money } from "../src/currency-money";

describe('Tenting currency-money app'.toUpperCase(), () => {
    test("Should run", () => {
    })
    test("TestMultiplication", () => {
        const five = Money.dollar(5);
        expect(Money.dollar(10)).toEqual(five.times(2))
        expect(Money.dollar(15)).toEqual(five.times(3))


    })
    test("TestQuality", () => {
        expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
        expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
        expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy()
        expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy()

        expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy()


    })
    test("TestFrancMultiplication", () => {
        const five = Money.franc(5);
        expect(Money.franc(10)).toEqual(five.times(2))
        expect(Money.franc(15)).toEqual(five.times(3))


    })

});