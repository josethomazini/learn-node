const express = require('express');
const ip = require('ip');
const swaggerMiddlewareInjection = require('./configs/swagger');
const cors = require('cors');

const app = express();
const routes = require('./routes');

const PORT = 8080;

app.use(cors());
app.use(express.json());
swaggerMiddlewareInjection(app);

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on http://${ip.address()}:${PORT}`);
});
