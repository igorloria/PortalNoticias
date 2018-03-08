var app = require('./config/server');

//importa o js da home que contem a rota do html e ja executa (app)
var rotaHome = require('./app/routes/home')(app);

//importa o js da home que contem a rota do html e ja executa (app)
var rotaForm = require('./app/routes/formulario_inclusao_noticia')(app);

//importa o js da home que contem a rota do html e ja executa (app)
var rotaNoticias = require('./app/routes/noticias')(app);

//habilita o servidor para executar na porta 3000
app.listen(3000, function() {
    console.log('Server UP');
});