interface Price {

    min: number,
    max: number,
    price: number
}
export class RangeManager {


    private _price = 0;
    private pricesClone;
    public get price() {
        return this._price;
    }
    constructor(private prices, private input1, private input2) {


        let first = this.input1
        let second = this.input2
        this.pricesClone = [];
        this.prices.forEach(val => this.pricesClone.push(Object.assign({}, val)));

        if (this.inRange(first) == this.inRange(second)) {

            this._price = (second - first) * this.inRange(first).price


        } else {
            while (first < second) {


                const range: Price = this.inRange(first)





                this.setMax(range, range['max'] - first)



                if (range.min + range.max > second) {

                    this._price += (second - range.min) * range.price
                    first += second - range.min
                } else {
                    this._price += (range.max) * range.price
                    first += range.max
                }
            }
        }

    }

    private inRange(index): Price {

        return this.pricesClone.find((element) => {

            if ((index >= element.min) && (index <= element.max)) {

                return true
            }

        })
    }



    private setMax(range, max) {
        let index = this.pricesClone.indexOf(range)

        this.pricesClone[index].max = max
    }

}