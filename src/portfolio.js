/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Keshav Jain',
  title: "Hi all, I'm Keshav",
  subTitle: emoji(
    'A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.'
  ),
  resumeLink: 'https://drive.google.com/file/d/1jsvxsHZv-nxtiMd1iDC25NZIpatj0DIU/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/keshavjain235',
  linkedin: 'https://www.linkedin.com/in/keshavjain235',
  hackerrank: 'https://www.hackerrank.com/keshavjain235',
  gmail: 'keshav.jain2354@gmail.com',
  // gitlab: 'https://gitlab.com/saadpasta',
  // facebook: 'https://www.facebook.com/saad.pasta7',
  // medium: 'https://medium.com/@saadpasta',
  // stackoverflow: 'https://stackoverflow.com/users/10422806/saad-pasta',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji(
      '⚡ Integration of third party services such as Firebase'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'Bootstrap-4',
      fontAwesomeClassname: 'fab fa-bootstrap',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'mongodb',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'C',
      fontAwesomeClassname: 'fas fa-copyright',
    },
    {
      skillName: 'Java',
      fontAwesomeClassname: 'fab fa-java',
    },
    {
      skillName: 'Git',
      fontAwesomeClassname: 'fab fa-git',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Chitkara University, Punjab',
      logo: require('./assets/images/chitkaraLogo.png'),
      subHeader: 'Bachelor of Engineering - Computer Science',
      duration: '2018 - 2022',
    },
    {
      schoolName: 'D C Montessori Sr. Sec. SMART School, Chandigarh',
      logo: require('./assets/images/dcmsLogo.png'),
      subHeader: 'XII',
      duration: '2016 - 2018',
    },
    {
      schoolName: 'Bhavan Vidyalaya, Panchkula',
      logo: require('./assets/images/bhavanLogo.jpg'),
      subHeader: 'X',
      duration: '2016',
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Development Intern',
      company: 'SAASPECT',
      companylogo: require('./assets/images/saaspectLogo.png'),
      date: 'January 2021 – Present',
    },
    {
      role: 'Web Development Intern',
      company: 'The Prodigious People',
      companylogo: require('./assets/images/tpp.jpg'),
      date: 'February 2021 – Present',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'keshavjain235', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/bidlocalLogo.png'),
      link: 'http://bidlocal.in',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: '2nd Position - Hack-A-Duck',
      subtitle: 'Hack-A-Duck Hackathon organized by IET BIT Mesra and Psyber Duck',
      image: require('./assets/images/hackaduck.jpg'),
      footerLink: [
        {
          name: 'Award Letter',
          url: 'https://drive.google.com/file/d/1yWbtyFWnVK4cFDiV1G9U53QejUysEm8_/view?usp=sharing',
        },
        {
          name: 'Final Project',
          url: 'https://coding-blasters-charity-web.herokuapp.com',
        },
      ],
    },
    {
      title: 'Top 10, Finalist - API Hacks',
      subtitle: "API Hacks Hackathon organised by Innovator's Hub X Tech Phantoms, Chandigarh University",
      image: require('./assets/images/apihacks.png'),
      footerLink: [
        {
          name: 'Award Letter',
          url: 'https://drive.google.com/file/d/1lZyaJpVPeKIDipYbN_TEjRJ9W7_OyA6D/view?usp=sharing',
        },
        {
          name: 'Final Project',
          url: 'https://github.com/keshavjain235/SaavdhanAPI',
        },
      ],
    },
    {
      title: 'Top 20 - OctaHacks3.0',
      subtitle: "OctaHacks3.0 Hackathon organised by Developer Student Clubs, Chitkara University",
      image: require('./assets/images/octahacks.png'),
      footerLink: [
        {
          name: 'Award Letter',
          url: 'https://drive.google.com/file/d/1S3gXm_FBShWkcGHcRXbZ3uo0Oe7VUDEA/view?usp=sharing',
        },
        {
          name: 'Final Project',
          url: 'https://securitypirates.herokuapp.com',
        },
      ],
    },
    {
      title: 'Top 10 - The Python Week',
      subtitle: "The Python Week Hackathon organized under DevLoop, by Mehsana Developers Club",
      image: require('./assets/images/thepythonweek.png'),
      footerLink: [
        {
          name: 'Award Letter',
          url: 'https://drive.google.com/file/d/19Bv-AmPnsKeaNDmN_ZlIDdMJRLrXi6TU/view?usp=sharing',
        },
        {
          name: 'Final Project',
          url: 'https://flight-fare-predictor.vercel.app',
        },
      ],
    },
    {
      title: '16th Position - HACKNITP3.0',
      subtitle: "HACKNITP3.0 Hackathon organized by HackSlash Club, NIT Patna",
      image: require('./assets/images/hacknitp.png'),
      footerLink: [
        {
          name: 'Award Letter',
          url: 'https://drive.google.com/file/d/1qbXiQegTUZbQ27wiiBurZnHLF__H4z17/view?usp=sharing',
        },
        {
          name: 'Final Project',
          url: 'https://flight-fare-predictor.vercel.app',
        },
      ],
    },
    {
      title: 'Front-End Web Development with React',
      subtitle: 'This course explores Javascript based front-end application development, and in particular the React library.',
      image: require('./assets/images/react.png'),
      footerLink: [
        {
          name: 'Certification',
          url: 'https://www.coursera.org/verify/PY4QTMT9F23R',
        },
      ],
    },
    {
      title: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
      subtitle: 'An overview of client-side web UI frameworks, in particular Bootstrap 4.',
      image: 'https://www.filepicker.io/api/file/bciJjUAsRzG6UQbCRcVe',
      footerLink: [
        {
          name: 'Certification',
          url: 'https://www.coursera.org/verify/JBBNKHYQQF2T',
        },
      ],
    },
    {
      title: 'Architecting with Google Compute Engine',
      subtitle: 'In this specialization, learners explored infrastructure components such as networks, systems and applications services using Google Cloud Platform, with a focus on Compute Engine.',
      image: 'https://www.smartenergydecisions.com/upload/images/company_images/google_cloud.jpg',
      footerLink: [
        {
          name: 'Certification',
          url: 'https://www.coursera.org/verify/specialization/PNV927WDRTKZ',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  // number: '+92-3243454077',
  emailAddress: 'keshav.jain2354@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'keshavjain235', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
