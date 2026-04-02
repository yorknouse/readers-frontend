type Subsection = {
  slug: string;
  name: string;
};

type Section = {
  slug: string;
  name: string;
  subsections: Subsection[];
};

export const nouse_sections : Section[] = [{
    slug:"news",
    name:"News",
    subsections: [{slug:"campus-news",name:"Campus News"},
        {slug:"investigation",name:"Investigation"},
        {slug:"city-news",name:"City News"}
    ]
},
{
    slug:"politics",
    name:"Politics",
    subsections: [{slug:"campus-news",name:"Campus News"},
        {slug:"investigation",name:"Investigation"},
        {slug:"city-news",name:"City News"}
    ]
}];


//export const muse_sections : Section[] = [{slug:"sport"}]