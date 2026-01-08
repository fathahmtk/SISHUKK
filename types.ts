
export interface ProjectSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  backgroundImage: string;
  highlights?: { label: string; value: string }[];
  investorNote?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Interface representing a hotel room or suite configuration
 * Used in the Rooms component for display and booking logic.
 */
export interface Room {
  id: string;
  name: string;
  description: string;
  price: string;
  size: string;
  image: string;
  amenities: string[];
}
