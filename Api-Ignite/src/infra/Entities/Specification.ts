import { v4 as uuid } from 'uuid';

export default class Specification {
  id: string;

  name: string;

  description: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
