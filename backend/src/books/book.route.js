import express from "express";
import {createBook, deleteBook, getAllBooks, getSingleBook, updateBook} from "./book.contoller.js"
import verifyAdminToken from "../middleware/verifyAdminToken.js";
const router = express.Router();

// post a book
router.post("/create-book",verifyAdminToken,createBook)

// get all books
router.get("/",getAllBooks)

// single book endpoint
router.get("/:id",getSingleBook)

// update a book endpoint
router.put("/edit/:id",verifyAdminToken,updateBook);

// delete a book endpoint
router.delete("/:id",verifyAdminToken,deleteBook)

export default router;