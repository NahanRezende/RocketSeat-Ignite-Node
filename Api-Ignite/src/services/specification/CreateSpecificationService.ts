import { ICreateSpecificationDTO } from '../../dtos/ICreateSpecificationDTO';
import Specification from '../../infra/Entities/Specification';
import SpecificationRepository from '../../infra/repositories/implementations/SpecificaitonsRepository';

export default class CreateSpecificationService {
  constructor(private specificationsRepository: SpecificationRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): Specification {
    const verifyIfExists = this.specificationsRepository.findByName(name);

    if (verifyIfExists) {
      throw new Error('Specification already exists');
    }

    const specification = this.specificationsRepository.create({
      name,
      description,
    });

    return specification;
  }
}
