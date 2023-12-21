import React from 'react';

export const LoginForm = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="inputEmail"></label>
          <input
            type="email"
            name="email"
            id="inputEmail"
            area-aria-describedby="emailHelp"
          />
          <div id="emailHelp">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div>
          <label htmlFor="inputPassword"></label>
          <input type="password" name="password" id="inputPassword" />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
