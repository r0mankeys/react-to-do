export default function ThemeSwitcher({ changeTheme }) {
  return (
    <button
      aria-label="theme switch toggle"
      onClick={() => changeTheme()}
      className="theme-switch-container"
    >
      <div className="switch-icon"></div>
    </button>
  );
}
