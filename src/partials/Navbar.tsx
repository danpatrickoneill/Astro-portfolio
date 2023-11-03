import { NavMenu, NavMenuItem, Section } from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavMenu>
      <NavMenuItem href="/posts/">Blog</NavMenuItem>
      <NavMenuItem href="https://www.github.com/danpatrickoneill">
        GitHub
      </NavMenuItem>
      <NavMenuItem href="./public/assets/DPO-Resume.pdf" target="blank">
        Resume
      </NavMenuItem>
    </NavMenu>
  </Section>
);

export { Navbar };
