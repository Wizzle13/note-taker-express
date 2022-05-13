const express = require('express');
const PORT = process.env.PORT || 3002; //sets the port for the site to 3002 unless defined by host
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// routes
app.use('/api/notes', apiRoutes);
app.use('/notes', htmlRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on prot ${PORT}`);
});

