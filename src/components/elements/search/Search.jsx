'use client';

import { CiSearch } from 'react-icons/ci';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Search({ placeholder, ...props }) {
  return (
    <div className="relative">
      <CiSearch className="w-7 h-7 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
      <Input
        type="text"
        placeholder={placeholder || 'Cari Kategori'}
        className="pl-12 pr-16 py-6 bg-slate-100 border-slate-100"
        {...props}
      />
      <Button className="w-10 h-9 grid place-content-center absolute right-3 top-1/2 -translate-y-1/2 bg-gray-300">
        <CiSearch className="w-7 h-7 text-white" />
      </Button>
    </div>
  );
}
