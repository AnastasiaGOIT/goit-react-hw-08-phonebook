import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={css.title}>
      <p>Welcome, </p>
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
