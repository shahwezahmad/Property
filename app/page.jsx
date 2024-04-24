// page.tsx
import Link from "next/link";


const HomePage = () => {
  return (
    <div>
      <h1>This is the Page Component</h1>
      <p>Page content goes here...</p>
      <Link href="/properties">p</Link>

    </div>
  );
};

export default HomePage;
