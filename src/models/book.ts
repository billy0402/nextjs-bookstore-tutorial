import { Type } from '@/models/type';

export type Book = {
  /** ID */
  id: number;
  /** 標題 */
  title: string;
  /** 類型 */
  type: Type;
  /** 簡介 */
  introduction: string;
  /** 價格 */
  price: number;
  /** 出版日期 */
  publishDate: Date;
};
