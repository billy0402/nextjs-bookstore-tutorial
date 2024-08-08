import { fakeTypes } from '@/fixtures/type';
import type { Book } from '@/models/book';

export const fakeBooks: Book[] = [
  {
    id: 1,
    title: '月亮與六便士',
    type: fakeTypes[1],
    introduction:
      '這是威廉·薩默塞特·毛姆的一部經典小說，講述了一位畫家從舒適的生活中逃脫，追尋他對藝術的夢想。',
    price: 300,
    publishDate: new Date('1919-10-01'),
  },
  {
    id: 2,
    title: '百年孤寂',
    type: fakeTypes[1],
    introduction:
      '加布里埃爾·加西亞·馬爾克斯的經典之作，這部小說描述了一個家族在拉丁美洲虛構小鎮的百年歷史。',
    price: 350,
    publishDate: new Date('1967-05-30'),
  },
  {
    id: 3,
    title: '愛在瘟疫蔓延時',
    type: fakeTypes[0],
    introduction:
      '這部小說同樣由加布里埃爾·加西亞·馬爾克斯撰寫，描述了在瘟疫肆虐的背景下，兩位戀人如何面對困境與分離。',
    price: 400,
    publishDate: new Date('1985-09-25'),
  },
  {
    id: 4,
    title: '挪威的森林',
    type: fakeTypes[2],
    introduction:
      '村上春樹的名作，講述了一個年輕人的成長故事，涉及愛情、死亡以及生命的意義。',
    price: 280,
    publishDate: new Date('1987-09-04'),
  },
  {
    id: 5,
    title: '1Q84',
    type: fakeTypes[2],
    introduction:
      '村上春樹的另一部重要作品，這是一部充滿奇幻與現實交織的小說，講述了一個平行世界的故事。',
    price: 450,
    publishDate: new Date('2009-05-29'),
  },
];
