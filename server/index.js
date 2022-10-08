const express = require('express')
const fs = require('fs')
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json());
const port = 3001

app.get('/', (req, res) => {
  const data = fs.readFileSync("./data.json", "utf-8")
  res.send(data)
})

// LogIn
app.post("/user/login", (req, res) => {
  const userName = req.body.username
  const userPassword = req.body.password

  if (!userName || !userPassword) {
    res.send({ text: "The field is empty", success: false })
    return
  }

  const userData = fs.readFileSync("./userData.json", "utf-8")
  const json = JSON.parse(userData)

  const user = json.find((x) => x.name === userName && x.password === userPassword)
  if (user) {
    res.json({ text: "Loged in!", success: true })
  }
  else {
    res.json({ text: "Failed to log in!", success: false })
  }
})

// Register
app.post("/user/register", (req, res) => {
  const userName = req.body.username
  const userEmail = req.body.email
  const userPassword = req.body.password

  if (!userName) {
    res.json({ text: "The user name field is empty!", success: false })
    return
  }

  if (!userEmail) {
    res.json({ text: "Th user email field is empty!", success: false })
    return
  }

  if (!userPassword) {
    res.json({ text: "The user password field is empty!", success: false })
    return
  }

  const userData = fs.readFileSync("./userData.json", "utf-8")
  const json = JSON.parse(userData)

  const user = json.find((x) => x.name === userName)
  if (user) {
    res.json({ text: "This username is already taken", success: false })
    return
  }

  json.push({ name: userName, password: userPassword, email: userEmail })
  fs.writeFileSync("./userData.json", JSON.stringify(json, null, 2))
  res.json({ text: "Saved data", success: true })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})