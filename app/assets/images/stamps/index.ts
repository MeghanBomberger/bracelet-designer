import { LollipopAmpersand } from './lollipop-&';
import { LollipopA } from './lollipop-a';
import { LollipopB } from './lollipop-b';
import { LollipopC } from './lollipop-c';
import { LollipopD } from './lollipop-d';
import { LollipopE } from './lollipop-e';
import { LollipopF } from './lollipop-f';
import { LollipopG } from './lollipop-g';
import { LollipopH } from './lollipop-h';
import { LollipopI } from './lollipop-i';
import { LollipopJ } from './lollipop-j';
import { LollipopK } from './lollipop-k';
import { LollipopL } from './lollipop-l';
import { LollipopM } from './lollipop-m';
import { LollipopN } from './lollipop-n';
import { LollipopO } from './lollipop-o';
import { LollipopP } from './lollipop-p';
import { LollipopQ } from './lollipop-q';
import { LollipopR } from './lollipop-r';
import { LollipopS } from './lollipop-s';
import { LollipopT } from './lollipop-t';
import { LollipopU } from './lollipop-u';
import { LollipopV } from './lollipop-v';
import { LollipopW } from './lollipop-w';
import { LollipopX } from './lollipop-x';
import { LollipopY } from './lollipop-y';
import { LollipopZ } from './lollipop-z';
import { Bee } from './symbols/bee';
import { BirdLeft } from './symbols/bird-left';
import { BirdRight } from './symbols/bird-right';
import { Caduseus } from './symbols/caduseus';
import { DoodleHeart } from './symbols/doodle-heart';
import { Dragon } from './symbols/dragon';
import { Flame } from './symbols/flame';
import { Flower } from './symbols/flower';
import { Fox } from './symbols/fox';
import { HeartSemicolon } from './symbols/heart-semicolon';
import { LittleHeart } from './symbols/little-heart';
import { Lotus } from './symbols/lotus';
import { Mermaid } from './symbols/mermaid';
import { Mermaid2 } from './symbols/mermaid2';
import { Moon } from './symbols/moon';
import { Mountain } from './symbols/mountain';
import { Peace } from './symbols/peace';
import { Smiley } from './symbols/smiley';
import { Star } from './symbols/star';
import { Swirl } from './symbols/swirl';
import { Tea } from './symbols/tea';
import { Unicorn } from './symbols/unicorn';
import { VineSwirlLeft } from './symbols/vine-swirl-left';
import { VineSwirlRight } from './symbols/vine-swirl-right';

import { SVGProps } from '../svg.type';
import { ReactElement } from 'react';

export type StampComponent = (props: SVGProps) => ReactElement;

export const stampComponents: Record<string, StampComponent> = {
  'lollipop-&.svg': LollipopAmpersand,
  'lollipop-a.svg': LollipopA,
  'lollipop-b.svg': LollipopB,
  'lollipop-c.svg': LollipopC,
  'lollipop-d.svg': LollipopD,
  'lollipop-e.svg': LollipopE,
  'lollipop-f.svg': LollipopF,
  'lollipop-g.svg': LollipopG,
  'lollipop-h.svg': LollipopH,
  'lollipop-i.svg': LollipopI,
  'lollipop-j.svg': LollipopJ,
  'lollipop-k.svg': LollipopK,
  'lollipop-l.svg': LollipopL,
  'lollipop-m.svg': LollipopM,
  'lollipop-n.svg': LollipopN,
  'lollipop-o.svg': LollipopO,
  'lollipop-p.svg': LollipopP,
  'lollipop-q.svg': LollipopQ,
  'lollipop-r.svg': LollipopR,
  'lollipop-s.svg': LollipopS,
  'lollipop-t.svg': LollipopT,
  'lollipop-u.svg': LollipopU,
  'lollipop-v.svg': LollipopV,
  'lollipop-w.svg': LollipopW,
  'lollipop-x.svg': LollipopX,
  'lollipop-y.svg': LollipopY,
  'lollipop-z.svg': LollipopZ,
  'bee.svg': Bee,
  'bird-left.svg': BirdLeft,
  'bird-right.svg': BirdRight,
  'caduseus.svg': Caduseus,
  'doodle-heart.svg': DoodleHeart,
  'dragon.svg': Dragon,
  'flame.svg': Flame,
  'flower.svg': Flower,
  'fox.svg': Fox,
  'heart-semicolon.svg': HeartSemicolon,
  'little-heart.svg': LittleHeart,
  'lotus.svg': Lotus,
  'mermaid.svg': Mermaid,
  'mermaid2.svg': Mermaid2,
  'moon.svg': Moon,
  'mountain.svg': Mountain,
  'peace.svg': Peace,
  'smiley.svg': Smiley,
  'star.svg': Star,
  'swirl.svg': Swirl,
  'tea.svg': Tea,
  'unicorn.svg': Unicorn,
  'vine-swirl-left.svg': VineSwirlLeft,
  'vine-swirl-right.svg': VineSwirlRight,
};
