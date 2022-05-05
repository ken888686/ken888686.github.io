import IconList from './UI/IconList';
import skills from '../skills';

export default function Skills() {
  return (
    <div className="container px-5 py-10 mx-auto">
      <div className="mb-5 text-center">
        <h1 className="text-5xl font-bold">
          <i className="bi bi-code" />
          Skills
          <i className="bi bi-code-slash" />
        </h1>
      </div>
      <IconList list={skills.pl} />
      <IconList list={skills.languages} />
      <IconList list={skills.frameworks} />
    </div>
  );
}
