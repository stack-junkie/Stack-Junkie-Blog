interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Stack Junkie Website',
    description: `A transparent development blog built with Next.js and Tailwind CSS, showcasing 
    real experiments with AI, modern web technologies, and honest documentation of the 
    development process.`,
    imgSrc: '/static/images/logo.png',
    href: 'https://github.com/stack-junkie/Stack-Junkie-Blog.git',
  },

  {
    title: 'ClaudeCraft',
    description: `ClaudeCraft is a Minecraft server management and AI-powered scripting toolkit using Claude, designed for developers who want to automate and enhance their Minecraft experience with LLMs.`,
    imgSrc: '/static/images/claudecraft.png', // Place your logo or a screenshot in this path if you have one
    href: 'https://github.com/stack-junkie/ClaudeCraft',
  },

  {
    title: 'Monthly Budget',
    description: `Monthly Budget is a simple, open-source app for tracking monthly income and expenses. Built for personal finance enthusiasts, it focuses on clarity, privacy, and easy self-hosting.`,
    imgSrc: '/static/images/monthly-budget-logo.png', // Add your app's logo/screenshot here
    href: 'https://github.com/stack-junkie/Monthly-Budget',
  },
];
export default projectsData;
