import { Metal, Shape } from '@/utils/types/bracelet.types';

export interface Blank {
  id: number;
  width: number;
  length: number;
  shape: Shape;
  metal: Metal;
  cost: number;
  sell_price: number | null;
  available: boolean;
}

export const blanks: Blank[] = [
  { id: 1,  width: 0.125, length: 6.0, shape: Shape.straight, metal: Metal.aluminum, cost: 1.00, sell_price: null, available: false },
  { id: 2,  width: 0.125, length: 6.0, shape: Shape.straight, metal: Metal.brass,    cost: 2.40, sell_price: null, available: false },
  { id: 3,  width: 0.125, length: 6.0, shape: Shape.straight, metal: Metal.copper,   cost: 2.40, sell_price: null, available: false },
  { id: 4,  width: 0.250, length: 6.0, shape: Shape.straight, metal: Metal.aluminum, cost: 0.83, sell_price: null, available: true  },
  { id: 5,  width: 0.250, length: 6.0, shape: Shape.straight, metal: Metal.brass,    cost: 2.40, sell_price: null, available: true  },
  { id: 6,  width: 0.250, length: 6.0, shape: Shape.straight, metal: Metal.copper,   cost: 2.40, sell_price: null, available: true  },
  { id: 7,  width: 0.375, length: 6.0, shape: Shape.straight, metal: Metal.aluminum, cost: 1.00, sell_price: null, available: true  },
  { id: 8,  width: 0.375, length: 6.0, shape: Shape.straight, metal: Metal.brass,    cost: 3.00, sell_price: null, available: true  },
  { id: 9,  width: 0.375, length: 6.0, shape: Shape.straight, metal: Metal.copper,   cost: 3.00, sell_price: null, available: true  },
  { id: 10, width: 0.625, length: 6.0, shape: Shape.straight, metal: Metal.aluminum, cost: 1.43, sell_price: null, available: true  },
  { id: 11, width: 0.625, length: 6.0, shape: Shape.straight, metal: Metal.brass,    cost: 4.00, sell_price: null, available: true  },
  { id: 12, width: 0.625, length: 6.0, shape: Shape.straight, metal: Metal.copper,   cost: 4.00, sell_price: null, available: true  },
  { id: 13, width: 0.625, length: 6.0, shape: Shape.tapered,  metal: Metal.aluminum, cost: 1.43, sell_price: null, available: true  },
  { id: 14, width: 0.625, length: 6.0, shape: Shape.tapered,  metal: Metal.brass,    cost: 4.00, sell_price: null, available: true  },
  { id: 15, width: 0.625, length: 6.0, shape: Shape.tapered,  metal: Metal.copper,   cost: 4.00, sell_price: null, available: true  },
  { id: 16, width: 0.875, length: 6.0, shape: Shape.tapered,  metal: Metal.aluminum, cost: 2.00, sell_price: null, available: false },
  { id: 17, width: 0.875, length: 6.0, shape: Shape.tapered,  metal: Metal.copper,   cost: 8.00, sell_price: null, available: false },
  { id: 18, width: 1.000, length: 6.0, shape: Shape.straight, metal: Metal.aluminum, cost: 2.00, sell_price: null, available: false },
  { id: 19, width: 1.500, length: 6.0, shape: Shape.straight, metal: Metal.aluminum, cost: 2.50, sell_price: null, available: false },
];
