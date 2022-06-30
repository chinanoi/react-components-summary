import React, { useState } from 'react';
import styles from './index.less';

interface IProps {
  timestamp: number;
}

// 判断两个时间是否是同一天
const isSameDay = (a: Date, b: Date) => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};

// 判断日期是否在本月
const isCurrentMonthOfday = () => {

};

// 将传入的时间戳转为年、月、日
const getYearMonthDay = (timestamp: number) => {
  const date = new Date(timestamp);
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
  };
};

const Calendar = (props: IProps) => {
  const timestamp = props.timestamp;
  const [lineNumber, setLineNumber] = useState(6);
  const [rowsCount, setRowsCount] = useState(7);
  const { year, month, day } = getYearMonthDay(timestamp);
  // 获取到每月第一天的date
  const currentMonthFirstDay = new Date(year, month, 1);
  // 获取这一天是星期几
  const currentMonthFirstDayWeek = currentMonthFirstDay.getDay();
  // 月份第一天是星期几，就应该往前移几天
  const startDay = new Date(
    currentMonthFirstDay.getTime() - currentMonthFirstDayWeek * 24 * 3600 * 1000,
  );
  // 生成一个数组，保存当前月份应该展示的所有data对象，固定为7*6 = 42个，6行，每行一个星期
  const rowData: Date[][] = [];
  for (let i = 0; i < rowsCount * lineNumber; i++) {
    const page = Math.floor(i / rowsCount);
    if (!rowData[page]) {
      rowData[page] = [];
    }
    rowData[page].push(new Date(startDay.getTime() + 1000 * 60 * 60 * 24 * i));
  }

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <div className={styles.select_year}>{year}年</div>
        <div className={styles.select_month}>{month + 1}月</div>
        <div className={styles.select_day}>{day}日</div>
      </div>
      <div>
        <div>上个月</div>
        <div>下个月</div>
      </div>
      <div className={styles.weekContainer}>
        <span className={styles.weekItem}>{'日'}</span>
        <span className={styles.weekItem}>{'一'}</span>
        <span className={styles.weekItem}>{'二'}</span>
        <span className={styles.weekItem}>{'三'}</span>
        <span className={styles.weekItem}>{'四'}</span>
        <span className={styles.weekItem}>{'五'}</span>
        <span className={styles.weekItem}>{'六'}</span>
      </div>
      <div className={styles.daysContainer}>
        {rowData.map((row, i) => (
          <div key={i} className={styles.row}>
            {row.map((item, index) => {
              console.log('item', item.getTime());
              console.log('timestamp', timestamp);
              return (
                <div
                  key={index}
                  className={`${styles.dateContainer}
                    ${isSameDay(item, new Date()) ? styles.selectDay : ''}`}
                >
                  {item.getDate()}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Calendar;
