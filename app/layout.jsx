// layout.jsx

import '@/assets/styles/globals.css'

import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

export const metadata = {
  title:'Property pulse',
  description:'Find your dream property here',
  keywords:'rental, house, find properties'
}

const MainLayout = ({ children }) => {
  return (
    <html>
        <body>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
