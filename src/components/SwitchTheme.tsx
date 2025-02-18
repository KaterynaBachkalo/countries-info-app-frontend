import { useTheme } from '../contexts/useTheme';

const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-buttons">
      <button
        type="button"
        className={`theme ${theme === 'light' ? 'dark' : 'light'}`}
        onClick={toggleTheme}
      >
        Light Theme
      </button>
      <button
        type="button"
        className={`theme ${theme === 'dark' ? 'dark' : 'light'}`}
        onClick={toggleTheme}
      >
        Dark Theme
      </button>
    </div>
  );
};

export default SwitchTheme;
