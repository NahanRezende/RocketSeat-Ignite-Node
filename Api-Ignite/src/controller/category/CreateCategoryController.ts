import { Request, Response } from 'express';
import CreateCategoryService from '../../services/category/CreateCategoryService';

export default class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const category = this.createCategoryService.execute({ name, description });

    return response.json(category).status(201).send();
  }
}
