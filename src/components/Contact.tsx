import { LinkedInIcon } from './LinkedInIcon';

interface ContactProps {
  emailDisplay: string;
  linkedInUrl: string;
}

export function Contact({ emailDisplay, linkedInUrl }: ContactProps) {
  return (
    <section className="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Get in touch!</h2>
      <p className="contact__email">{emailDisplay}</p>
      <a className="button" href={linkedInUrl} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
        <span>Connect on LinkedIn</span>
      </a>
    </section>
  );
}
