'use client';

import { useActionState } from 'react';
import { adminLogin } from '../actions';

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(adminLogin, null);

  return (
    <div className="admin-login-card">
      <h1>Admin Panel</h1>
      <p className="admin-login-sub">Sign in to view quote and contact requests.</p>
      <form action={formAction}>
        <div>
          <label htmlFor="admin-username">Username</label>
          <input
            id="admin-username"
            name="username"
            type="text"
            autoComplete="username"
            required
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        {state?.error ? (
          <p className="admin-login-error" role="alert">{state.error}</p>
        ) : null}
        <button type="submit" disabled={pending}>
          {pending ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}
