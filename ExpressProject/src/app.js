const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.port || 7000;


const static_path = path.join(__dirname , '../public');
const template_path = path.join(__dirname , '../templates/views');
const partials_path = path.join(__dirname , '../templates/partials');

console.log(static_path)
console.log(template_path)
console.log(partials_path)

app.set('view engine', '.hbs');
app.set('views', template_path);

hbs.registerPartials(partials_path);


app.use(express.static(static_path));
 //routing
app.get('', (req, res) => {
   res.render('index')
}
);
app.get('/about', (req, res) => {
    res.render('about')
    
}
);
app.get('/weather', (req, res) => {
    res.render('weather');
}
);
app.get('*', (req, res) => {
    res.render('404error', {
        title: '404',
        message: 'Page not found'   
        });
}
);
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
}
);

