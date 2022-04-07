const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookController");

//Endpoints

router.get("/books", bookController.get_books);
router.post("/createBooks", bookController.create);
router.put("/updateBooks/id/:id", bookController.update);
router.delete("/deleteBooks/id/:id", bookController.delete_book);

module.exports = router;
