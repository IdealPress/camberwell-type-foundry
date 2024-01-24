import Head from "next/head";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="dark:bg-black transition-colors bg-stone-50">
    <Head>
      <title>Camberwell College of Arts Type Foundry</title>
      <meta name="description" content="Camberwell Type Foundry" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    
    <Navigation />
    <main className="px-6 min-h-screen">      
      {children}
    </main>

    <Footer />
  </div>
);

export default Layout;
