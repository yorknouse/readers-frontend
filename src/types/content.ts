export type Publication = 'nouse' | 'muse';
export type PageType = 'section' | 'article' | 'info';

export type Page = {
  name: string;
  slug: string;
  description: string;
  title: string;
  publication: Publication;
  type: PageType;
  colour?: string;
  hover_colour?: string;
  text_colour?: string;
  border_colour?: string;
  og_image?: string;
  parent_slug?: string;
};

export type Author = {
  name: string;
  role: string;
  slug: number;
};

export type Article = {};

export type Edition = {};
