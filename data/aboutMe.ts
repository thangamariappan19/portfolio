const style = (props) =>
  `color: var(--chakra-colors-brand-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const info = (props: any): { input: string; return: string }[] => [
  {
    input: 'self.learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'self.currentLocation',
    return: '"Coimbatore, India"',
  },

  {
    input: 'self.interests',
    return: '["web dev", "Computer science", "cricket"]',
  },
  {
    input: 'self.education',
    return: '"B.E-Computer Science"',
  },
  {
    input: 'self.skills',
    return:
      '[ "JavaScript", "Angular", "React", "Next.JS", "Chakra-UI", "Tailwind", "SASS", "git"]',
  },
  {
    input: 'self.contactMe()',
    return: `["<a style="${style(
      props
    )}" rel="noopener" href="https://www.linkedin.com/in/thanga-mariappan-p/">LinkedIn</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/thangamariappan19">Github</a>"]`,
  },
];

export default info;
