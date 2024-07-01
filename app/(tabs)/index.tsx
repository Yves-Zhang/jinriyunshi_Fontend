import ParallaxScrollView from "@/components/ParallaxScrollView";
import Home from "../pages/home";
import store from "@/store";
import { setLunarInfo } from "@/store/reducers/lunarReducer";

store.dispatch(setLunarInfo(999));

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
