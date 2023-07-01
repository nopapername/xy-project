import classnames from 'classnames';
import styles from './index.less';

export default function QuestionsPage() {
  return (
    <section className={styles.questions}>
      <div className={styles.questions__container}>
        <h1>Questions & <br />answers</h1>
        <div className={styles.questions__container__content}>{new Array(8).fill(0).map((item, i) => i % 2 === 0 ? <span>Q: Descriptive text Descriptive text Descriptive text Descriptive text Descriptive text Descriptive text Descriptive text</span> : <span>A: Descriptive text Descriptive text Descriptive text</span>)}</div>
        <div className={styles.questions__container__tips}>Please leave the message <a href="#" rel="noopener noreferrer">here</a>, if you have ohter questions</div>
      </div>
    </section>
  );
}
