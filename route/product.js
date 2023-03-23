const express = require("express");
const router = express.Router();
const bookController = require("../controller/book");

// router.get("/users", isauth, verify("Admin"), bookController.getUsers);

// book controllers file

router
  .route("/addbook")
  // .get(bookController.getBook)
  .post(bookController.postBook);
//   .post(isauth, verify("Admin", "User"), bookController.postBook);

// router.get('/listbook', isauth, verify('Admin', 'User'), bookController.getList)
router.get("/listbook", bookController.getList);

// router.get(
//   "/detail/:bookId",
//   verify("Admin", "User"),
//   isauth,
//   bookController.details
// );
// router.get("/detail", isauth, verify("Admin", "User"), bookController.details);

// router.get("/cart", isauth, verify("Admin", "User"), bookController.getCart);

// router.post("/cart", isauth, verify("Admin", "User"), bookController.postCart);

// router.post(
//   "/cart-delete-item",
//   isauth,
//   verify("Admin", "User"),
//   bookController.postCartDeleteProduct
// );

// router.get(
//   "/checkout",
//   isauth,
//   verify("Admin", "User"),
//   bookController.getCheckout
// );

// router.get('/order',isauth, bookController.postOrder)

// router.post('/create-order', isauth, bookController.postOrder);

// router.get("/create-order", isauth, bookController.postOrder);

// router.post("/orderrr", bookController.postNew);

// router.get("/orders", isauth, bookController.getOrder);

// router.get("/orderss/", bookController.getInvoice);

module.exports = router;
