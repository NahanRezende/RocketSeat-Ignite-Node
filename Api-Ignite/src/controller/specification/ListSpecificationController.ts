import { Request, Response } from 'express';
import ListSpecificationService from '../../services/specification/ListSpecificationService';

export default class LisSpecificationController {
  constructor(private listSpecificationService: ListSpecificationService) {}

  handle(request: Request, response: Response): Response {
    const specificaiton = this.listSpecificationService.execute();

    return response.json(specificaiton);
  }
}
