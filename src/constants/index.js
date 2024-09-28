export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Realistic Vegetation Cover Through Statistical Sampling',
      desc: 'For my final computer science project, myself and 2 other friends collaborated to build a Unity render that could realistically mimic vegetation coverage while running in under 5 seconds',
      subdesc:
        'I accepted the role as software architect during this project and created an event driven system in Unity for my team to build on top of. I spent much of my time optimising data structures, implementing parallel algorithms for performance and making sure the team was aware and ready to tackle changing requirements. Part of my time was also spent sharing my knowledge of Unity with other groups and discussing new ways to shave off a few milliseconds wherever possible. I am very proud of this project, as it was an opportunity for me to put the passions and skills I have accumulated over the last 8 years into a single system. In many ways PlantGen24 is a piece of me that I will fondly look back on',
      
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Unity Engine',
          path: '/assets/unity.png',
        },
        {
          id: 2,
          name: 'C#',
          path: 'assets/Csharp.png',
        },
        {
          id: 3,
          name: 'Python',
          path: '/assets/python.png',
        },
      ],
    },
    {
      title: 'Self Driving Video Game AI Using NEAT',
      desc: 'Neuroevolution of Augmenting Topologies is a form of machine learning that takes inspiration from evolution and natural selection.',
      subdesc:
        "With this project I built a simple neural network to control a car in Unity. The network took raycast distances as inputs before outputting values to the steering, breaks and accelerator. Collections of cars grouped as generations were created and evaluated according to a fitness function. Neural networks were encoded as 'genes' in this simulation. The best cars were allowed to pass their 'genes' on to the next generation, with a chance for mutations to occur. Building the crossover function and working with matrices were the most challenging part of this project but the experience served me well later at university when we took a deep dive into neural networks",
      
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Unity Engine',
          path: '/assets/unity.png',
        },
        {
          id: 2,
          name: 'C#',
          path: 'assets/Csharp.png',
        },
        
      ],
    },
    {
      title: 'Statistical Research on Impact of FPS on Player Performance ',
      desc: 'Designed, executed and analysed a statistical research investigation exploring the impact that FPS has on player performance in video games',
      subdesc:
        "Much of my fascination with statistics can be pin-pointed to the love of data. More specifically, the knowledge data hides in plain sight. This project allowed me to put my experimental design theory into practice and collect some data of my own. I built a small video game that would vary in-game frame rates and collect data about player performance in the background. It was also a fantastic excuse to play videos games while furthering my degree. Once I had collected enough data from students, I performed a statistical analysis and summarised my findings. To my suspicion, the frame rate did impact performance but became less impactful with increasing performance. Maybe I don't need that 265Hz monitor after all...",
     
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'R.js',
          path: '/assets/R.png',
        },
        {
          id: 2,
          name: 'Unity Engine',
          path: 'assets/unity.png',
        },
        {
          id: 3,
          name: 'C#',
          path: '/assets/Csharp.png',
        },
        {
          id: 4,
          name: 'Python',
          path: '/assets/python.png',
        },
      ],
    },
    {
      title: '5-Axis Robot Arm With Bluetooth Control',
      desc: 'Elmo (yes thats the robots name) was a C++ project I worked on during a highschool break. It setoff my journey into understanding microcontrollers and later IoT (internet of things)',
      subdesc:
        'Elmo was built using 5 individually driven servo motors, controlled by an Arduino Uno board. A bluetooth module interfaced with a custom app that I built using the MIT App Builder. The Arduino would recieve the values from the bluetooth board and, after calibrating the motors, would then write the values to the servos. There were definetly areas to improve on (like the build quality), but sometimes the lessons learnt are worth more than the product. You did good, Elmo',
     
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'C++',
          path: '/assets/C++.png',
        },
        {
          id: 2,
          name: 'MIT App Builder',
          path: 'assets/mit.png',
        },
        
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];