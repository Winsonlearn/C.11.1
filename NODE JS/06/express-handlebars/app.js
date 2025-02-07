const express = require('express');
const handlebars = require ('express-handlebars');

const app = express();
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        message: 'Welcome to my website',
    });
});

app.get('/blog', (req, res) => {
    const blogs = [
        {title: "aaaa", snippet: "bbbb"},
        {title: "aaaa", snippet: "bbbb"},
        {title: "aaaa", snippet: "bbbb"},
    ];

    res.render('blog', {
        blogs: blogs
})});

app.get('/contact', (req, res) => {
    res.render('contact',{
        message: "k",
        title: 'contact',
        num1: 2,
        num2: 3,
        
});
});

app.use((req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http:/127.0.0.1:${PORT}`);
});