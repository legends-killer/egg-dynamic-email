/*
 * @Author: legends-killer
 * @Date: 2021-11-29 01:47:25
 * @LastEditors: legends-killer
 * @LastEditTime: 2021-11-29 03:38:24
 * @Description:
 */
const Cilent = require('./app/email');

module.exports = app => {

  app.email = {
    sendEmail: async (title, info, receiver, attachment) => {
      const sender = Cilent.createEmailSender(app);
      return await sender(title, info, receiver, attachment);
    },
  };
};
