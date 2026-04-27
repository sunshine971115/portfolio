import Section from '../components/Section';
import SkillBar from '../components/SkillBar';

const groups = [
  {
    name: 'Languages',
    skills: [
      { label: 'HTML', percentage: 70 },
      { label: 'CSS', percentage: 45 },
      { label: 'JavaScript', percentage: 50 },
      { label: 'C', percentage: 70 },
      { label: 'C++', percentage: 60 },
      { label: 'Python', percentage: 65 },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    skills: [
      { label: 'React', percentage: 70 },
      { label: 'NumPy', percentage: 60 },
      { label: 'Pandas', percentage: 50 },
      { label: 'TensorFlow', percentage: 55 },
    ],
  },
];

const Skills = () => (
  <Section id="skills" eyebrow="My toolbox" title="Skills">
    <div className="grid gap-12 md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.name} className="glass space-y-6 p-8">
          <h3 className="text-xl font-semibold text-white">{group.name}</h3>
          <div className="space-y-5">
            {group.skills.map((s) => (
              <SkillBar key={s.label} label={s.label} percentage={s.percentage} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
