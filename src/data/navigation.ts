import type { NavItem } from '../types';

export const announcementText = "Enterprise Software · Digital Transformation · Business Solutions";

export const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Careers', href: '/careers' },
];

export const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Leadership', href: '/about#story' },
      { label: 'Our Values', href: '/about#values' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'AI & Machine Learning', href: '/technologies#ai' },
      { label: 'Enterprise Web Apps', href: '/technologies#web' },
      { label: 'Cloud Architecture', href: '/technologies#cloud' },
      { label: 'Intelligent Automation', href: '/technologies#automation' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare & Life Sciences', href: '/industries#healthcare' },
      { label: 'Fintech & Banking', href: '/industries#fintech' },
      { label: 'Smart Manufacturing', href: '/industries#manufacturing' },
      { label: 'Logistics & Supply Chain', href: '/industries#logistics' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Insights & Research', href: '/#insights' },
      { label: 'Case Studies', href: '/technologies' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];
