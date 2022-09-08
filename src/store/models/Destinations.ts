export interface Destination {
  destination: string;
  image: string;
  latitude: number;
  longitud: number;
  cateogry: string;
  firstPlan: string;
  descriptionFirstPlan: string;
  secondPlan?: string;
  descriptionSecondPlan?: string;
  thirdPlan?: string;
  descripctionThirdPlan?: string;
  id: string;
}

export type Destinations = Destination[];

export interface DestinationSimple {
  destination: string;
  image: string;
  id: string;
}
