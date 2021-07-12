import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { categoriesRouter } from './infra/http/routes/categories.routes';
import { specificationsRouter } from './infra/http/routes/specification.routes';

import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/specifications', specificationsRouter);
app.use('/categories', categoriesRouter);

app.listen(3333, () => console.log('server is running !'));
