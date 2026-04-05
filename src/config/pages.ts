import type { Page } from '@/types/content';

export type Subsection = {
  slug: string;
  name: string;
  description: string;
};

export type Section = {
  slug: string;
  name: string;
  description: string;
  subsections: Subsection[];
};

export const pages: Page[] = [
  {
    name: 'News',
    slug: 'news',
    description: 'News',
    title: 'Nouse | News',
    publication: 'nouse',
    type: 'section',
    colour: 'bg-blue-400',
    hover_colour: 'text-blue-300',
    text_colour: 'text-blue-400',
    border_colour: 'border-blue-400',
  },
  {
    name: 'Politics',
    slug: 'politics',
    description: 'Politics',
    title: 'Nouse | Politics',
    publication: 'nouse',
    type: 'section',
    colour: 'bg-red-500',
    hover_colour: 'text-red-300',
    text_colour: 'text-red-500',
    border_colour: 'border-red-500',
  },
  {
    name: 'Features',
    slug: 'features',
    description: 'Features',
    title: 'Muse | Features',
    publication: 'muse',
    type: 'section',
    colour: 'bg-yellow-500',
    hover_colour: 'text-yellow-300',
    text_colour: 'text-yellow-500',
    border_colour: 'border-yellow-500',
  },
  {
    name: 'Campus News',
    slug: 'campus-news',
    description: 'Campus News',
    title: 'Nouse | Campus News',
    publication: 'nouse',
    type: 'section',
    colour: 'bg-green-500',
    hover_colour: 'text-green-300',
    text_colour: 'text-green-500',
    border_colour: 'border-green-500',
    parent_slug: 'news',
  },
];

export const nouse_sections: Section[] = [
  {
    slug: 'news',
    name: 'News',
    description: 'Latest news from campus, city, and beyond.',
    subsections: [
      {
        slug: 'campus-news',
        name: 'Campus News',
        description: 'Updates and stories from university life.',
      },
      {
        slug: 'investigation',
        name: 'Investigation',
        description: 'In-depth reporting and investigative pieces.',
      },
      {
        slug: 'city-news',
        name: 'City News',
        description: 'Coverage of local events and issues.',
      },
    ],
  },
  {
    slug: 'politics',
    name: 'Politics',
    description: 'Political news, analysis, and opinion.',
    subsections: [
      {
        slug: 'campus-news',
        name: 'Campus News',
        description: 'Latest news on campus.',
      },
      {
        slug: 'investigation',
        name: 'Investigation',
        description: 'Investigative reporting on political issues.',
      },
      {
        slug: 'city-news',
        name: 'City News',
        description: 'Local political news and updates.',
      },
    ],
  },
  {
    slug: 'comment',
    name: 'Comment',
    description: 'Opinion pieces, editorials, and commentary.',
    subsections: [],
  },
  {
    slug: 'sport',
    name: 'Sport',
    description: 'Sports news, results, and analysis.',
    subsections: [],
  },
  {
    slug: 'science',
    name: 'Science',
    description: 'Scientific discoveries, research, and insights.',
    subsections: [],
  },
  {
    slug: 'business',
    name: 'Business',
    description: 'Business news, markets, and economic trends.',
    subsections: [],
  },
];

export const muse_sections: Section[] = [
  {
    slug: 'features',
    name: 'Features',
    description: 'Long-form features, interviews, and in-depth storytelling.',
    subsections: [
      {
        slug: 'interviews',
        name: 'Interviews',
        description:
          'Conversations with creatives, artists, and notable voices.',
      },
    ],
  },
  {
    slug: 'arts',
    name: 'Arts',
    description: 'Coverage of visual arts, theatre, and cultural expression.',
    subsections: [],
  },
  {
    slug: 'music',
    name: 'Music',
    description: 'Music reviews, releases, and artist features.',
    subsections: [],
  },
  {
    slug: 'film',
    name: 'Film & TV',
    description: 'Film and television reviews, analysis, and features.',
    subsections: [],
  },
  {
    slug: 'fashion',
    name: 'Fashion',
    description: 'Style, trends, and commentary on the fashion world.',
    subsections: [],
  },
  {
    slug: 'food-drink',
    name: 'Food & Drink',
    description: 'Exploring food culture, dining, and drink.',
    subsections: [],
  },
  {
    slug: 'shoot',
    name: 'Shoot',
    description: 'Photography, visual stories, and creative shoots.',
    subsections: [],
  },
  {
    slug: 'gaming',
    name: 'Gaming',
    description: 'Gaming news, reviews, and culture.',
    subsections: [],
  },
  {
    slug: 'creative-writing',
    name: 'Creative Writing',
    description: 'Original writing, fiction, and creative pieces.',
    subsections: [],
  },
];
