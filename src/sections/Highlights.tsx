import Section from '../components/Section';
import scholar from '../assets/images/scholarship.png';
import project from '../assets/images/project.png';
import codechef from '../assets/images/codechef.png';
import leetcode from '../assets/images/leetcode.png';

const items = [
  { icon: scholar, value: '2019', label: 'NTSE Scholar' },
  { icon: project, value: '6+', label: 'Completed Projects' },
  { icon: codechef, value: '4★', label: 'CodeChef Rating' },
  { icon: leetcode, value: '150', label: 'LeetCode Problems Solved' },
];

const Highlights = () => (
  <Section eyebrow="What I bring" title="Why Hire Me?">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="glass flex flex-col items-center gap-3 p-6 text-center transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
        >
          <img src={item.icon} alt="" className="h-12 w-12 object-contain" />
          <p className="text-3xl font-bold text-accent">{item.value}</p>
          <p className="text-sm text-white/60">{item.label}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Highlights;
