import { Expression } from "./Expression";
import { Money } from "./Money";

export class Bank {
    private rates = new HashTable()
    reduce(source: Expression, to: string): Money {
        return source.reduce(this, to)
    }
    rate(from: string, to: string): number {
        // const rate = from === 'CHF' && to === 'USD' ? 2 : 1;
        if (from === to) return 1
        const rate = this.rates.get(new Pair(from, to))
        return rate.code;
    }
    addRate(from: string, to: string, rate: number) {
        this.rates.put(new Pair(from, to), rate)
    }

}


class Pair {
    constructor(private from: string, private to: string) { }
    equals(object: Object) {
        const pair = object as Pair;
        return this.from === pair.from && this.to === pair.to
    }
    hashCode() {
        return 0
    }

}


class HashTable {
    hashCode: { pair: Pair, code: number }[] = [] as any

    put(pair: Pair, code: number) {
        this.hashCode.push({ pair, code })
    }

    get(pair: Pair) {
        const pair_ = this.hashCode.find(pair => pair === pair) || { pair, code: 0 }
        return pair_
    }
}