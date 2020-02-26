import { NextPage } from 'next';
import withLayout from '../components/HigherOrderLayout';

const About: NextPage = () => (
  <section className="page">
    <p>
      Simple Scrum poker app.
    </p>

    <p>
      Can be used as PWA.
      <br />
      Trying out Next.js with React and Typescript.
    </p>

    <p>
      <a href="https://github.com/RonaldR/scrumpoker">https://github.com/RonaldR/scrumpoker</a>
    </p>
  </section>
);

export default withLayout(About, 'about');
