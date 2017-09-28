import * as express from 'express';
import { Application } from 'express';
import { loginRoute } from "./loginRoute";
import { newsletterRoute } from "./newsletterRoute";
declare var require: any; 

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/newsletter').post(newsletterRoute);
app.route('/api/login').post(loginRoute);

app.listen(8091, () => {
  console.log('Server running at port 8091');
});