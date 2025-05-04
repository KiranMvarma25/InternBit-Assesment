const express = require('express');
const morgan = require('morgan');
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middleware/errorHandler');
const app = express();

let port = 3636

app.listen(port, () => {
    console.log("Server is ON", `${port}`);
})


app.use(express.json());
app.use(morgan('dev'));
app.use('/posts', postRoutes);
app.use(errorHandler);