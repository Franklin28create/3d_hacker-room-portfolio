export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Xora",
    desc: "This small project is the product of modernity, not only modern technologies like Tailwind CSS, but also modern UI. This project depicts advanced knowledge in design and styling.",
    subdesc:
      "Built with modern UI & Technologies, Xora is made to provide advanced User experiences for a potential client.",
    href: "https://xora-clone.franks-projects.com",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "LiveDoc - Real-Time Google Docs Clone",
    desc: "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
    subdesc:
      "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
    href: "https://live-docs-nine-amber.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Liveblocks",
        path: "/assets/liveblocks.png",
      },
    ],
  },
  {
    title: "CarePulse - Health Management System",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, CarePulse integrantes complex forms for better user experience, by using Next.js, Appwrite, and Sentry that enhance operational workflows.",
    href: "https://care-pulse-nine-iota.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Appwrite",
        path: "/assets/appwrite.svg",
      },
    ],
  },
  {
    title: "Nike Clone",
    desc: "With modern UI and technologies, this project is the perfect blend between modernization and style. Promoting athletic wear and physical health through propper clothing.",
    subdesc:
      "Made with a simple yet efficient React.js project using the fast Vite.js front-end build tool and development server.",
    href: "https://nike-clone.franks-projects.com/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Vite.js",
        path: "/vite.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "Library App",
    desc: "An e-commerce website designed to inspire users to read and expand their knowledge with highly motivational and educational texts and scriptures.",
    subdesc:
      "Real-life online shopping experience brought to specifically by React.js. This website includes many functionalities like adding products to a cart and checking out.",
    href: "https://library-app-beta-roan.vercel.app/",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -4.25, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Internship",
    pos: "Apprentice",
    duration: "2024",
    title:
      "Built a platform that resembles social media which included a lot of features including a countdown for a post, a user's work, a user's profile and number of followers. This internship shaped the importance of reusable and efficient code as well as many modern UI designs like an infinite carousel. You can find the complete project at: https://franklin-internship.vercel.app/",
    icon: "/assets/apprentice.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Web Developer Trainee",
    pos: "Member of bootcamp",
    duration: "2024",
    title:
      "I was fortunate enough to to have learned from experienced coaches at Frontend Simplified, a group of industry specialists from big tech industries who shared their expertise in coding and development. Through their guidance, I gained valuable insights on how to write efficient, readable, and scalable code, which significantly improved my coding skills. With their mentorship, I was able to accelerate my growth as a developer and tackle complex projects with great confidence.",
    icon: "/assets/business-logo.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Application Development",
    pos: "Web Developer",
    duration: "2024 -- Present",
    title:
      "Building innovative applications like a Zoom clone, Medicare App, and Chat app proved to be an exhilirating learning experience that pushed boundaries. Stepping out of the comfort zone, backend development was tackled to unlick a new realm of possibilities, significantly enhancing functionality and user experience. This bold step proved to be the best decision, honing skills and igniting a passion for crafting exceptional digital experiences.",
    icon: "/assets/computer.png",
    animation: "salute",
  },
];
