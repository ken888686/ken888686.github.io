import moment from 'moment';
import experience from '../../models/experience';

function TimelineItem({ experience }: { experience: experience }) {
  const { id, company, title, start, end, description } = experience;

  return (
    <li className='relative mb-5 before:absolute before:-top-6 before:-left-[30px] before:h-[calc(100%+30px)] before:w-[1px] before:-bg--jet after:absolute after:top-1 after:-left-[33px] after:h-2 after:w-2 after:rounded-full after:-bg--gradient-yellow after:shadow-6'>
      <h4 className='text-sm'>{company}</h4>
      <div className='my-2 text-xs'>
        <span className='-text--light-gray-70'>{title}</span>
      </div>
      <span className='leading-relaxed -text--vegas-gold'>
        {moment(start).format('yyyy/MM/DD')} -{' '}
        {moment(end).format('yyyy/MM/DD') === moment().format('yyyy/MM/DD')
          ? 'Present'
          : moment(end).format('yyyy/MM/DD')}
      </span>
      <p className=''>{description}</p>
    </li>
  );
}

export default TimelineItem;
