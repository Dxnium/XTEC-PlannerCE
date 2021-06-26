'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');
const estudianteRoutes = require('./routes/estudianteRoutes');
const profesorRoutes = require('./routes/profesorRoutes');
const administradorRoutes = require('./routes/administradorRoutes');
const tableroRoutes = require('./routes/tableroRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', eventRoutes.routes);
app.use('/api', estudianteRoutes.routes);
app.use('/api', profesorRoutes.routes);
app.use('/api', administradorRoutes.routes);
app.use('/api', tableroRoutes.routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.set('port', process.env.PORT || 8080)



app.listen(app.get('port'), () => {
  console.log('app listening on url http://localhost:' + app.get('port'))
});