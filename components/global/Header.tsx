'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import avatar from '@/public/avatar.png';
import Input from '../Input';
import { TbGridDots } from 'react-icons/tb';
import styles from './Header.module.css';

function Header() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || ''
  );
  const withSearchInput = searchParams.get('withSearchInput');

  const handleSearch = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set('search', search);
    } else {
      params.delete('search');
    }
    replace(`/results?${params.toString()}`);
  }, 300);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (!searchQuery) {
      setSearch('');
    }
  }, [searchParams]);

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <p>Agile Content Frontend test</p>
        {withSearchInput === 'true' && (
          <Input
            type='search'
            placeholder='Search animal...'
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearch();
            }}
            onKeyDown={handleKeyDown}
            value={search}
          />
        )}
      </div>
      <div className={styles.userSection}>
        <TbGridDots size={30} />
        <Image
          src={avatar}
          alt='User Avatar'
          width={30}
          height={30}
          className={styles.avatar}
        />
      </div>
    </header>
  );
}

export default Header;
