import ParallaxScrollView from "@/components/ParallaxScrollView";
import Home from "../pages/newHome";
import store from "@/store";
import { setLunarInfo } from "@/store/reducers/lunarReducer";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      showHeader={false}
      // backgroundImage={require("../../assets/images/bg_page.png")}
      // backgroundColor="#fafafa"
    >
      <Home />
    </ParallaxScrollView>
  );
}
