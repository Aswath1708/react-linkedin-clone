import DiscoverMore from "../home/DiscoverMore";
import Footer from "../home/Footer";
import { Newpost } from "../home/Newpost";
import News from "../home/News";
import { Posts } from "../home/Posts";
import PremiumCard from "../home/PremiumCard";
import { ProfileCard } from "../home/ProfileCard";

export const Home = () => {
  return (
    <div className="home">
      <div>
        <ProfileCard />
        <DiscoverMore/>
      </div>
      <div>
        <Newpost />
        <div className="sort-by"></div>
        <Posts />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem"}}>
        <News />
        <PremiumCard/>
        <Footer />
      </div>
    </div>
  );
};
