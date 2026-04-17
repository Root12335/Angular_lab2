export interface ICourse {
  id: string | number;
  title: string;
  instructor: string;
  price: number;
  seats: number;
  image?: string;
  Image?: string;
  catId: string | number;
  category: string;
}
