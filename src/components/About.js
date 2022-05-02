import myPhoto from '../assets/me.jpeg';
import classes from './About.module.scss';

export default function About() {
  const title = 'Hi! I\'m Aaron.';
  return (
    <section className={classes.about}>
      <div className="container flex justify-between mx-auto text-center border-2 border-red-500">
        <div className="flex flex-col justify-center w-full align-middle">
          <h1 className="font-medium">{title}</h1>
          <p className="">{title}</p>
        </div>
        <div>
          <img
            className="object-cover object-center w-5/6 rounded-lg"
            src={myPhoto}
            alt="My handsome mask."
          />
        </div>
      </div>
    </section>
  );
}
