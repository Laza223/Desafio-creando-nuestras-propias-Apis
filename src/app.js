const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//Ejecuto el llamado a mis rutas
const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');

//Aquí van las rutas de las APIs

const moviesRoutesApi = require('./routes/api/movies.routes.api');
const genresRoutesApi = require('./routes/api/genres.routes.api');

//Aquí pueden colocar las rutas de las APIs

app.use('/api/movies', moviesRoutesApi);
app.use('/api/genres', genresRoutesApi);

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));


app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);


//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
