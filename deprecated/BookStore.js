import {types} from 'mobx-state-tree';

const Book = types.model('Book', {
    title: types.string,
    author: types.string,
    read: false,
})
    .actions(self => ({
        toggleRead: () => {
            self.read = !self.read
        }
    }));

const BookStore = types.model('Books', {
    books: types.array(Book),
})
    .actions(self => ({
        addBook: (book) => {
            self.books.push(book)
        }
    }))
    .create({
        books: [{title: 'Ready player one', author: 'Earnest Cline', read: true}],
    });

export default BookStore;
