const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;

// LogIn
app.post('/user/login', (req, res) => {
  const userName = req.body.username;
  const userPassword = req.body.password;

  if (!userName || !userPassword) {
    res.send({ text: 'The field is empty', success: false });
    return;
  }

  const userData = fs.readFileSync("./data/users.json", "utf-8")
  const json = JSON.parse(userData)

  const user = json.find((x) => x.name === userName && x.password === userPassword);
  if (user) {
    res.json({ text: 'Logged in!', success: true, email: user.email });
  } else {
    res.json({ text: 'Failed to log in!', success: false });
  }
});

// Register
app.post('/user/register', (req, res) => {
  const userName = req.body.username;
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  if (!userName) {
    res.json({ text: 'The user name field is empty!', success: false });
    return;
  }

  if (!userEmail) {
    res.json({ text: 'Th user email field is empty!', success: false });
    return;
  }

  if (!userPassword) {
    res.json({ text: 'The user password field is empty!', success: false });
    return;
  }

  const userData = fs.readFileSync("./data/users.json", "utf-8")
  const json = JSON.parse(userData)

  const user = json.find((x) => x.name === userName);
  if (user) {
    res.json({ text: 'This username is already taken', success: false });
    return;
  }

  json.push({ name: userName, password: userPassword, email: userEmail })
  fs.writeFileSync("./data/users.json", JSON.stringify(json, null, 2))
  res.json({ text: "Saved data", success: true })
})

// get all products
app.get('/product', (req, res) => {
  const search = (req.query.search || "").toLowerCase();
  const sortBy = req.query.sortBy || "fromAtoZ";
  const username = req.query.username;

  const fileContent = fs.readFileSync("./data/products.json", "utf-8")
  let products = JSON.parse(fileContent);

  const totalProductCount = products.length;

  products = products
    .filter((x) =>
      x.name.toLowerCase().includes(search) ||
      x.description.toLowerCase().includes(search)
    );

  switch (sortBy) {
    default:
    case "fromAtoZ":
      products = products.sort((a, b) => (a.name > b.name) ? -1 : 1);
      break;

    case "fromZtoA":
      products = products.sort((a, b) => (a.name < b.name) ? -1 : 1);
      break;

    case "highToLow":
      products = products.sort((a, b) => (a.price > b.price) ? -1 : 1);
      break;

    case "lowToHigh":
      products = products.sort((a, b) => (a.price < b.price) ? -1 : 1);
      break;
  }

  if (username) {
    const likedProductsContent = fs.readFileSync("./data/liked.json", "utf-8")
    const likedProducts = JSON.parse(likedProductsContent)
      .filter((x) => x.userName === username);

    products = products.map((product) => ({
      ...product,
      user_liked: likedProducts.findIndex((x) => x.productId === product.id) !== -1
    }));
  }

  res.json({
    total: totalProductCount,
    count: products.length,
    items: products
  });
});

// get product by id
app.get('/product/:id', (req, res) => {
  const productId = req.params.id;

  const fileContent = fs.readFileSync("./data/products.json", "utf-8")
  const json = JSON.parse(fileContent);

  const product = json.find((x) => String(x.id) === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({});
  }
});

// like/unlike a product
app.post('/product/like', (req, res) => {
  const userName = req.body.username;
  const productId = req.body.productId;
  const like = req.body.like;

  if (!userName) {
    res.json({ text: 'The user name field is empty!', success: false });
    return;
  }

  const userData = fs.readFileSync("./data/liked.json", "utf-8")
  const json = JSON.parse(userData)

  const index = json.findIndex((x) => x.userName === userName && x.productId === productId);

  if (like) {
    if (index === -1) {
      // add the product to liked
      json.push({ userName, productId });
    } else {
      res.json({ text: 'already liked' });
      return;
    }
  } else {
    // remove the product from liked
    json.splice(index, 1);
  }

  fs.writeFileSync("./data/liked.json", JSON.stringify(json, null, 2))

  res.sendStatus(200);
});

app.post('/product/liked', (req, res) => {
  const userName = req.body.username;

  if (!userName) {
    res.json({ text: 'The user name field is empty!', success: false });
    return;
  }

  // read all the liked products
  const fileContentLiked = fs.readFileSync("./data/liked.json", "utf-8")
  const likedProducts = JSON.parse(fileContentLiked)

  // read all the products
  const fileContentProducts = fs.readFileSync("./data/products.json", "utf-8")
  const products = JSON.parse(fileContentProducts);

  const liked = likedProducts
    .filter((x) => x.userName === userName)
    .map((x) => products.find((p) => p.id === x.productId))
    .filter((x) => !!x) // not null
    .map((x) => ({
      ...x,
      user_liked: true
    }));

  res.json(liked);
});

app.get("/", (_req, res) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
