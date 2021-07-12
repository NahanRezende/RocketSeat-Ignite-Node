import fs from 'fs';
import csvParse from 'csv-parse';
import ICategoriesRepository from '../../infra/repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

export default class ImportCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];
      const stream = fs.createReadStream(file.path);
      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async line => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', err => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    // eslint-disable-next-line prettier/prettier
    categories.map(async (category) => {
      const { name, description } = category;

      const verifyIfExists = this.categoriesRepository.findByName(name);

      if (!verifyIfExists) {
        this.categoriesRepository.create({ name, description });
      }
    });
  }
}
