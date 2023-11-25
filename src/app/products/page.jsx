import Products from '@/components/pages/Products';
import { Button } from '@/components/ui/button';
import React from 'react';

export const metadata = {
  title: 'EzRent | Products',
  description: 'Generated by create next app',
};

export default function page() {
  return (
    <div className="grid gap-3 w-fit m-20">
      <Products />
    </div>
  );
}