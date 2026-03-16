import { Metal } from "./types/bracelet.types";

export const colors = {
  stamp: '#231f20',
  black1: 'rgba(0, 0, 0, 0.1)',
  black15: 'rgba(0, 0, 0, 0.15)',
  black25: 'rgba(0, 0, 0, 0.25)',
  black5: 'rgba(0, 0, 0, 0.5)',
  black: 'rgba(0, 0, 0, 1)',
  white15: 'rgba(255, 255, 255, 0.1)',
  white2: 'rgba(255, 255, 255, 0.15)',
  white4: 'rgba(255, 255, 255, 0.25)',
  white5: 'rgba(255, 255, 255, 0.5)',
  white65: 'rgba(255, 255, 255, 0.65)',
  white: 'rgba(255, 255, 255, 1)',
  red: 'rgba(255, 50, 50, 0.5)',
}

export const getOverlayColor = (metal: Metal): string => {
  switch (metal) {
    case Metal.copper: return 'rgba(200, 115, 50, 0.5)';
    case Metal.silver: return 'rgba(195, 195, 245, 0.4)';
    case Metal.brass: return 'rgba(220, 180, 55, 0.5)';
    default: return 'rgba(0, 0, 0, 0)';
  }
};
