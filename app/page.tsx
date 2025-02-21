'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import googleLogo from '@/public/google-logo.png';
import Input from '@/components/Input';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function Home() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams ? searchParams?.get('search')?.toString() || '' : ''
  );

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = search;
    const params = new URLSearchParams(searchParams ? searchParams : '');
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    params.set('withSearchInput', 'true');
    replace(`/results?${params.toString()}`);
  };

  useEffect(() => {
    const searchQuery = searchParams
      ? searchParams?.get('search')?.toString() || ''
      : '';
    if (!searchQuery) {
      setSearch('');
    }

    const params = new URLSearchParams(searchParams ? searchParams : '');
    params.delete('withSearchInput');
    replace(`/?${params.toString()}`);
  }, [searchParams, replace]);

  return (
    <main className={styles.container}>
      <section className={styles.mainSection}>
        <Image src={googleLogo} alt='Google Logo' />
      </section>
      <section>
        <form className={styles.form} onSubmit={handleSearch}>
          <Input
            type='search'
            placeholder='Search animal...'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className={styles.formDiv}>
            <Button title='Search' disabled={!search} />
          </div>
        </form>
      </section>
    </main>
  );
}
