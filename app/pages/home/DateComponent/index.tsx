import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import 'moment/min/locales.min';

moment.locale('zh-cn'); // 使用中文

const DateComponent = (props: any) => {
  const { style } = props;
  const { color = "#c85e5e" } = props;
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [arrowDirection, setArrowDirection] = useState("down");

  const showPicker = () => {
    setShow(true);
    setArrowDirection("up");
  };

  const hideDatePicker = () => {
    setShow(false);
    setArrowDirection("down");
  };

  const handleConfirm = (date: any) => {
    setDate(date);
    setShow(false);
    setArrowDirection("down");
  };

  return (
    <View>
      <View style={[{ flexDirection: "row", alignItems: "center" }, style]}>
        <Text style={styles.date}>{moment(date).format("YYYY年MM月DD日")} {moment(date).format('dddd')}</Text>
        <TouchableOpacity
          onPress={showPicker}
        >
          <Ionicons
            size={24}
            style={[{ marginBottom: -3 }]}
            name={arrowDirection === "up" ? "calendar" : "calendar-outline"}
            color={color}
          />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePickerModal
          isVisible={show}
          mode="date"
          display="default"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          date={date}
          locale="zh"
          cancelTextIOS="取消"
          confirmTextIOS="确定"
        />
      )}
    </View>
  );
};

const styles = {
  date: {
    fontSize: 20,
    marginRight: 8,
    color: "#0e0e0e"
  },
};

export default DateComponent;
