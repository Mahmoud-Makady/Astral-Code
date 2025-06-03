import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import { TEAM_MEMBERS } from '../data/team';

const Team: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const displayMembers = compact ? TEAM_MEMBERS.slice(0, 4) : TEAM_MEMBERS;
  
  const socialIcons = {
    github: <Github size={18} />,
    linkedin: <Linkedin size={18} />,
    twitter: <Twitter size={18} />,
  };

  return (
    <Section
      id="team"
      title="Our Team"
      subtitle="Meet the talented individuals behind Astral-Code who bring our projects to life."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayMembers.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <div className="relative group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent opacity-70"></div>
              
              {/* Social links */}
              <div className="absolute top-4 right-4 flex gap-2">
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-900/80 rounded-full text-white hover:bg-primary-500 transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    {socialIcons.github}
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-900/80 rounded-full text-white hover:bg-primary-500 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    {socialIcons.linkedin}
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-900/80 rounded-full text-white hover:bg-primary-500 transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    {socialIcons.twitter}
                  </a>
                )}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary-400 mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
              
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs bg-dark-800 text-gray-300 px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Team;