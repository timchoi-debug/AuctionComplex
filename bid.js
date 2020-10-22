class bid {
    #name;
    #bid_price;

    constructor(n, price) {
        name = n;
        this.#bid_price = price;
    }

    get_name() {
        return name;
    }

    get_bid_price() {
        return this.bid_price;
    }
};