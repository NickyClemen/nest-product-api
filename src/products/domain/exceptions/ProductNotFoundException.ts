import { BaseException } from './BaseException';

export class ProductNotFoundException extends BaseException {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, ProductNotFoundException.prototype);
  }
}
