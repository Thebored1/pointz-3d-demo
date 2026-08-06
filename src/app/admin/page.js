import { redirect } from 'next/navigation';
import { isAdmin } from '../../lib/admin';

// /admin is a landing hub: send logged-in admins to the entries table and
// everyone else to the login page.
export default async function AdminIndexPage() {
  redirect((await isAdmin()) ? '/admin/entries' : '/admin/login');
}
