import { ICreateSpecificationDTO } from '../../../dtos/ICreateSpecificationDTO';
import Specification from '../../Entities/Specification';
import { ISpecificationsRepository } from '../ISpecificationsRepository';

export default class SpecificationRepository
  implements ISpecificationsRepository {
  private specificationsRepository: Specification[];

  constructor() {
    this.specificationsRepository = [];
  }

  list(): Specification[] {
    return this.specificationsRepository;
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specificationsRepository.find(
      // eslint-disable-next-line no-shadow
      specification => specification.name === name,
    );

    return specification;
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();
    Object.assign(specification, { name, description });

    this.specificationsRepository.push(specification);

    return specification;
  }
}
