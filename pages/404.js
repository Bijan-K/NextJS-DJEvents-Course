import Layout from '@/components/Layout';
import { FaExclamationTriangle } from 'react-icons/fa';
import styles from '@/styles/404.module.css';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle></FaExclamationTriangle> 404
        </h1>
        <Link href="/">go back home</Link>
      </div>
    </Layout>
  );
}
