import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';
import { profile, type Profile } from './content/profile';

describe('<App />', () => {
  it('shows the name as the only top-level heading', () => {
    render(<App />);
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent('Marissa Mocenigo');
  });

  it('shows the job title and interests', () => {
    render(<App />);
    expect(screen.getByText('Software Engineering Manager')).toBeInTheDocument();
    expect(
      screen.getByText('Good Food Enthusiast, Dedicated Cat Parent, and Hobby Crafter'),
    ).toBeInTheDocument();
  });

  it('renders every bio paragraph', () => {
    render(<App />);
    const about = screen.getByRole('region', { name: 'About' });
    for (const paragraph of profile.bio) {
      expect(within(about).getByText(paragraph)).toBeInTheDocument();
    }
  });

  it('includes a described portrait', () => {
    render(<App />);
    expect(screen.getByRole('img', { name: 'Portrait of Marissa Mocenigo' })).toBeInTheDocument();
  });

  it('offers contact details with a safe external LinkedIn link', () => {
    render(<App />);
    const contact = screen.getByRole('region', { name: 'Get in touch!' });
    expect(within(contact).getByText('marissa (at) mocenigo (dot) me')).toBeInTheDocument();

    const link = within(contact).getByRole('link', { name: /linkedin/i });
    expect(link).toHaveAttribute('href', profile.linkedInUrl);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });

  it('renders whatever profile it is given', () => {
    const custom: Profile = {
      ...profile,
      name: 'Test Person',
      bio: ['Only paragraph.'],
      linkedInUrl: 'https://www.linkedin.com/in/test-person/',
    };
    render(<App profile={custom} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Person');
    expect(screen.getByText('Only paragraph.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      custom.linkedInUrl,
    );
  });
});
