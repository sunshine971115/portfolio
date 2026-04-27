import { useState, type FormEvent } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Section from '../components/Section';

type FormState = { name: string; email: string; message: string };
type Status = 'idle' | 'sending' | 'success' | 'error';

const API_URL = (import.meta.env.VITE_API_URL ?? 'http://localhost:3033') + '/api/send';

const initial: FormState = { name: '', email: '', message: '' };

const socials = [
  { href: 'https://www.facebook.com/', icon: faFacebook, label: 'Facebook' },
  { href: 'https://www.instagram.com/mangipudivamsi', icon: faInstagram, label: 'Instagram' },
  { href: 'https://twitter.com/', icon: faTwitter, label: 'Twitter' },
];

const Contact = () => {
  const [data, setData] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await axios.post(API_URL, data);
      setStatus('success');
      setData(initial);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <Section id="contact" eyebrow="Get in touch" title="Contact Me">
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="glass space-y-6 p-8">
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-accent" />
              <a href="tel:7396425771" className="text-white/80 hover:text-accent">
                +91-7396425771
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-accent" />
              <a
                href="mailto:vamsipraneeth2004@gmail.com"
                className="text-white/80 hover:text-accent"
              >
                vamsipraneeth2004@gmail.com
              </a>
            </li>
          </ul>
          <hr className="border-white/10" />
          <ul className="flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-accent/50 hover:text-accent hover:shadow-glow"
                >
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="glass space-y-4 p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={data.name}
              onChange={onChange}
              className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-white placeholder-white/40 outline-none transition focus:border-accent focus:bg-white/10"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={data.email}
              onChange={onChange}
              className="h-12 rounded-lg border border-white/10 bg-white/5 px-4 text-white placeholder-white/40 outline-none transition focus:border-accent focus:bg-white/10"
            />
          </div>
          <textarea
            name="message"
            rows={6}
            placeholder="Message"
            required
            value={data.message}
            onChange={onChange}
            className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-accent focus:bg-white/10"
          />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2 h-4 w-4" />
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'success' && (
              <span className="text-sm text-emerald-400">Message sent! 🎉</span>
            )}
            {status === 'error' && (
              <span className="text-sm text-red-400">Something went wrong. Try again.</span>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
