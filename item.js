class Item {
    #title;
    #img_link;
    #temp_price;

    constructor(title, img_link, temp_price) {
        this.title = title;
        this.img_link = img_link;
        this.temp_price = temp_price;
    }

    changePrice(new_price) {
        this.#temp_price = new_price;
    }

    getTitle() {
        return this.#title;
    }

    getImage() {
        return this.#img_link;
    }
}