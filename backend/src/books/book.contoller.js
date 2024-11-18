import Book from "./book.model.js";

export const createBook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book posted successfully", book: newBook });
  } catch (error) {
    console.error("Error creating book ", error);
    res.status(500).send({ message: "Failed to create book" });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res
      .status(200)
      .send({ message: "All books fetched successfully", book: books });
  } catch (error) {
    console.error("Error while fetching books ", error);
    res.status(500).send({ message: "Failed to fetch all books" });
  }
};

export const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: "book fetched successfully", book });
  } catch (error) {
    console.error("Error while getting a book ", error);
    res.status(500).send({ message: "Failed to fetch a book" });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedBook) {
      res.status(404).send({ message: "Book not found" });
    }

    res
      .status(200)
      .send({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    console.error("Error while updating a book ", error);
    res.status(500).send({ message: "Failed to update a book" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findOneAndDelete(id);
    if (!deletedBook) {
      res.status(404).send({ message: "Book not found" });
    }
    res
      .status(200)
      .send({ message: "Book deleted successfully", book: deletedBook });
  } catch (error) {
    console.error("Error while deleting a book ", error);
    res.status(500).send({ message: "Failed to delete a book" });
  }
};
