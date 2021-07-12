import Category from '../Entities/Category';
import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO';

export default interface ICategoriesRepository {
  create(category: ICreateCategoryDTO): Category;
  list(): Category[];
  findByName(name: string): Category | undefined;
}
