export interface NavItem {
  label: string;
  id: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  size: string;
  amenities: string[];
}

export interface DiningVenue {
  name: string;
  tagline: string;
  description: string;
  image: string;
  type: 'Rooftop' | 'Fine Dining' | 'Casual' | 'Bar';
}

export interface Offer {
  title: string;
  description: string;
  validity: string;
  code: string;
}
