import { Bank } from "./Bank";
import { Money } from "./Money";

export interface Expression {
    reduce(bank: Bank, to: string): Money;
    times(multiplier: number): Expression;
    plus(addend: Expression): Expression;

}