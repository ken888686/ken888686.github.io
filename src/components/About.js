import myPhoto from '../assets/me.jpeg';
// import classes from './About.module.scss';

export default function About() {
  /*
  const [frontendExperience, setFrontendExperiencedDays] = useState('');
  const [backendExperience, setBackendExperiencedDays] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const frontendTotalSeconds = moment().diff(moment('2019-06-01'), 'seconds');
      const frontendObj = {
        second: frontendTotalSeconds % 60,
        minute: Math.floor(frontendTotalSeconds / 60) % 60,
        hour: Math.floor(frontendTotalSeconds / (60 * 60)) % 24,
        day: Math.floor(frontendTotalSeconds / (60 * 60 * 24)) % 30,
        month: Math.floor(frontendTotalSeconds / (60 * 60 * 24 * 30)) % 12,
        year: Math.floor(frontendTotalSeconds / (60 * 60 * 24 * 30 * 12)),
      };
      setFrontendExperiencedDays(`
        ${frontendObj.year} years,
        ${frontendObj.month} months,
        ${frontendObj.day} days,
        ${frontendObj.hour} hours,
        ${frontendObj.minute} minutes,
        ${frontendObj.second} seconds`);

      const backendTotalSeconds = moment().diff(moment('2016-08-15'), 's');
      const backendObj = {
        second: backendTotalSeconds % 60,
        minute: Math.floor(backendTotalSeconds / 60) % 60,
        hour: Math.floor(backendTotalSeconds / (60 * 60)) % 24,
        day: Math.floor(backendTotalSeconds / (60 * 60 * 24)) % 30,
        month: Math.floor(backendTotalSeconds / (60 * 60 * 24 * 30)) % 12,
        year: Math.floor(backendTotalSeconds / (60 * 60 * 24 * 30 * 12)),
      };
      setBackendExperiencedDays(`
        ${backendObj.year} years,
        ${backendObj.month} months,
        ${backendObj.day} days,
        ${backendObj.hour} hours,
        ${backendObj.minute} minutes,
        ${backendObj.second} seconds`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  */
  const title = 'I\'m Aaron.';
  const description = [
    {
      id: 0,
      content: 'Web Development enthusiast.',
    },
    {
      id: 1,
      content: 'Enjoys technical challenges and providing elegant coding solutions.',
    },
  ];

  return (
    <div className="flex-1 hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row">
        <img
          src={myPhoto}
          alt="Me hide behind flowers"
          className="max-w-sm shadow-2xl mask mask-squircle"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Hey, there!
          </h1>
          <p className="py-6 text-4xl">{title}</p>
          {description.map((desc) => (
            <p
              key={desc.id}
              className="text-xl hover:subpixel-antialiased"
            >
              {desc.content}
            </p>
          ))}
          <div className="py-5">
            <a href="/" className="btn btn-primary" type="button">More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
