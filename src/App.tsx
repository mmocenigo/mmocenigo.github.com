import { Contact } from './components/Contact';
import { Portrait } from './components/Portrait';
import { formatInterests, profile as defaultProfile, type Profile } from './content/profile';

interface AppProps {
  profile?: Profile;
}

export function App({ profile = defaultProfile }: AppProps) {
  return (
    <main className="page">
      <article className="card">
        <Portrait name={profile.name} />
        <div className="card__body">
          <header className="intro">
            <h1>{profile.name}</h1>
            <p className="intro__title">{profile.title}</p>
            <p className="intro__interests">{formatInterests(profile.interests)}</p>
          </header>
          <section className="bio" aria-label="About">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
          <Contact emailDisplay={profile.emailDisplay} linkedInUrl={profile.linkedInUrl} />
        </div>
      </article>
    </main>
  );
}
