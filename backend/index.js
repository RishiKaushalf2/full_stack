const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
require("dotenv").config()
const authRoutes = require("./routers/authRoutes")
const productRoutes = require("./routers/productRoutes")
const cartRoutes = require("./routers/cartRoutes")
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("DB connected")
    })
    .catch((err) => {
        console.log(err)
    })

app.get("/", (req, res) => {
    res.json({ message: "server is running" })
})
app.use("/api/auth", authRoutes)
app.use("/api/product", productRoutes)
app.use("/api/cart", cartRoutes)

app.listen(PORT, () => console.log(`server runs on port ${PORT}`))