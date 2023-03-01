import Link from 'next/link';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import styles from '@/styles/Event.module.css';

export default function EventPage({ evt }) {
  const deleteEvent = (e) => {
    console.log('hello');
  };

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <span>
              <FaPencilAlt />
            </span>
            <span className={styles.delete} onClick={deleteEvent}>
              <FaTimes /> Delete Event
            </span>
          </Link>
        </div>
        <span>
          {evt.date} at {evt.time}
          <h1>{evt.name}</h1>
          {evt.image && (
            <div className={styles.image}>
              <Image src={evt.image} width={920} height={600} />
            </div>
          )}
        </span>

        <h3>Performers:</h3>
        <p>{evt.performers}</p>

        <h3>Description</h3>
        <p>{evt.description}</p>

        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href={`/events`}>
          <span className={styles.back}>{'<'}Go Back</span>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
    revalidate: 1,
  };
}
