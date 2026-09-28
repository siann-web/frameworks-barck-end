const express = require('express');
const app = express();
const port = 3000;
const books = [
  { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', ano: 1997 },
  { id: 2, title: 'Senhor dos Anéis', author: 'J.R.R. Tolkin', ano: 1954 },
  { id: 3, title: 'O Hobbit', author: 'J.R.R. Tolkin', ano: 1937 }
];


app.get('/', (req, res) => {
  res.send('API-BOOK está funcionando!');
});

app.listen(port, () => {
  console.log(`API-BOOK está rodando na porta ${port}`);
});


app.get('/books', (req, res) => {
    res.json(books);
})

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    if (!book) {
        res.status(404).send('Livro não encontrado');
    }
    else{
        res.json(book);
    }
})

app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        ano: req.body.ano
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    if (!book) {
        res.status(404).send('Livro não encontrado');
    }
    else {
        book.title = req.body.title;
        book.author = req.body.author;
        book.ano = req.body.ano;
        res.json(book);
    }
});

app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookId);
    if (bookIndex === -1) {
        res.status(404).send('Livro não encontrado');
    }
    else {
        books.splice(bookIndex, 1);
        res.status(200).send('Livro removido com sucesso');
    }
});