const Book = require("../model/book");

exports.postBook = async (req, res, next) => {
  try {
    const title = await req.body.title;
    const description = await req.body.description;
    // const imageUrl = await req.file.path;
    const price = await req.body.price;

    const book = new Book({
      title: title,
      description: description,
      //   imageUrl: imageUrl,
      price: price,
    });
    await book.save();
    return res.status(200).json({ Response: "Success" });
  } catch (err) {
    return res.status(400).json({ Response: err.message });
  }
};

exports.getList = async (req, res, next) => {
  try {
    // const page = (await +req.query.page) || 1;

    // const numProducts = await Book.find().countDocuments();

    const products = await Book.find();

    return res.status(200).json({ data: products });
  } catch (err) {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  }
};
