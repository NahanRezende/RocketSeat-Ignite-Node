import { Router } from 'express';
import multer from 'multer';
import {
  createCategoryController,
  importCategoryController,
  listCategoriesController,
} from '../../../controller/category/CategoryController';

const categoriesRouter = Router();

const upload = multer({
  dest: './temp',
});

categoriesRouter.post('/', (request, response) => {
  createCategoryController.handle(request, response);
});

categoriesRouter.get('/', (request, response) => {
  listCategoriesController.handle(request, response);
});

categoriesRouter.post('/import', upload.single('file'), (request, response) => {
  importCategoryController.handle(request, response);
});
// eslint-disable-next-line import/prefer-default-export
export { categoriesRouter };
