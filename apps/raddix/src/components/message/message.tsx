import styles from './message.module.scss';

interface MessageProps {
  text: string;
  status?: 'warning';
}

export const Message = ({ text }: MessageProps) => {
  return (
    <div className={styles.container}>
      <span>🛠️</span>
      <p>{text}</p>
    </div>
  );
};
