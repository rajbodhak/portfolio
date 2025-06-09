import CustomScreen from "@/components/CustomScreen";
import Header from "@/components/Header";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <>
      <Header />
      <CustomScreen>
        <Intro />
      </CustomScreen>
    </>
  );
}
