const shell = require('shelljs');
const dayjs = require('dayjs');
const notify = require('./sendNotify');


setInterval(() => {
  const hour = dayjs().hour();
  const minute = dayjs().minute();
  try {

    if (minute === 1) {
      notify.sendNotify('系统运行正常', '');
    }
    if ([6, 12, 18].includes(hour) && minute === 3) {
      shell.exec('node jd_fruit.js');
    }
    if ([0,8,16].includes(hour) && minute === 0) {
      shell.exec('node jd_joy_reward.js');
    }
    if ([1,4,7,10,13,16,19,22].includes(hour) && minute === 7) {
      shell.exec('node jd_mohe.js');
      shell.exec('node jd_speed.js');
    }
    if ([7,11,13,15,17,19, 21].includes(hour) && minute === 5) {
      shell.exec('node jd_plantBean.js');
    }
    if (hour === 11 && minute === 8) {
      shell.exec('node jd_rankingList.js');
    }
    
    if (hour % 5 === 1 && minute === 11) {
      shell.exec('node jd_superMarket.js');
    }
  
    if (hour >= 6 && hour <=18 && hour % 6 === 0 && minute === 15) {
      shell.exec('node jd_pet.js');
    }
  
    // 京东抽奖机
    if (hour === 1 && minute === 8) {
      shell.exec('node jd_lotteryMachine.js');
    }
  
  } catch (e) {
    console.log('脚本执行出错', e);
    notify.sendNotify('脚本执行出错啦！', `错误信息如下：${e}`);
  }


}, 1000 * 60);
