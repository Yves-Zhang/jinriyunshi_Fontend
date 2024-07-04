import { ThemedView } from "@/components/ThemedView"
import { ThemedText } from "@/components/ThemedText"
import { StyleSheet } from 'react-native';
import { Calendar, Layout, NativeDateService, Text, ViewPager, TopNavigation } from '@ui-kitten/components';
import { useState } from "react";
import { StatusBar, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LunarCard from "./LunarCard";

const STATUS_BAR_HEIGHT = Platform.OS === 'android' ? StatusBar.currentHeight : getStatusBarHeight();

console.log('STATUS_BAR_HEIGHT', STATUS_BAR_HEIGHT);

const i18n: any = {
  dayNames: {
    short: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    long: ['1', '2', '3', '4', '5', '6', '7'],
  },
  monthNames: {
    short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  },
};

const localeDateService = new NativeDateService('zh-cn', { i18n, startDayOfWeek: 1 });

const Home = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <ViewPager>
      <Layout
        style={styles.tab}
        level='2'
      >
        <TopNavigation
          style={styles.navBar}
          title={evaProps => <Text {...evaProps}>Title</Text>}
        // subtitle={evaProps => <Text {...evaProps}>Subtitle</Text>}
        />
        <Layout style={styles.layoutContent}>
          <ThemedView style={styles.content}>
            <Calendar
              date={date}
              onSelect={nextDate => setDate(nextDate)}
              dateService={localeDateService}
            />
          </ThemedView>
          <LunarCard />
        </Layout>
      </Layout>
    </ViewPager>
  )
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBar: {
    marginTop: STATUS_BAR_HEIGHT,
  },
  content: {
    width: '100%',
    marginTop: 10,
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  layoutContent: {
    width: '100%',
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});

export default Home