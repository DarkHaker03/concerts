import styles from './styles.module.scss';

type Props = {
  close: React.Dispatch<React.SetStateAction<boolean>>;
};

const Filter = ({ close }: Props) => {
  console.log(3);
  return (
    <div>
      <div
        role="none"
        onClick={() => close(false)}
        className={styles.background}
      />
      <div className={styles.container}>
        <div>1</div>
      </div>
    </div>
  );
};

export { Filter };
