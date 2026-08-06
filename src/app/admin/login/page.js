import { redirect } from 'next/navigation';
import { isAdmin } from '../../../lib/admin';
import '../admin.css';
import LoginForm from './LoginForm';

export default async function AdminLoginPage() {
  if (await isAdmin()) {
    redirect('/admin/entries');
  }

  return (
    <div className="admin-login-shell">
      <LoginForm />
    </div>
  );
}
