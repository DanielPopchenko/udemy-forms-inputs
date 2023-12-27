import ReusableInput from './ReusableInput';
import { hasMinLength, isEmail, isNotEmpty } from '../util/validation';
import { useInput } from '../hooks/useInput';

// ? Validating inputs
export default function LoginViaState() {
  const {
    value: emailValue,
    handleBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 6));

  const handleSubmit = (e) => {
    e.preventDefault();
    // ! Form validation also should be added
    if (emailHasError || passwordHasError) {
      console.log('error');

      return;
    }

    console.log(emailValue);
    console.log(passwordValue);
    console.log('sending HTTP request');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <ReusableInput
          label="Email"
          id="email"
          type="email"
          name="email"
          value={emailValue}
          error={emailHasError && 'Enter an email that includes "@"'}
          // !
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          required
        />

        <ReusableInput
          label="Password"
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          error={passwordHasError && 'Your password is too short!'}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          required
        />
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
