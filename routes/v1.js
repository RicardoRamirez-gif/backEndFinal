const router = require('express').Router();
const Book = require('../model/bookmodel');

// To get all Books
router.route('/').get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Get a book with an specific id
router.route('/:id').get((req, res) => {
  console.log('just id' + req.params.id);
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Create a new book
router.route('/').post(async (req, res) => {
  const book = req.body.book;

  const newBook = await new Book({
    title: book.title,
    author: book.author,
    description: book.description
  });

  newBook
    .save()
    .then(() => res.json('save book!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Update a book give a specific id
router.route('/:id').post(async (req, res) => {
  console.log(req.params.id);
  const { book } = req.body;

  await Book.findById(req.params.id)
    .then((bookforedit) => {
      if (!bookforedit) {
        return res.status(404).json('Book not found!');
      }

      bookforedit.title = book.title;
      bookforedit.author = book.author;

      bookforedit
        .save()
        .then(() => res.json('Up date book by id!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete a book
router.route('/:id').delete(async (req, res) => {

  await Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Deleted book by id.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});


module.exports = router;
