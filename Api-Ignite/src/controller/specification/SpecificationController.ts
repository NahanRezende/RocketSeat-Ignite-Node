import SpecificationRepository from '../../infra/repositories/implementations/SpecificaitonsRepository';
import CreateSpecificationService from '../../services/specification/CreateSpecificationService';
import ListSpecificationService from '../../services/specification/ListSpecificationService';
import CreateSpecificationController from './CreateSpecificatonController';
import LisSpecificationController from './ListSpecificationController';

const specificationRepository = new SpecificationRepository();

const createSpecificationService = new CreateSpecificationService(
  specificationRepository,
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationService,
);

const listSpecificationService = new ListSpecificationService(
  specificationRepository,
);
const listSpecificationController = new LisSpecificationController(
  listSpecificationService,
);

// eslint-disable-next-line import/prefer-default-export
export { createSpecificationController, listSpecificationController };
