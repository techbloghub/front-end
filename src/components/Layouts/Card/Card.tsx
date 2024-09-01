import Image from 'next/image';
import * as styles from './Card.css';

const data = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  title: '이벤트 루프는 무엇인가..? 넌 알고 있었니?',
  tags: ['react', 'type', 'next.js', 'javascript', '리액트'],
  date: '2024.01.02',
  company: 'Toss',
}));

export default function Card() {
  return (
    <section className={styles.wrapper}>
      {data.map((item) => (
        <article key={item.id} className={styles.cardWrapper}>
          <Image src="/images/example/image1.png" alt="card" width={250} height={130} />
          <div className={styles.bottomWrapper}>
            <div className={styles.tagWrapper}>
              {item.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <h2 className={styles.title}>{item.title}</h2>
            <footer className={styles.infoWrapper}>
              <div className={styles.textWrapper}>
                <p className={styles.company}>{item.company}</p>
                <time className={styles.date} dateTime={item.date}>
                  {item.date}
                </time>
              </div>
              <Image alt="copy" src="/images/buttons/copy.png" width={22} height={22} />
            </footer>
          </div>
        </article>
      ))}
    </section>
  );
}
