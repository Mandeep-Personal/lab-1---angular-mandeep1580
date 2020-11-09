export class Product {

    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public price: number;

constructor(id: number, name: string, description: string, image: string,price: number){
    this.id= id;
    this.name = name;
    this.description = description;
    this.imagePath = image;
    this.price = price;
}

}