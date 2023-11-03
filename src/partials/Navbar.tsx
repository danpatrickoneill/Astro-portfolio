import { NavMenu, NavMenuItem, Section } from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavMenu>
      <NavMenuItem href="/posts/">Blog</NavMenuItem>
      <NavMenuItem href="https://www.github.com/danpatrickoneill">
        GitHub
      </NavMenuItem>
      <NavMenuItem href="./public/assets/resume.pdf" target="blank">
        Resumé
      </NavMenuItem>
    </NavMenu>
  </Section>
);

export { Navbar };
