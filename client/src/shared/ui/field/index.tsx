import styles from './styles.module.scss';

type Props = {
  text?: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  icon?: JSX.Element;
};

const Field = ({ text, value, onChange, icon }: Props) => (
  <div className={styles.container}>
    {text && <div className={styles.name}>{text}</div>}
    <div className={styles.field}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {icon && <span className={styles.icon}>{icon}</span>}
    </div>
  </div>
);

export { Field };
