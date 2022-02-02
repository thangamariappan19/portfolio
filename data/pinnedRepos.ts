export const pinnedRepos: pinnedRepoType[] = [
  // {
  //   image:
  //     'https://user-images.githubusercontent.com/47287285/119244610-38467080-bb6a-11eb-8c0e-2e241a31dac8.png',
  //   name: 'WormTracker',
  //   stack: ['React', 'Semantic-UI'],
  //   id: 'WormTracker',
  //   longDescription:
  //     'A quick tool I whipped up to help count worm tracks in grids on pictures of agar plates. Pretty weird, and super scuffed, but it worked well for the short time it was used.',
  // },
  // {
  //   id: `mikebot`,
  //   name: `MikeBot`,
  //   stack: ['Discord.JS', 'Node'],
  //   longDescription: `I wanted to learn how to use JavaScript and this project helped me dive into it. MikeBot utilised the discord API via discord.js to perform a variety of tasks from moderation, games, and general fun. I spent ages over quarantine on this project, and is where I started learning JS.`,
  // },

  {
    id: `michael-hall.me`,
    stack: ['Next.JS', 'Chakra-UI', 'MDX'],
    name: `My Portfolio`,
    deployedLink: '',
    image:
      '/static/images/blog/scuffedmdb-progress/portfolio.png',
    longDescription: `I was looking through Lee Rob's and Daniel Wirtz's websites one afternoon, and decided I need one for myself (you might see a few similarities 🙃 ).`,
  },
  {
    id: `TechSheet`,
    stack: ['Next.JS', 'Tailwind Css'],
    name: `TechSheet`,
    deployedLink: 'https://techsheet.vercel.app',
    image:
      '/static/images/blog/scuffedmdb-progress/tech.png',
    longDescription: `Techsheets for popular programming languages, frameworks and development tools. They include everything you should know in one single page.`,
  },
];

export interface pinnedRepoType {
  id: string;
  name: string;
  image?: string;
  deployedLink?: string;
  longDescription: string;
  stack?: string[];
}
