import Head from "next/head";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="dark:bg-black transition-colors">
    <Head>
      <title>Camberwell College of Arts Type Foundry</title>
      <meta name="description" content="Camberwell Type Foundry" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="p-6 min-h-screen">
      <Navigation />
      {children}
    </main>

    <Footer />
  </div>
);

export default Layout;
