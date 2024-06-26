let info = {
  name: 'Huy Nguyen',
  logo_name: 'tuw nguyen',
  flat_picture: 'astronaut.png',
  config: {
    use_cookies: true
  },
  introduce: "Hi there, I'm Huy Nguyen.",
  description: {
    line1:
      'Welcome <span class="text-2xl">👏</span> I\'m a Full Stack Developer specializing in Node.js and Vue.js. I\'m passionate about <span class="font-medium">Web Development</span>, <span class="font-medium">Cloud Computing</span> and <span class="font-medium">Web/System Architecture</span>.',
    line2: 'Currently, I am working with:',
    line3: ['NodeJS', 'Vue', 'React', 'AWS', 'Docker', 'DynamoDB'],
    line4:
      "I've had the opportunity to work on a variety of projects, from implementing backend and frontend applications to developing serverless, cloud services. I am enthusiastic about staying up-to-date with the latest technologies and best practices in full stack development, and I'm always eager to learn new skills and take on new challenges."
  },
  links: {
    linkedin: 'https://www.linkedin.com/in/tuwnguyen/',
    github: 'https://github.com/tuwnguyen',
    twitter: 'https://x.com/TuwNguyen',
    discord: 'https://discord.com/',
    instagram: 'https://www.instagram.com/nguyentuvv/',
    facebook: 'https://www.facebook.com/tuw.nguyen.ha97',
    resume: 'https://drive.google.com/file/d/1PrWDs74HrXZ9pyukgZv44ko2vb4LY5pT/view?usp=sharing'
  },
  education: [
    {
      name: 'Microsoft Information Technology Academy',
      place: 'Da Nang University, Vietnam',
      date: 'Nov, 2017 - Aug, 2018',
      degree: 'ASP.NET Development',
      description: 'Achieved a certificate in ASP.NET in web development while studying here.',
      skills: ['C#', 'ASP.NET']
    },
    {
      name: 'Vietnam - Korea Friendship College',
      place: 'Vietnam',
      date: 'Sep, 2015 - May, 2017',
      degree: 'Information Technology',
      description:
        'Graduated from Vietnam - Korea Friendship College, Da Nang with a bachelor degree in Information Techlogoly.',
      skills: ['Software Engineering', 'Algorithms', 'Java', 'OS']
    }
  ],
  experience: [
    {
      name: 'Ticket Selling Service',
      place: 'MTI Technology Da Nang, Vietnam',
      date: 'Sep, 2023 - Present',
      position: 'Full Stack Developer',
      description:
        'Developing the front-end and back-end of a ticket selling app in a Japan railway system. Implementing and fixing bugs some booking and payment feature in the application.',
      skills: ['Javascript', 'Vue', 'Nodejs', 'AWS Cloud', 'Serverless']
    },
    {
      name: 'Medical Service',
      place: 'MTI Technology Da Nang, Vietnam',
      date: 'Mar, 2022 - Sep, 2023',
      position: 'Full Stack Developer',
      description:
        'Worked as a full stack web developer, implementing various features and fixing bugs for a medical service in front-end, back-end, as well as cloud. Building the service that allows doctors and patients to connect more easily through chat, video calls, and IVR platforms.',
      skills: ['Typescript', 'React', 'Nextjs', 'Nodejs', 'AWS Cloud', 'Serverless']
    },
    {
      name: 'Business Card',
      place: 'MTI Technology Da Nang, Vietnam',
      date: 'Jan, 2019 - Jan, 2020',
      position: 'Backend Developer',
      description:
        'Developed and designed an API server to handle scan card processing, allowing the detection of information about the business card and saving it in the database.',
      skills: ['Nodejs', 'PostgreSQL', 'GCP', 'Vision API', 'NLP']
    },
    {
      name: 'Profit and Loss',
      place: 'MTI Technology Da Nang, Vietnam',
      date: 'May, 2018 - Jan, 2019',
      position: 'Full Stack Developer',
      description:
        'Developed front-end and back-end of a tool that can manage the time off (days, hours) of employees in the company, and implemented various features that allow employees to register vacation schedules, time off, and days off right on the app.',
      skills: ['React', 'ASP.NET Core', 'SQL']
    },
    // {
    //   name: 'E-Commerce Shop',
    //   place: 'Da Nang University',
    //   date: 'Mar, 2018 - Apr, 2018',
    //   position: 'Web Developer',
    //   description:
    //     'As a graduation project, developed a website with the same functions as an e-commerce website.',
    //   skills: ['ASP.NET', 'Angularjs', 'SQL']
    // },
    {
      name: 'Japan Insurance',
      place: 'FPT Software Da Nang',
      date: 'Sep, 2017 - Mar, 2018',
      position: 'Web Developer',
      description:
        'Worked as a web developer, implementing and fixing bugs in the front-end in the insurance application.',
      skills: ['HTML/CSS', 'Javascript']
    }
  ],
  skills: [
    {
      title: 'languages',
      info: ['Javascript', 'TypeScript', 'C#', 'SQL', 'NoSQL'],
      icon: 'fa-solid fa-code'
    },
    {
      title: 'software architecture',
      info: ['Microservice', 'Monolith', 'Layered', 'Client/Server', 'Event Driven', 'Serverless'],
      icon: 'fa-solid fa-diagram-project'
    },
    {
      title: 'web technologies',
      info: ['Vue', 'React', 'Node', 'HTML/CSS', 'Tailwind'],
      icon: 'fa-solid fa-laptop-code'
    },
    {
      title: 'databases',
      info: ['MongoDB', 'DynamoDB', 'MySQL', 'Portgre'],
      icon: 'fa-solid fa-database'
    },
    {
      title: 'operating systems & tools',
      info: ['MacOS', 'Linux', 'Windows', 'Agile(Scrum)', 'Git', 'Docker'],
      icon: 'fa-solid fa-screwdriver-wrench'
    },
    {
      title: 'cloud',
      info: [
        'AWS S3',
        'EC2',
        'API Gateway',
        'DynamoDB',
        'Lambda Function',
        'Route53',
        'CloudFront',
        'WAF'
      ],
      icon: 'fa-brands fa-aws'
    }
  ],
  portfolio: [
    {
      name: 'Weather App',
      pictures: [
        {
          img: 'portfolio/vwp/one.png'
        },
        {
          img: 'portfolio/vwp/two.png'
        },
        {
          img: 'portfolio/vwp/three.png'
        },
        {
          img: 'portfolio/vwp/four.png'
        }
      ],
      technologies: ['Vue3', 'Vite', 'Tailwind', 'Mapbox', 'Geocoding API'],
      category: 'Website',
      date: 'Jan, 2024',
      github: 'https://github.com/tuwnguyen/vue-weather-app',
      visit: 'https://tuwnguyen-weather.netlify.app/',
      description:
        'Weather App is a simple application to view weather forecasts all over the world using Vue3 and Open Weather API'
    },
    {
      name: 'IP Tracking',
      pictures: [
        {
          img: 'portfolio/vit/one.png'
        },
        {
          img: 'portfolio/vit/two.png'
        },
        {
          img: 'portfolio/vit/three.png'
        }
      ],
      technologies: ['Vue3', 'Vite', 'Tailwind', 'Leaflet', 'Mapbox', 'Geocoding API'],
      category: 'Website',
      date: 'Feb, 2024',
      github: 'https://github.com/tuwnguyen/vue-ip-tracking',
      visit: 'https://tuwnguyen-ip-tracker.netlify.app/',
      description:
        'IP Tracking is a simple application to find location based on public ip. The website is using Vue3, Vite and some built-in APIs like Mapxbox and GeoCoding.'
    },
    {
      name: 'Lorem Ipsum',
      pictures: [
        {
          img: 'portfolio/lorem/react.jpg'
        },
        {
          img: 'portfolio/lorem/vue.jpg'
        },
        {
          img: 'portfolio/lorem/docker.jpg'
        },
        {
          img: 'portfolio/lorem/node.png'
        }
      ],
      technologies: ['Node', 'React', 'Docker', 'Vue'],
      category: 'Website',
      github: 'https://github.com/',
      date: 'Feb, 2024 - May, 2024',
      visit: '/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsum beatae deleniti quae consectetur dicta voluptatum corporis eos repudiandae id inventore dolores nihil sunt magni quidem doloremque assumenda voluptate obcaecati.'
    },
    {
      name: 'Lorem Ipsum',
      pictures: [
        {
          img: 'portfolio/lorem/docker.jpg'
        },
        {
          img: 'portfolio/lorem/vue.jpg'
        },
        {
          img: 'portfolio/lorem/react.jpg'
        },

        {
          img: 'portfolio/lorem/node.png'
        }
      ],
      technologies: ['Node', 'React', 'Docker', 'Vue'],
      category: 'Website',
      github: 'https://github.com/',
      date: 'Feb, 2024 - May, 2024',
      visit: '/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsum beatae deleniti quae consectetur dicta voluptatum corporis eos repudiandae id inventore dolores nihil sunt magni quidem doloremque assumenda voluptate obcaecati.'
    },
    {
      name: 'Lorem Ipsum',
      pictures: [
        {
          img: 'portfolio/lorem/vue.jpg'
        },
        {
          img: 'portfolio/lorem/react.jpg'
        },
        {
          img: 'portfolio/lorem/docker.jpg'
        },
        {
          img: 'portfolio/lorem/node.png'
        }
      ],
      technologies: ['Node', 'React', 'Docker', 'Vue'],
      category: 'Website',
      github: 'https://github.com/',
      date: 'Feb, 2024 - May, 2024',
      visit: '/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsum beatae deleniti quae consectetur dicta voluptatum corporis eos repudiandae id inventore dolores nihil sunt magni quidem doloremque assumenda voluptate obcaecati.'
    },
    {
      name: 'Lorem Ipsum',
      pictures: [
        {
          img: 'portfolio/lorem/node.png'
        },
        {
          img: 'portfolio/lorem/vue.jpg'
        },
        {
          img: 'portfolio/lorem/react.jpg'
        },
        {
          img: 'portfolio/lorem/docker.jpg'
        }
      ],
      technologies: ['Node', 'React', 'Docker', 'Vue'],
      category: 'Website',
      github: 'https://github.com/',
      date: 'Feb, 2024 - May, 2024',
      visit: '/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsum beatae deleniti quae consectetur dicta voluptatum corporis eos repudiandae id inventore dolores nihil sunt magni quidem doloremque assumenda voluptate obcaecati.'
    },
    {
      name: 'Lorem Ipsum',
      pictures: [
        {
          img: 'portfolio/lorem/react.jpg'
        },
        {
          img: 'portfolio/lorem/vue.jpg'
        },

        {
          img: 'portfolio/lorem/docker.jpg'
        },
        {
          img: 'portfolio/lorem/node.png'
        }
      ],
      technologies: ['Node', 'React', 'Docker', 'Vue'],
      category: 'Website',
      github: 'https://github.com/',
      date: 'Feb, 2024 - May, 2024',
      visit: '/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsum beatae deleniti quae consectetur dicta voluptatum corporis eos repudiandae id inventore dolores nihil sunt magni quidem doloremque assumenda voluptate obcaecati.'
    }
  ],
  architect: []
}

export default info
