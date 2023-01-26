export type ProductPrimitives = {
  id: number;
  name: string;
  image: string;
  price: number;
  currency: string;
  quantity: number;
};

export class Product {
  private readonly id: number;
  private readonly name: string;
  private readonly image: string;
  private readonly price: number;
  private readonly currency: string;
  private readonly quantity: number;

  constructor(
    id: number,
    name: string,
    image: string,
    price: number,
    currency: string,
    quantity: number,
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.currency = currency;
    this.quantity = quantity;
  }

  public toPrimitives(): ProductPrimitives {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
      price: this.price,
      currency: this.currency,
      quantity: this.quantity,
    } as ProductPrimitives;
  }

  public static fromPrimitives({
    id,
    name,
    image,
    price,
    currency,
    quantity,
  }: ProductPrimitives): Product {
    return new Product(id, name, image, price, currency, quantity);
  }
}
