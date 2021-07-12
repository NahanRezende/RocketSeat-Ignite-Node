import { Router } from 'express';
import {
  createSpecificationController,
  listSpecificationController,
} from '../../../controller/specification/SpecificationController';

const specificationsRouter = Router();

specificationsRouter.post('/', (request, response) => {
  createSpecificationController.handle(request, response);
});

specificationsRouter.get('/', (request, response) => {
  listSpecificationController.handle(request, response);
});

// eslint-disable-next-line import/prefer-default-export
export { specificationsRouter };
