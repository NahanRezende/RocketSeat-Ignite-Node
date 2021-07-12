import { Request, Response } from 'express';
import ListCategoriesService from '../../services/category/ListCategoriesService';

export default class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesService) {}

  handle(request: Request, response: Response): Response {
    const categories = this.listCategoriesService.execute();
    return response.json(categories);
  }
}
