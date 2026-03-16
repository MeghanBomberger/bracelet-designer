export enum Metal {
  aluminum = 'aluminum',
  brass = 'brass',
  copper = 'copper',
  silver = 'silver',
}

export enum Shape {
  straight = 'straight',
  tapered = 'tapered',
}

export interface Bracelet {
  width: number;
  metal: Metal;
  shape: Shape;
}

export const defaultBracelet: Bracelet = {
  width: 0.25, //TODO update with actual default width
  metal: Metal.aluminum,
  shape: Shape.straight,
}
