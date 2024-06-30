import ParallaxScrollView from "@/components/ParallaxScrollView";
import Home from "../pages/home";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      showHeader={false}
      backgroundImage={require("../../assets/images/bg_page.png")}
      backgroundColor="#fafafa"
    >
      <Home />
    </ParallaxScrollView>
  );
}
