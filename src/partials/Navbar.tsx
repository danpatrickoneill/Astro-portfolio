import { NavMenu, NavMenuItem, Section } from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavMenu>
      <NavMenuItem href="/posts/">Blogs</NavMenuItem>
      <NavMenuItem href="/">GitHub</NavMenuItem>
      <NavMenuItem href="/">Twitter</NavMenuItem>
    </NavMenu>
  </Section>
);

export { Navbar };
