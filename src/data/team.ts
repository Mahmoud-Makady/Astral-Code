export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'member1',
    name: 'Alex Johnson',
    role: 'Founder & Lead Developer',
    bio: 'Alex has over 10 years of experience in web development and has worked with startups and established companies alike to create innovative digital solutions.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    skills: ['React', 'Node.js', 'AWS', 'System Architecture'],
    social: {
      github: 'https://github.com/alexj',
      linkedin: 'https://linkedin.com/in/alexj',
      twitter: 'https://twitter.com/alexj'
    }
  },
  {
    id: 'member2',
    name: 'Sarah Ahmed',
    role: 'UX/UI Designer',
    bio: 'Sarah specializes in creating beautiful, intuitive user interfaces that blend aesthetics with functionality. Her designs focus on delivering exceptional user experiences.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    skills: ['UI Design', 'UX Research', 'Figma', 'Adobe Creative Suite'],
    social: {
      github: 'https://github.com/sarahdesign',
      linkedin: 'https://linkedin.com/in/sarahdesign',
      twitter: 'https://twitter.com/sarahdesign'
    }
  },
  {
    id: 'member3',
    name: 'Michael Chen',
    role: 'Backend Developer',
    bio: 'Michael is an expert in building robust backend systems that scale. He specializes in database design, API development, and server optimization.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    social: {
      github: 'https://github.com/michaelc',
      linkedin: 'https://linkedin.com/in/michaelc'
    }
  },
  {
    id: 'member4',
    name: 'Elena Rodriguez',
    role: 'Frontend Developer',
    bio: 'Elena has a passion for creating seamless, responsive web applications. She excels at turning designs into functional, beautiful interfaces.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    skills: ['JavaScript', 'React', 'CSS/SASS', 'Tailwind'],
    social: {
      github: 'https://github.com/elenar',
      linkedin: 'https://linkedin.com/in/elenar',
      twitter: 'https://twitter.com/elenar'
    }
  }
];