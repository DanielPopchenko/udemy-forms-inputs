import { useState } from 'react';

export default function LoginViaState() {
  const [inputValues, setInputValues] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    console.log(inputValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={inputValues.email}
            onChange={(e) => setInputValues((prev) => ({ ...prev, email: e.target.value }))}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={inputValues.password}
            onChange={(e) => setInputValues((prev) => ({ ...prev, password: e.target.value }))}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" type="submit">
          Login
        </button>
      </p>
    </form>
  );
}
