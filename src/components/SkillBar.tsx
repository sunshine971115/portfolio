import { useInView } from 'react-intersection-observer';

type Props = {
  label: string;
  percentage: number;
};

const SkillBar = ({ label, percentage }: Props) => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-baseline justify-between">
        <span className="font-medium text-white/90">{label}</span>
        <span className="text-sm text-white/50">{percentage}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft transition-[width] duration-1000 ease-out"
          style={{ width: inView ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
