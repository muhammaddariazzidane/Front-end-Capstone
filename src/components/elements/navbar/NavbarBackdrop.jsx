import { twMerge } from 'tailwind-merge';

export default function NavbarBackdrop({ isMenuOpen, isSearchPopUpOpen }) {
  return (
    <div
      className={twMerge(
        'bg-black/60 z-10 min-h-screen absolute top-[4.2rem] sm:top-[3.6rem] left-0 bottom-0 right-0 lg:hidden transition-all duration-300 ease-in-out',
        `${isMenuOpen || isSearchPopUpOpen ? 'block' : 'hidden'}`
      )}
    ></div>
  );
}
