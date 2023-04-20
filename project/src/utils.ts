import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const SEC_IN_HOUR = 3600;
const MIN_IN_HOUR = 60;

export function humanizedDate(date: string){
  return dayjs(date).format('MMMM, DD, YYYY');
}

export function formatTime(time: number) {
  if ((time / SEC_IN_HOUR) >= 1.0) {
    const hours = Math.floor(time / SEC_IN_HOUR);
    time = time - hours * SEC_IN_HOUR;

    const min = Math.floor(time / MIN_IN_HOUR);
    const sec = Math.floor(time % MIN_IN_HOUR);

    return `${hours }:${ min }:${ sec}`;
  } else {
    const min = Math.floor(time / MIN_IN_HOUR);
    const sec = Math.floor(time % MIN_IN_HOUR);

    return `${min }:${ sec}`;
  }
}
