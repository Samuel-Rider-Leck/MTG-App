export class MTGCardResponse {
  cards: MTGCard[];
}

export class MTGCard {
  name: string;
  names: string[];
  manacost: string;
  cmc: number;
  colors: string[];
  colorIdentity: string[];
  type: string;
  supertypes: string[];
  types: string[];
  subtypes: string[];
  rarity: string;
  set: string;
  setName: string;
  text: string;
  flavor: string;
  artist: string;
  number: string;
  power: string;
  toughness: string;
  layout: string;
  multiverseid: number;
  imageUrl: string;
  printings: string[];
  foreignNames: ForeignMTGCard[];
}

export class ForeignMTGCard {
  name: string;
  text: string;
  flavor: string;
  imageUrl: string;
  language: string;
  multiverseid: number;
}