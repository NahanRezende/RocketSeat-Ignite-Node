import { Request, Response } from 'express';
import CreateSpecificationService from '../../services/specification/CreateSpecificationService';

export default class CreateSpecificationController {
  constructor(private createSpecificationService: CreateSpecificationService) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const specificaiton = this.createSpecificationService.execute({
      name,
      description,
    });

    return response.json(specificaiton);
  }
}
