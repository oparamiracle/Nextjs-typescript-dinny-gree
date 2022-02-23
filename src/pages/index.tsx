import Head from "next/head";
import FirstMainComp from "../components/FirstMainComp";
import NavbarComp from "../components/NavbarComp";
import TopNavComp from "../components/TopNavComp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DinnyGreen</title>
      </Head>

      <header>
        <TopNavComp />
        <NavbarComp />
      </header>

      <main>
        <FirstMainComp />
      </main>
    </div>
  );
}
