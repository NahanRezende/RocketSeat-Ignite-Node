import Specification from '../../infra/Entities/Specification';
import SpecificationRepository from '../../infra/repositories/implementations/SpecificaitonsRepository';

export default class LisSpecificationService {
  constructor(private specificationsRepository: SpecificationRepository) {}

  execute(): Specification[] {
    const specification = this.specificationsRepository.list();

    return specification;
  }
}
