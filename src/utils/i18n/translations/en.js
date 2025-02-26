import { faEnvelope, faPhone, faLocationDot, faIdCard, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const getResources = () => {
  return {
    translation: {
      languages: {
        en: 'English',
        es: 'Spanish',
      },
      personalInformation: {
        name: 'Mauricio Leon Murillo',
        title: 'Senior Software Engineer',
      },
      socialLinks: [
        {
          icon: faGithub,
          text: 'github.com/ISCMauLeon',
          href: 'https://github.com/ISCMauLeon',
        },
        {
          icon: faLinkedin,
          text: 'linkedin.com/in/iscmauleon',
          href: 'https://linkedin.com/in/iscmauleon',
        }
      ],
      otherInfoItems: [
        {
          icon: faIdCard,
          value: 'Age: 34 years old',
        },
        {
          icon: faEarthAmerica,
          value: 'Nationality: Mexican',
        }
      ],
      sidebarSections: {
        contactDetails: 'Contact details',
        personalDetails: 'Personal details',
        education: 'Education',
        continuousEducation: 'Continuous education',
        courses: 'Courses',
        conferences: 'Attended conferences',
        competitions: 'Competitions',
      },
      contactInfoItems: [
        {
          icon: faEnvelope,
          value: 'iscmauleon@gmail.com',
        },
        {
          icon: faPhone,
          value: '+52 (1) 33 28 32 43 85',
        },
        {
          icon: faLocationDot,
          value: 'La Paz, B.C.S. México',
        }
      ],
      educationItems: [
        {
          title: '2008 - 2012',
          description: 'Computer systems engineering college degree at the Celaya\'s Technological Institute (ITC).',
        }, {
          title: '2005 - 2008',
          description: 'Computer systems bachelors degree at the Technological Industrial and Services Bachelor Center (CBTIS) #230.',
        }
      ],
      conferencesItems: [
        {
          title: '2nd International congress of technologies.',
          description: 'Organized by: Professional Entrepreneurs Training Corporation, Civil Society. May 2012.',
          recognition: 'Certificated.',
        },
      ],
      competitionsItems: [
        {
          title: 'National event of technological innovation 2011.',
          description: 'Organized by: Technological Institute of Celaya (ITC).',
          recognition: 'Certificated.',
        },
        {
          title: '"Imagine, create, deploy" marketing fair.',
          description: 'Organized by: Technological Institute of Celaya (ITC). May 26th, 2011.',
          recognition: null,
        },
      ],
      coursesItems: [
        {
          title: 'PICS, The magic box.',
          description: 'Microcontrollers for industrial usage. Organized by: Technological Institute of Celaya (ITC). 2012.',
          recognition: null,
        },
        {
          title: 'Civil associations, groups and young entrepreneurs of Celaya strengthening program.',
          description: 'Organized by: Mexican Youth Institute of Celaya (IMJUV Celaya). November 2014.',
          recognition: 'Certificated.',
        },
      ],
      sections: {
        professionalExperience: 'Professional Experience',
        skills: 'Skills',
      },
      professionalExperience: {
        labels: {
          position: 'Position',
          roleDescription: 'Role description',
        },
        items: [
          {
            title: 'Brightcove (April 2019 - Present).',
            position: 'Senior Software Engineer, Full Stack.',
            roleDescription: 'Engineering Front-End, Back-End and architecture of web based enterprise video products and solutions software.',
            recognition: 'Promoted to Senior Software Engineer on January 2022.',
          },
          {
            title: 'Ooyala (July 2018 - April 2019).',
            position: 'Software Engineer, Full Stack.',
            roleDescription: 'Engineering Front-End web based software solutions for enterprise video products.',
            recognition: 'Acquired by Brightcove on April of 2019.',
          },
          {
            title: 'Dextra Technologies (July 2017 - July 2018).',
            position: 'Front-End Web Developer.',
            roleDescription: 'Develop Angular based single page applications.',
            recognition: '"Top Performer" award.',
          },
          {
            title: 'Paybook Inc (May 2016 - April 2017).',
            position: 'Software Engineer.',
            roleDescription: 'Develop Back-End functions and software architecture testing.',
            recognition: null,
          },
          {
            title: 'PSL Group (March 2015 - April 2016).',
            position: 'Market research programmer.',
            roleDescription: 'Survey programmer in the market research department.',
            recognition: null,
          },
          {
            title: 'Advanced Technological Creations of Mexico, CTAM (June 2013 - May 2014).',
            position: 'Front-End chief developer.',
            roleDescription: 'Department head and Front-End analyst and developer.',
            recognition: null,
          },
          {
            title: 'Tresguerras parcel and cargo transports (July 2012 - February 2013).',
            position: 'Systems and Quality departments trainee.',
            roleDescription: 'System requirements analyst, developer and trainer of a web system for the quality department\'s documentation control.',
            recognition: null,
          },
          {
            title: 'Recorcholis, La Paz Group (July 2007 - June 2008).',
            position: 'Arcade machines assistant.',
            roleDescription: 'Maintenance and installation of video game machines and computer networks.',
            recognition: 'Employee of the month recognition.',
          },
          {
            title: 'GigaByte Group (January 2007 - June 2007).',
            position: 'Repairman trainee.',
            roleDescription: 'Maintenance of equipment and installation of computer networks and alarms.',
            recognition: null,
          },
        ]
      },
      skillsSections: {
        labels: {
          native: 'Native'
        },
        items: [
          {
            title: 'Languages and Frameworks',
            skills: [
              {
                name: 'HTML5',
                percentage: 90,
              },
              {
                name: 'CSS3',
                percentage: 90,
              },
              {
                name: 'JS/JSX',
                percentage: 90,
              },
              {
                name: 'React',
                percentage: 90,
              },
              {
                name: 'NodeJS',
                percentage: 90,
              },
              {
                name: 'WebPack',
                percentage: 80,
              },
              {
                name: 'Bash',
                percentage: 60,
              },
            ]
          },
          {
            title: 'Databases',
            skills: [
              {
                name: 'MongoDB',
                percentage: 90,
              },
              {
                name: 'MySQL',
                percentage: 60,
              },
              {
                name: 'SQLServer',
                percentage: 60,
              },
              {
                name: 'PostgreSQL',
                percentage: 60,
              },
              {
                name: 'Redis',
                percentage: 60,
              },
            ]
          },
          {
            title: 'DevOps and CI/CD',
            skills: [
              {
                name: 'Docker',
                percentage: 70,
              },
              {
                name: 'Kubernetes',
                percentage: 60,
              },
              {
                name: 'AWS',
                percentage: 40,
              },
              {
                name: 'Jenkins',
                percentage: 60,
              },
            ]
          },
          {
            title: 'Engines, IDEs and Programs',
            skills: [
              {
                name: 'Unity',
                percentage: 60,
              },
              {
                name: 'GIMP',
                percentage: 60,
              },
              {
                name: 'Postman',
                percentage: 80,
              },
              {
                name: 'Docker',
                percentage: 70,
              },
              {
                name: 'Visual Studio',
                percentage: 70,
              },
              {
                name: 'Visual Studio Code',
                percentage: 90,
              },
              {
                name: 'MongoDB Compass',
                percentage: 80,
              },
            ]
          },
          {
            title: 'Operative Systems',
            skills: [
              {
                name: 'Ubuntu',
                percentage: 80,
              },
              {
                name: 'MacOS',
                percentage: 80,
              },
              {
                name: 'Windows',
                percentage: 70,
              },
            ]
          },
          {
            title: 'Spoken Languages',
            skills: [
              {
                name: 'English',
                percentage: 90,
              },
              {
                name: 'Japanese',
                percentage: 20,
              },
              {
                name: 'Spanish',
                native: true,
              },
            ]
          },
        ]
      }
    }
  };
};

export default getResources;