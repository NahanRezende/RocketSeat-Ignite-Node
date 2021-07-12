/* eslint-disable prettier/prettier */
import CategoriesRepository from '../../infra/repositories/implementations/CategoriesRepository';
import CreateCategoryService from '../../services/category/CreateCategoryService';
import ImportCategoryService from '../../services/category/ImportCategoryService';
import ListCategoriesService from '../../services/category/ListCategoriesService';
import CreateCategoryController from './CreateCategoryController';
import ImportCategoryController from './ImportCategoryController';
import ListCategoriesController from './ListCategoriesController';

const categoriesRepository = new CategoriesRepository();

const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryService);

const listCategoriesService = new ListCategoriesService(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesService);

const importCategoryService = new ImportCategoryService(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryService);

export { createCategoryController, listCategoriesController, importCategoryController };
