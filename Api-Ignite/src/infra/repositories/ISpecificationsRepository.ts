import { ICreateSpecificationDTO } from '../../dtos/ICreateSpecificationDTO';
import Specification from '../Entities/Specification';

export interface ISpecificationsRepository {
  create(specification: ICreateSpecificationDTO): Specification;
  list(): Specification[];
}
