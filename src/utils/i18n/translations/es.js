import { faEnvelope, faPhone, faLocationDot, faIdCard, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const getResources = () => {
  return {
    translation: {
      languages: {
        en: 'Inglés',
        es: 'Español',
      },
      personalInformation: {
        name: 'Mauricio Leon Murillo',
        title: 'Ingeniero de Software Senior',
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
          value: 'Edad: 34 años',
        },
        {
          icon: faEarthAmerica,
          value: 'Nacionalidad: Mexicana',
        }
      ],
      sidebarSections: {
        contactDetails: 'Datos de contacto',
        personalDetails: 'Datos personales',
        education: 'Educación',
        continuousEducation: 'Educación continua',
        courses: 'Cursos',
        conferences: 'Conferencias atendidas',
        competitions: 'Competencias',
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
          description: 'Ingeniería en sistemas computacionales en el Instituto Tecnológico de Celaya (ITC).',
        }, {
          title: '2005 - 2008',
          description: 'Sistemas de cómputo en el Centro Bachillerato Tecnológico Industrial y de Servicios (CBTIS) #230.',
        }
      ],
      conferencesItems: [
        {
          title: '2do Congreso internacional de tecnologias.',
          description: 'Organizado por: Corporación para la Formación de Emprendedores Profesionales, Sociedad Civil. Mayo 2012.',
          recognition: 'Reconocimiento.',
        },
      ],
      competitionsItems: [
        {
          title: 'Evento nacional de innovación tecnológica 2011.',
          description: 'Organizado  por: Instituto Tecnológico de Celaya (ITC).',
          recognition: 'Reconocimiento.',
        },
        {
          title: 'Feria de la mercadotecnia "Imagina, crea, emprende".',
          description: 'Organizado  por: Instituto Tecnológico de Celaya (ITC). 26 de Mayo de 2011.',
          recognition: null,
        },
      ],
      coursesItems: [
        {
          title: 'PICS, La caja mágica.',
          description: 'Utilización de micro controladores para uso industrial. Organizado  por: Instituto Tecnológico de Celaya (ITC). 2012.',
          recognition: null,
        },
        {
          title: 'Fortalecimiento de asociaciones civiles, colectivos y emprendedores juveniles de Celaya.',
          description: 'Organizado por: Instituto Mexicano de la Juventud IMJUV Celaya. Celaya 2014.',
          recognition: 'Reconocimiento.',
        },
      ],
      sections: {
        professionalExperience: 'Experiencia Profesional',
        skills: 'Habilidades',
      },
      professionalExperience: {
        labels: {
          position: 'Puesto',
          roleDescription: 'Descripción',
        },
        items: [
          {
            title: 'Brightcove (April 2019 - Present).',
            position: 'Ingeniero de Software Senior, Full Stack.',
            roleDescription: 'Ingenieria de Front-End, Back-End y arquitectura de software web de productos y soluciones empresariales de video.',
            recognition: 'Ascendido a Ingeniero de Software Senior en Enero de 2022.',
          },
          {
            title: 'Ooyala (July 2018 - April 2019).',
            position: 'Ingeniero de Software, Full Stack.',
            roleDescription: 'Ingenieria de Front-End de soluciones de software web de productos empresariales de video.',
            recognition: 'Adquirido por Brightcove en Abril del 2019.',
          },
          {
            title: 'Dextra Technologies. (Julio 2017 - Julio 2018).',
            position: 'Desarrollador de Front-End Web.',
            roleDescription: 'Desarrollar aplicaciones de una sola pagina basadas en Angular.',
            recognition: 'Premio "Top Performer".',
          },
          {
            title: 'Paybook Inc. (Mayo 2016 - Abril 2017).',
            position: 'Ingeniero de Software.',
            roleDescription: 'Desarrollar funciones de Back-End y probar architectura de software.',
            recognition: null,
          },
          {
            title: 'Grupo PSL (Marzo 2015 - Abril 2016).',
            position: 'Programador de investigación de mercado.',
            roleDescription: 'Programador de encuestas en el departamento de investigación de mercado.',
            recognition: null,
          },
          {
            title: 'Creaciones de Tecnología Avanzada de México, CTAM (Junio 2013 - Mayo 2014).',
            position: 'Jefe del departamento de Front-End.',
            roleDescription: 'Jefe de departamento, desarrollador y analista de Front-End.',
            recognition: null,
          },
          {
            title: 'Autotransportes de Carga Tresguerras ACTSA (Julio 2012 - Febrero 2013).',
            position: 'Practicante del departamento de sistemas y calidad.',
            roleDescription: 'Analista, desarrollador e instructor de un sistema de control documental para el departamento de calidad.',
            recognition: null,
          },
          {
            title: 'Grupo Recórcholis, La Paz (Julio 2007 - Junio 2008).',
            position: 'Asistente de máquinas.',
            roleDescription: 'Mantenimiento e instalación de máquinas de video juegos y redes de computadoras.',
            recognition: 'Reconocimiento al empleado del mes.',
          },
          {
            title: 'Grupo GigaByte (Enero 2007 - Junio 2007).',
            position: 'Asistente de técnico en reparación.',
            roleDescription: 'Mantenimiento de equipo e instalación de redes de computadoras y alarmas.',
            recognition: null,
          },
        ]
      },
      skillsSections: {
        labels: {
          native: 'Nativo'
        },
        items: [
          {
            title: 'Lenguajes y Frameworks',
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
            title: 'Bases de datos',
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
            title: 'DevOps y CI/CD',
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
            title: 'Motores IDEs y programas',
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
            title: 'Sistemas operativos',
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
            title: 'Idiomas',
            skills: [
              {
                name: 'Inglés',
                percentage: 90,
              },
              {
                name: 'Japonés',
                percentage: 20,
              },
              {
                name: 'Español',
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