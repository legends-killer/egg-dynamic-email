/*
 * @Author: legends-killer
 * @Date: 2021-11-29 01:52:24
 * @LastEditors: legends-killer
 * @LastEditTime: 2021-11-29 03:58:17
 * @Description:
 */
const sendEmail = function(
  server,
  option,
  title,
  info,
  receiver,
  attachment = []
) {
  return new Promise(res => {
    const params = {
      text: info,
      from: option.sender,
      to: receiver,
      subject: title,
    };
    if (attachment !== []) {
      params.attachment = attachment;
    }
    server.send(params, (err, msg) => {
      if (err) {
        res({ code: -1, msg: 'failed', err });
      } else {
        res({ code: 0, msg });
      }
    });
  });
};
module.exports = sendEmail;
