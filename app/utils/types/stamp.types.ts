export type StampType = 'symbol' | 'alphanumeric' | 'uppercase' | 'uppercase,alphanumeric';

export interface Stamp {
  id: number;
  symbol: string;
  text: string;
  type: StampType;
  size_mm: number;
}
