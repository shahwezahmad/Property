// layout.jsx

import '@/assets/styles/globals.css'

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
        {/* Header content */}
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Footer content */}
      </footer>
      </body>
    </html>
  );
};

export default MainLayout;
