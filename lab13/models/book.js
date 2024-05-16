const books=[];
let i=1;

module.exports=class Book{

    constructor(title,isbn,publishedDate,author){
        this.title=title;
        this.isbn=isbn;
        this.publishedDate=publishedDate;
        this.author=author;
    }

    static getAll(){
        console.log('Books:',books);
        return books;
    }

    static getBookById(id){
        const book=books.find(b=> b.id===id);

        if(book){
            return book;
        }else{
            throw new Error(`No found book`);
        }
    }

    save(){
        this.id= i++;
        books.push(this);
    }

    static deleteById(id){
        const index=books.findIndex(b=> b.id===id);
        if(index>-1){
            const temp=books[index];
            books.splice(index,1);
        }else{
            throw new Error(`No found book`);
        }
    }

    update(id){
        const index=books.findIndex(b=> b.id===id);
        if(index>-1){
            this.id=id;
            books[index]=this;
        }else{
            throw new Error(`No found book`);
        }
    }
}