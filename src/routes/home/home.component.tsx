import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.components";
import HeroSection from "../../components/hero-section/hero-section.component";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Directory />;
      <Outlet />
    </>
  );
};

export default Home;
