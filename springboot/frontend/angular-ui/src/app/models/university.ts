import {book} from '../models/book';

export class university  {
  public id: number;
  public name: string;
  public email: string;
  public subject: string;
  public phone: number;
  public books: book[];

}
