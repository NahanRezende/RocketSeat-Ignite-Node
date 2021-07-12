import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO';
import Category from '../../infra/Entities/Category';
import CategoriesRepository from '../../infra/repositories/implementations/CategoriesRepository';

export default class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: ICreateCategoryDTO): Category {
    const verifyIfExists = this.categoriesRepository.findByName(name);

    if (verifyIfExists) {
      throw new Error('Category already exists');
    }

    const category = this.categoriesRepository.create({ name, description });

    return category;
  }
}
