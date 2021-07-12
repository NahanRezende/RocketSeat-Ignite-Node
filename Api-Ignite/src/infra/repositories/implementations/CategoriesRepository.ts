import { ICreateCategoryDTO } from '../../../dtos/ICreateCategoryDTO';
import Category from '../../Entities/Category';
import ICategoriesRepository from '../ICategoriesRepository';

export default class CategoriesRepository implements ICategoriesRepository {
  private categoriesRepository: Category[];

  constructor() {
    this.categoriesRepository = [];
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const category = new Category();
    Object.assign(category, { name, description });

    this.categoriesRepository.push(category);

    return category;
  }

  findByName(name: string): Category | undefined {
    const category = this.categoriesRepository.find(
      // eslint-disable-next-line no-shadow
      category => category.name === name,
    );

    return category;
  }

  list(): Category[] {
    return this.categoriesRepository;
  }
}
