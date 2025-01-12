export interface ImageData {
  id: string;
  url: string;
  category: string;
  title: string;
  description?: string;
}

export type Category =
  | "portraits"
  | "weddings"
  | "fashion"
  | "commercial"
  | "published";
