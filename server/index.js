const express = require("express");
const app = express();
const path = require("path");
const PORT =3000;
const ViteExpress = require("vite-express");

// uncomment when ready to deploy
// ViteExpress.config({ mode: "production" })

const cors = require('cors');
app.use(cors());

app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api", require('./api'))
app.use("/auth", require("./auth"))


const server = app.listen(PORT, ()=>{
    console.log('On port'+PORT)
})

ViteExpress.bind(app, server)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
});
