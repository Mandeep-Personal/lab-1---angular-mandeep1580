export class Product {

    public id: number;
    public name: string;
    public imagePath: string;
    public price: number;

constructor(id: number, name: string, image: string,price: number){
    this.id= id;
    this.name = name;
    this.imagePath = image;
    this.price = price;
}

}