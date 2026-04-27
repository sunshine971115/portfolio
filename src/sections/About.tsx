import Section from '../components/Section';

const About = () => (
  <Section id="about" eyebrow="Introduction" title="About Me">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-lg leading-relaxed text-white/70 md:text-xl">
        Hello! I'm <span className="text-white">M. Vamsi Praneeth</span>, a budding{' '}
        <span className="text-accent">Full Stack Developer</span> and{' '}
        <span className="text-accent">AI/ML enthusiast</span>. I dive into front-end and back-end
        technologies and explore tools like TensorFlow and PyTorch. Excited to connect and
        collaborate on innovative projects.
      </p>
    </div>
  </Section>
);

export default About;
