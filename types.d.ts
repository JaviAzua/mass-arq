export interface ObrasType {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  description: text;
  image: SanityImageSource[];
  name: string;
  slug: Slug;
  fecha: Date;
}
