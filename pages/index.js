import HeadHTML from "../components/Head";
import Header from "../components/Header";
import Cover from "../components/Cover";
import About from "../components/About";
import TeamMember from "../components/TeamMember";

export default function Home() {
  return (
    <>
      <HeadHTML />
      <Header />
      <Cover />
      <About />
      <TeamMember />
    </>
  );
}
