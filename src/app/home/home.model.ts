export class User{
    id: string;
    gameName: string;
    genre: string;
    price: number;
    quantity: number;
    dateRelease: Date;
    rating: number[] = [];
    isAvailable: boolean;

    constructor(id: string = '', gameName: string = '', genre: string = '', price: number = 0, rating: number[] = [], quantity:number = 0, 
    isAvailable: boolean = false, dateRelease: Date = new Date()) {
      this.id = id;
      this.gameName = gameName;
      this.genre = genre;
      this.price = price;
      this.quantity = quantity
      this.dateRelease = dateRelease;
      this.rating = rating;
      this.isAvailable = isAvailable;
    }
}

export interface iUser{
    id: string;
    gameName: string;
    genre: string;
    price: number;
    quantity: number;
    dateRelease: Date;
    rating: number[];
    isAvailable: boolean;
}