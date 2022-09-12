export interface Destination {
  id: string;
  destination: string;
  image: string;
  latitude: number;
  longitude: number;
  category: string;
  firstPlan: string;
  descriptionFirstPlan: string;
  secondPlan?: string;
  descriptionSecondPlan?: string;
  thirdPlan?: string;
  descriptionThirdPlan?: string;
}

export type Destinations = Destination[];

export interface DestinationSimple {
  destination: string;
  image: string;
  id: string;
}

export interface ProtoDestination {
  destination: string;
  image: string;
  latitude: number;
  longitude: number;
  category: string;
  firstPlan: string;
  descriptionFirstPlan: string;
  secondPlan?: string;
  descriptionSecondPlan?: string;
  thirdPlan?: string;
  descriptionThirdPlan?: string;
}
