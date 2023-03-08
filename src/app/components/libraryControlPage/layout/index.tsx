import { useTheme } from '@/app/store';
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../layouts/Navbar';
import DisplayMenu from '../../layouts/menu/DisplayMenu';
import { Container } from '../../utilities';
import Sidebar from './Sidebar';

const LibraryControlLayout: FC = () => {
  const { windowWidth } = useTheme();

  return (
    <>
      {/* nav */}
      <nav className="">
        <Navbar />
      </nav>
      <Container>
        <main className="grid py-4 lg:grid-cols-16 lg:gap-4">
          {/* sidebar */}
          {windowWidth >= 1024 && (
            <aside className="!sticky inset-x-0 top-4 h-fit flex-shrink lg:col-span-3 ">
              <Sidebar />
            </aside>
          )}
          <article className="pb-4 lg:col-span-full lg:col-start-4">
            {/* content */}
            <section className="">
              <Outlet />
            </section>
          </article>
        </main>
      </Container>
      {/* Sidebar for medium devices */}
      <DisplayMenu />
    </>
  );
};

export default LibraryControlLayout;
