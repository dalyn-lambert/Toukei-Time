// https://www.reddit.com/r/nextjs/comments/12m8nzi/the_server_and_client_components_in_vercel_next/

'use client';
import { UTCDate } from '@date-fns/utc';
import { format } from 'date-fns';
export default function ClientDate() {
  return format(new UTCDate(), 'yyyy-MM-dd');
}
