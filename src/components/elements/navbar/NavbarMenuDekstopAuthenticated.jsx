import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ButtonLogout from '@/components/elements/button/ButtonLogout';
import OpenStoreIcon from '@/components/icons/OpenStoreIcon';
import { LogOut, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PropTypes from 'prop-types';
import Link from 'next/link';
import useMyStore from '@/hooks/api/useMyStore';
import StoreIcon from '@/components/icons/StoreIcon';
import useMyProfile from '@/hooks/api/useMyProfile';

export default function NavbarMenuDekstopAuthenticated({ user }) {
  const { data: store } = useMyStore();
  const { data: profile } = useMyProfile();

  return (
    <ul className="flex gap-4 items-center">
      <li>
        <Link href="/cart">
          <Button size="icon" variant="ghost">
            <ShoppingCart />
          </Button>
        </Link>
      </li>

      <li>
        <Link href="/dashboard">
          <Button variant="ghost" className="flex gap-3">
            <span className="hidden lg:inline-block">{user.username}</span>
            <Avatar className="w-8 h-8">
              <AvatarImage src={profile?.profilePicture} />
              <AvatarFallback>{user.username[0]}</AvatarFallback>
            </Avatar>
          </Button>
        </Link>
      </li>

      <li>
        {store ? (
          <Link href="/store/dashboard">
            <Button className="flex gap-3 items-center px-8">
              <span>Toko Saya</span>
              <StoreIcon />
            </Button>
          </Link>
        ) : (
          <Link href="/store/open-store">
            <Button className="flex gap-3 items-center px-8">
              <span>Buka Toko</span>
              <OpenStoreIcon />
            </Button>
          </Link>
        )}
      </li>
      <li>
        <ButtonLogout
          size={'icon'}
          LogoutIcon={LogOut}
          classNameBtn={
            'flex gap-2 items-center text-red-600 bg-white hover:bg-gray-100 hover:text-red-500 transition-all duration-300'
          }
        />
      </li>
    </ul>
  );
}

NavbarMenuDekstopAuthenticated.propTypes = {
  user: PropTypes.object,
};
