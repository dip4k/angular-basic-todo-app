export class User {
  id: number;
  name: string;
  accessToken: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
