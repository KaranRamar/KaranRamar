import { Skill, Project, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Karan R',
  title: 'Aspiring Software Developer & ECE Student',
  subTitle: 'Bridging Hardware Intelligence with Modern Software Engineering',
  email: 'rkaranharish05@gmail.com',
  phone: '+91 90000 00000', // standard placeholder
  location: 'Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/karanr-ece', // placeholder but clean
  github: 'https://github.com/karanr-ece',
  bio: 'Electronics and Communication Engineering student with a deep passion for writing clean, efficient code and developing modern software applications. Over the course of my academic journey, I found my true calling in the IT industry. Equipped with strong fundamentals in C, Python, JavaScript, and Data Structures, coupled with experiential knowledge of embedded systems like ESP32 and IoT architectures, I love solving complex technical challenges. I am seeking a challenging internship/entry-level role at a progressive IT company to apply my hybrid engineering skills and build production-grade web applications.',
};

export const SKILLS: Skill[] = [
  {
    name: 'C Programming',
    category: 'programming',
    iconName: 'Cpu',
    proficiency: 85,
    description: 'Foundation of my programming journey. Highly experienced in memory management, data structures (linked lists, stacks, trees), algorithm design, and pointer arithmetic.'
  },
  {
    name: 'Python',
    category: 'programming',
    iconName: 'Braces',
    proficiency: 80,
    description: 'Used extensively for algorithmic problem solving, scripting, data processing, and backend automation using Flask / lightweight APIs.'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'programming',
    iconName: 'Code',
    proficiency: 75,
    description: 'Primary scripting language for building highly responsive user interfaces. Solid comprehension of closures, asynchronous operations, DOM manipulation, and modern ES6 features.'
  },
  {
    name: 'HTML5 & CSS3',
    category: 'web-development',
    iconName: 'CodeXml',
    proficiency: 90,
    description: 'Building semantic, responsive, and cross-browser compatible layouts using standard web technologies. Highly proficient in Tailwind CSS and CSS Grid/Flexbox layouts.'
  },
  {
    name: 'ESP32 & IoT',
    category: 'hardware-iot',
    iconName: 'Radio',
    proficiency: 85,
    description: 'Integrating ESP32 microcontrollers with cloud platforms (MQTT, WebSockets, HTTP APIs) to build intelligent remote monitoring and device control systems.'
  },
  {
    name: 'Arduino',
    category: 'hardware-iot',
    iconName: 'Hammer',
    proficiency: 80,
    description: 'Rapid prototyping of hardware sensors, motor systems, automated systems, serial protocols (UART, SPI, I2C), and analogue-to-digital signal processing.'
  },
  {
    name: 'Problem Solving',
    category: 'soft-skills',
    iconName: 'Lightbulb',
    proficiency: 85,
    description: 'Strong analytical mindset with a habit of breaking down large, complex business requirements into small modular programming problems.'
  },
  {
    name: 'Communication Skills',
    category: 'soft-skills',
    iconName: 'MessageSquare',
    proficiency: 90,
    description: 'Articulate communicator who excels in collaborative sprint ceremonies, translating between core technical logic and business/client requirements.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'esp32-relay',
    title: 'Smart Motor and Relay Control System',
    subtitle: 'ESP32 IoT Automated System',
    description: 'A cloud-enabled smart monitoring and control prototype for safe remote industrial motor control using ESP32, integrating Wi-Fi communication, safe relay switches, and real-time interactive telemetry logging.',
    longDescription: 'This project bridges Embedded Firmware with Web Technology. Designed for industrial motor safety, it uses an ESP32 microcontroller that hosts a web server to control mechanical relays and read sensor telemetry. Users can toggle relays, configure rotational motor speeds, monitor current voltage ratings, and receive system danger alerts if overloading occurs. It ensures 100% safety checks via code guards before firing relays.',
    image: '/src/assets/images/esp32_iot_control_1781525152758.jpg', // we generated this!
    tags: ['ESP32', 'C++', 'FreeRTOS', 'C Programming', 'Web Sockets', 'IoT Architecture'],
    featured: true,
    githubUrl: 'https://github.com/karanr-ece/esp32-relay-control',
    liveUrl: '#simulator', // We will build an awesome live simulator right on the page!
    keyFeatures: [
      'Dual-relay physical toggle configuration with fail-safe automatic cut-off algorithms',
      'Real-time voltage, current draw, and rotational motor RPM monitoring with automatic warning indicators',
      'Embedded HTTP & WebSocket servers for low-latency web terminal control',
      'Non-volatile SPIFFS storage on ESP32 to persist relay state logs over power failures',
      'Interactive Web dashboard showing animated hardware status feedback and command consoles'
    ],
    challengesSolved: 'Solved the mechanical bounce interference issue on relay switches by implementing a software-based debounce counter. Mitigated heavy power surges during motor spinup by introducing a soft-start PWM algorithm limiting immediate current spikes.'
  },
  {
    id: 'dsa-visualizer',
    title: 'Interactive Data Structures and Algorithms Visualizer',
    subtitle: 'HTML/CSS/JS Algorithmic Tool',
    description: 'A responsive developer playground highlighting real-time behaviors of fundamental sorting and searching algorithms like Bubble, Quick, Merge, and Binary searches.',
    longDescription: 'To strengthen my core IT and software engineering interview fundamentals, I designed and developed this rich client-side visualizer. It displays visual bar heights and updates colors dynamically as loops swap pointers, allowing potential recruiters and students to inspect step-by-step memory changes and complexity metrics.',
    image: 'https://picsum.photos/seed/dsa/800/450',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind', 'Algorithms', 'Interactive Canvas'],
    featured: false,
    githubUrl: 'https://github.com/karanr-ece/dsa-visualizer-js',
    liveUrl: '#dsa-visualizer-demo',
    keyFeatures: [
      'Step-through tracing and speed controls to analyze algorithmic iterations at sub-second intervals',
      'Color-coded comparisons (Pivot, Comparing, Swapping, Sorted) matching theoretical pseudocode',
      'Dynamic size generation of array values up to 100 items with single-button randomize capabilities',
      'Direct indicators showcasing Time and Space complexity details during active renders'
    ]
  },
  {
    id: 'iot-dashboard',
    title: 'Dynamic IoT Environmental Monitor Dashboard',
    subtitle: 'Python, Flask, and Web GUI',
    description: 'Full-stack dashboard hosting live temperature, humidity, and atmospheric readings pushed via REST APIs, featuring data charts.',
    longDescription: 'This full-stack dashboard handles live requests and presents sensor data over time-series charts. Built with a Flask backend and high-performance Recharts on the frontend, it tracks real-time microclimate sensors and enables downloading history records in CSV format.',
    image: 'https://picsum.photos/seed/monitor/800/450',
    tags: ['Python', 'Flask', 'JSON API', 'React', 'Recharts', 'Responsive Layout'],
    featured: false,
    githubUrl: 'https://github.com/karanr-ece/iot-flask-monitor',
    liveUrl: '#iot-dashboard-demo',
    keyFeatures: [
      'Flexible API endpoints accepting incoming JSON payloads from scattered edge microcontrollers',
      'Time-series fluid charts with custom tooltip formats identifying microclimatic changes',
      'Downloadable system history exports utilizing client-side blobs rendering tabular CSV files',
      'Responsive design featuring quick card matrices highlighting maximum, minimum, and average values'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'PSG College of Technology', // high-profile tech college in Tamil Nadu
    degree: 'B.E. Electronics and Communication Engineering',
    duration: '2023 - 2027 (Expected)',
    score: 'CGPA: 8.42 / 10.0',
    location: 'Coimbatore, Tamil Nadu',
    details: [
      'Specializing in microcontrollers, embedded systems, computer networks, and object-oriented programming.',
      'Active Member of the College Coding & IT Club; regularly organizing programming meetups and webinars.',
      'Completed practical lab projects focusing on C programming for memory models, discrete math algorithms, and wireless Wi-Fi stack routing.'
    ]
  },
  {
    institution: 'DAV Senior Secondary School',
    degree: 'Higher Secondary Certificate (HSC) - CBSE Board',
    duration: '2021 - 2023',
    score: 'Percentage: 92.4%',
    location: 'Chennai, Tamil Nadu',
    details: [
      'Focused on Computer Science, Mathematics, Physics, and Chemistry classes.',
      'Scored 98/100 in high school Computer Science final project (developed database management system using C++ and file streams).',
      'Won runner-up in district science exhibition highlighting green smart irrigation.'
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Python for Everybody Specialization',
    issuer: 'University of Michigan (Coursera)',
    date: 'Dec 2024',
    skills: ['Python Data Structures', 'JSON Parsing', 'Database SQLite3', 'BeautifulSoup Web Scraping']
  },
  {
    title: 'Modern React & Web Development',
    issuer: 'Meta Professional Certificate',
    date: 'March 2025',
    skills: ['React Hooks', 'State Management', 'Tailwind CSS Development', 'Asynchronous REST APIs']
  },
  {
    title: 'Arduino & ESP32 Embedded Systems Design',
    issuer: 'NPTEL India',
    date: 'October 2024',
    skills: ['Embedded C', 'Internet of Things (IoT) Protocols', 'Sensor Bus Integration (I2C/SPI)', 'RTOS Tasks']
  },
  {
    title: 'Software Development Foundations',
    issuer: 'Google Career Certificates',
    date: 'January 2025',
    skills: ['Version Control (Git)', 'Software Lifecycle', 'Problem Solving Methods', 'Unit Testing Standards']
  }
];
