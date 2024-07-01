import { Lunar, LunarUtil } from 'lunar-typescript';

export function getLunarDayInfo(day: Date = new Date()) {
    const lunar = Lunar.fromDate(day);
    const dayYi = lunar.getDayYi();
    const dayJi = lunar.getDayJi();
  
    const indexTimeYi = lunar.getTimeYi();
    const indexTimeJi = lunar.getTimeJi();
  
    const weekDay = lunar.getWeek();
    const weekDayChinese = lunar.getWeekInChinese();
  
    const yearChinese = lunar.getYearInChinese();
    const monthChinese = lunar.getMonthInChinese();
    const dayChinese = lunar.getDayInChinese();
  
    // 节日
    const festivals = lunar.getFestivals();
  
    // 干支年
    const yearGanZhi = lunar.getYearInGanZhi();
  
    // 干支月
    const monthGanZhi = lunar.getMonthInGanZhi();
  
    // 干支日
    const dayGanZhi = lunar.getDayInGanZhi();
  
    // 获取当天时辰列表
    const times = lunar.getTimes();
    const shichens = [];
    for (var i = 0, j = times.length; i < j; i++) {
      var time = times[i];
      const yi = LunarUtil.getTimeYi(lunar.getDayGanExact() + lunar.getDayZhiExact(), time.getGanZhi());
      const ji = LunarUtil.getTimeJi(lunar.getDayGanExact() + lunar.getDayZhiExact(), time.getGanZhi());
      shichens.push({
        time: time.getMinHm() + ' - ' + time.getMaxHm(),
        ganZhi: time.getGanZhi(),
        yi,
        ji
      });
    }
  
    const ret = {
      shichens,
      dayYi,
      dayJi,
      indexTimeYi,
      indexTimeJi,
      weekDay,
      weekDayChinese,
      festivals,
      yearGanZhi,
      monthGanZhi,
      dayGanZhi,
      yearChinese,
      monthChinese,
      dayChinese
    };
    return ret;
  }
  