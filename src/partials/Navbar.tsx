import { NavMenu, NavMenuItem, Section } from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavMenu>
      <NavMenuItem href="/posts/">Blog</NavMenuItem>
      <NavMenuItem href="https://www.github.com/danpatrickoneill">
        GitHub
      </NavMenuItem>
    </NavMenu>
  </Section>
);

export { Navbar };
