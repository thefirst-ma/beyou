/*
 * @Author: xinyue
 * @Date: 2023-04-18 16:13:15
 * @Description: 
 */
import { parseISO, format } from 'date-fns';

export default function Date({ dateString }: { dateString: string}) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}