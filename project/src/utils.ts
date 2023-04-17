export function formatTime(time: number) {
  if ((time / 3600) >= 1.0) {
    const hours = Math.floor(time / 3600);
    time = time - hours * 3600;

    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);

    return `${hours }:${ min }:${ sec}`;
  } else {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);

    return `${min }:${ sec}`;
  }
}

