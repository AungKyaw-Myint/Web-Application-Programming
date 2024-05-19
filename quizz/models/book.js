let Books = [];
let i = 1;

module.exports = class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    static getByBookId(id) {
        const b = Books.find(b => b.id === id);

        if (b) {
            return b;
        }
        else {
            throw new Error('Not Found');
        }

    }

    save() {
        this.id = i++;
        Books.push(this);

        return this;
    }

    static getSearch(name) {
        const b = Books.filter(b => b.author.firstname.includes(name));
        console.log('bbb', b);

        if (b) {
            return b;
        } else {
            return [];
        }

    }
}