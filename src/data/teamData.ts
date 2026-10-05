export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'core' | 'member';
  image: string;
  linkedin?: string;
  bio?: string;
}

export interface ProfessionalMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  department?: string;
}

export interface EventItem {
  id: string;
  title: string;
  status: 'previous' | 'upcoming';
  image: string;
  description: string;
  fullDetails?: string;
  date?: string;
  venue?: string;
  linkText?: string;
  linkUrl?: string;
  isDspWorkshop?: boolean;
}

export const STUDENT_TEAM_2026: TeamMember[] = [
  {
    id: 'vaibhav-kumbar-2026',
    name: 'Vaibhav Kumbar',
    role: 'Chapter Chair',
    category: 'core',
    image: '/ACM_Photos/Vaibhav_Chair.jpg',
    linkedin: 'https://www.linkedin.com/in/vaibhav-k-kumbar-7840a425a/',
    bio: 'Lead coordinator directing the strategic vision, partnerships, and chapter growth at GM University ACM Chapter.'
  },
  {
    id: 'maqsood-md-2026',
    name: 'Maqsood Md',
    role: 'Vice Chair',
    category: 'core',
    image: '/ACM_Photos/maqsood_vicechair.jpg',
    linkedin: 'https://www.linkedin.com/in/maqsood-md-24b05b296/',
    bio: 'Oversees operational execution, technical symposiums, and inter-collegiate event collaboration.'
  },
  {
    id: 'komala-bm-2026',
    name: 'Komala B M',
    role: 'Secretary',
    category: 'core',
    image: '/ACM_Photos/KOMALA_secaratary.jpg',
    linkedin: 'https://www.linkedin.com/in/komala-b-m-b521b6333/',
    bio: 'Manages official correspondence, records, member compliance, and ACM headquarters reporting.'
  },
  {
    id: 'abhiram-naik-2026',
    name: 'Abhiram Naik',
    role: 'Membership Chair',
    category: 'core',
    image: '/ACM_Photos/ABHIRAM_memchair.jpg',
    linkedin: 'https://www.linkedin.com/in/abhiramgirishnaik/',
    bio: 'Fosters student engagement, membership onboarding, outreach campaigns, and chapter community vitality.'
  },
  {
    id: 'sujal-devarmane-2026',
    name: 'Sujal Devarmane',
    role: 'Treasurer',
    category: 'core',
    image: '/ACM_Photos/Sujal_Devarmane.jpg',
    linkedin: 'https://www.linkedin.com/in/sujal-k-devarmane-66a713285/',
    bio: 'Administers chapter budgets, financial audits, sponsorships, and resource allocation.'
  },
  {
    id: 'sneha-ts-2026',
    name: 'Sneha T S',
    role: 'Chapter Member',
    category: 'member',
    image: '/ACM_Photos/snehats.jpg',
    linkedin: 'https://www.linkedin.com/in/sneha-tapal-6306bb1b3/',
    bio: 'Active member contributing to technical workshops, coding drives, and event logistics.'
  },
  {
    id: 'sriharika-k-2026',
    name: 'Sriharika K',
    role: 'Chapter Member',
    category: 'member',
    image: '/ACM_Photos/sriharika.jpg',
    linkedin: 'https://www.linkedin.com/in/shriharika-k-824453299',
    bio: 'Engaged in competitive programming initiatives, peer learning, and hackathon organization.'
  },
  {
    id: 'mohammed-bandulal-2026',
    name: 'Mohammed Bandulal',
    role: 'Chapter Member',
    category: 'member',
    image: '/ACM_Photos/md.afridi.jpg',
    linkedin: 'https://www.linkedin.com/in/mohammed-afridi-956676323',
    bio: 'Core volunteer facilitating hands-on project mentoring, technical challenges, and community workshops.'
  },
  {
    id: 'nihal-hadimani-2026',
    name: 'Nihal Hadimani',
    role: 'Chapter Member',
    category: 'member',
    image: '/ACM_Photos/nihal.jpg',
    linkedin: 'https://www.linkedin.com/in/nihal-hadimani-5a52b3328/',
    bio: 'Supports event planning, creative media coordination, and developer hackathon sessions.'
  }
];

export const STUDENT_TEAM_2027: TeamMember[] = [
  {
    id: 'komala-bm-2027',
    name: 'Komala B M',
    role: 'Chapter Chair',
    category: 'core',
    image: '/ACM_Photos/KOMALA_secaratary.jpg',
    linkedin: 'https://www.linkedin.com/in/komala-b-m-b521b6333/',
    bio: 'Chapter Chair directing chapter initiatives, academic partnerships, and community growth at GM University ACM Chapter.'
  },
  {
    id: 'bi-bi-hafsa-2027',
    name: 'Bi Bi Hafsa',
    role: 'Vice Chair',
    category: 'core',
    image: '/ACM_Photos/bi_bi_hafsa.jpg',
    linkedin: 'https://www.linkedin.com/in/hafsa',
    bio: 'Vice Chair directing executive initiatives, operational execution, and student symposiums at GM University ACM Chapter.'
  },
  {
    id: 'chandana-gn-2027',
    name: 'Chandana GN',
    role: 'Treasurer',
    category: 'core',
    image: '/ACM_Photos/chandana_gn.jpg',
    bio: 'Treasurer administering chapter budgets, financial audits, sponsorships, and resource allocation for GM University ACM Chapter.'
  },
  {
    id: 'suma-b-2027',
    name: 'Suma B',
    role: 'Chapter Member',
    category: 'member',
    image: '/ACM_Photos/suma_b.jpg',
    bio: 'Active chapter member guiding technical initiatives, academic workshops, and student community growth at GM University ACM Chapter.'
  },
  {
    id: 'bhagyalaxmi-hiremath-2027',
    name: 'Bhagyalaxmi Hiremath',
    role: 'Chapter Member',
    category: 'member',
    image: '/ACM_Photos/bhagyalaxmi_hiremath.jpg',
    bio: 'Active chapter member contributing to community programs, academic collaborations, and student empowerment at GM University ACM Chapter.'
  },
  {
    id: 'harish-g-mudda-2027',
    name: 'Harish G Mudda',
    role: 'Chapter Member',
    category: 'member',
    image: '/ACM_Photos/harish_g_mudda.jpg',
    bio: 'Active chapter member supporting flagship hackathons, technical tracks, and student coding initiatives at GM University ACM Chapter.'
  },
  {
    id: 'sriharika-k-2027',
    name: 'Sriharika K',
    role: 'Chapter Member',
    category: 'member',
    image: '/ACM_Photos/sriharika.jpg',
    linkedin: 'https://www.linkedin.com/in/shriharika-k-824453299',
    bio: 'Engaged in competitive programming initiatives, peer learning, and hackathon organization.'
  },
  {
    id: 'maqsood-md-2027',
    name: 'Maqsood Md',
    role: 'Chapter Member',
    category: 'member',
    image: '/ACM_Photos/maqsood_vicechair.jpg',
    linkedin: 'https://www.linkedin.com/in/maqsood-md-24b05b296/',
    bio: 'Active chapter member contributing to technical symposiums and inter-collegiate event collaboration.'
  },
  {
    id: 'vaibhav-kumbar-2027',
    name: 'Vaibhav Kumbar',
    role: 'Chapter Member',
    category: 'member',
    image: '/ACM_Photos/Vaibhav_Chair.jpg',
    linkedin: 'https://www.linkedin.com/in/vaibhav-k-kumbar-7840a425a/',
    bio: 'Active chapter member supporting technical workshops, coding tracks, and chapter initiatives at GM University ACM Chapter.'
  }
];

export const BATCH_TEAMS: Record<'2026' | '2027', TeamMember[]> = {
  '2026': STUDENT_TEAM_2026,
  '2027': STUDENT_TEAM_2027
};

export const STUDENT_TEAM: TeamMember[] = STUDENT_TEAM_2027;

export const PROFESSIONAL_MEMBERS: ProfessionalMember[] = [
  {
    id: 'shivanagowda',
    name: 'Dr. Shivanagowda GM',
    role: 'Faculty Sponsor',
    image: '/ACM_Photos/shivanagowda.jpg',
    linkedin: 'https://www.linkedin.com/in/shivanagowda-g-m-0b54605/',
    department: 'Computer Science & Engineering'
  },
  {
    id: 'asha-k',
    name: 'Dr. Asha K',
    role: 'Professional Member',
    image: '/ACM_Photos/ashak.jpg',
    linkedin: 'https://www.linkedin.com/in/asha-k-78018730b/',
    department: 'Computer Science & Engineering'
  },
  {
    id: 'firoz-khan',
    name: 'Firoz Khan',
    role: 'Professional Member',
    image: '/ACM_Photos/firoz.jpg',
    linkedin: 'https://www.linkedin.com/in/firozkhan2017/',
    department: 'Information Science & Engineering'
  },
  {
    id: 'imran-khan',
    name: 'Imran Khan',
    role: 'Professional Member',
    image: '/ACM_Photos/imran_khan.jpg',
    department: 'Computer Applications'
  },
  {
    id: 'chethan-basavaraddi',
    name: 'Dr. Chethan Chandra S Basavaraddi',
    role: 'Professional Member',
    image: '/ACM_Photos/Chethan_Basavaraddi.jpg',
    linkedin: 'https://www.linkedin.com/in/dr-chethan-chandra-s-basavaraddi-5b523750/',
    department: 'Computer Science & Engineering'
  },
  {
    id: 'shilpa-n',
    name: 'Shilpa N',
    role: 'Professional Member',
    image: '/ACM_Photos/shipla.jpg',
    department: 'Computer Science & Engineering'
  },
  {
    id: 'ashwini-gt',
    name: 'Ashwini G T',
    role: 'Professional Member',
    image: '/ACM_Photos/ashwini_ise.jpg',
    linkedin: 'https://linkedin.com/in/ashwinigt',
    department: 'Information Science & Engineering'
  },
  {
    id: 'chethan-gs',
    name: 'Chethan G S',
    role: 'Professional Member',
    image: '/ACM_Photos/chethan.jpg',
    linkedin: 'https://www.linkedin.com/in/chethan-gs-3b9b0021b/',
    department: 'Computer Science & Engineering'
  },
  {
    id: 'shreyanka-mn',
    name: 'Shreyanka M N',
    role: 'Professional Member',
    image: '/ACM_Photos/SHREYA_CSE.jpg',
    linkedin: 'https://www.linkedin.com/in/shreyankamn/',
    department: 'Computer Science & Engineering'
  }
];

export const EVENTS_DATA: EventItem[] = [
  // Previous events
  {
    id: 'coderush-1',
    title: 'CodeRush 1.0 – The Kattis Challenge',
    status: 'previous',
    image: '/ACM_Photos/acm_KATTIS.jpg',
    description: 'CodeRush 1.0 is an online coding competition hosted on Kattis, designed to test problem-solving speed, logic, and algorithmic skills.',
    fullDetails: 'Students solved timed algorithmic challenges across varying difficulty levels on Kattis. Top performers received cash prizes, ACM certificates of excellence, and ranking on the campus leaderboard.',
    venue: 'Online / Kattis Platform'
  },
  {
    id: 'quizcord-1',
    title: 'QuizCord – The Ultimate Tech Trivia',
    status: 'previous',
    image: '/ACM_Photos/acm_quiz.png',
    description: 'QuizCord is a fast-paced online quiz competition hosted on Discord, where tech meets trivia! Compete in live rounds filled with questions on programming, cybersecurity, AI, tech history, and more.',
    fullDetails: 'Hosted in dedicated Discord voice and interactive bot channels with real-time buzzer rounds, rapid-fire technical trivia, and leaderboard updates across programming paradigms, security concepts, and computer history.',
    venue: 'GMU ACM Official Discord Server'
  },
  {
    id: 'ignitron-2k24',
    title: 'IGNITRON 2K24',
    status: 'previous',
    image: '/ACM_Photos/_AN74186.JPG',
    description: 'IGNITRON is the annual tech fest of GM University, powered by the ACM Student Chapter. It is a celebration of innovation, coding, and creativity bringing together brilliant minds through hackathons, tech talks, workshops, and competitions.',
    fullDetails: 'Over 500+ participants gathered across state colleges for a 24-hour hackathon, robotics arena, paper presentations, and algorithmic showdowns judged by industry engineers and academic leaders.',
    venue: 'GM University Main Auditorium & Labs'
  },
  // Upcoming events
  {
    id: 'dsp-ai-workshop',
    title: 'Building Advanced AI Applications and Agents',
    status: 'upcoming',
    image: '/ACM_Photos/Speaker will be realved soon Stay tuned !.png',
    description: 'On November 6th, alongside the buzz of Confluence at GM University, the ACM Student Chapter is organizing a Distinguished Speaker Program (DSP) workshop exclusively for students and tech enthusiasts.',
    fullDetails: 'This hands-on session will explore how to build powerful AI applications and intelligent agents using the latest Large Language Models (LLMs) and Vision Language Models (VLMs). Participants will gain practical experience with prompt engineering, agentic tool-calling workflows, vector databases, and real-time deployment.',
    date: 'November 6th, 2025',
    venue: 'Confluence 2025, GM University Campus',
    linkText: 'Know More',
    isDspWorkshop: true
  },
  {
    id: 'ignitron-2k25',
    title: 'IGNITRON 2K25',
    status: 'upcoming',
    image: '/ACM_Photos/DSC_0138.JPG',
    description: 'Get ready for IGNITRON 2K25, the flagship national-level tech fest of GM University, powered by the ACM Student Chapter. This year, we’re taking innovation to new heights with a thrilling lineup.',
    fullDetails: 'A national-level congregation featuring 36-hour hackathons, automated algorithmic tournaments, hardware showcases, paper presentations, and keynote addresses from pioneering computing researchers.',
    venue: 'GM University Campus, Davanagere',
    linkText: 'Know More',
    linkUrl: 'https://gmu.ac.in/public/ignitron/'
  },
  {
    id: 'coderush-2',
    title: 'CodeRush 2.0 – The Kattis Challenge',
    status: 'upcoming',
    image: '/ACM_Photos/acm_KATTIS.jpg',
    description: 'CodeRush 2.0 is an online coding competition hosted on Kattis, designed to test problem-solving speed, logic, and algorithmic skills.',
    fullDetails: 'Second edition featuring newly crafted algorithmic problem sets, enhanced test cases, strict runtime limits, and division brackets for novice and expert coders.',
    venue: 'Online / Kattis Platform',
    linkText: 'COMING SOON...'
  }
];
