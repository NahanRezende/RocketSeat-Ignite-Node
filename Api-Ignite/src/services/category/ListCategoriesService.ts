import Category from '../../infra/Entities/Category';
import CategoriesRepository from '../../infra/repositories/implementations/CategoriesRepository';

export default class ListCategoriesService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}
