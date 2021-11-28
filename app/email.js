/*
 * @Author: legends-killer
 * @Date: 2021-11-29 01:49:30
 * @LastEditors: legends-killer
 * @LastEditTime: 2021-11-29 03:53:54
 * @Description:
 */

const emailjs = require('emailjs');
const assert = require('assert');
const is = require('is-type-of');
const sendEmail = require('./sendEmail');

module.exports.createEmailSender = function(app) {
  const config = app.config.email;
  assert(is.string(config.host), 'config.host must be String!');
  assert(is.string(config.password), 'config.password must be String!');
  assert(is.string(config.sender), 'config.sender must be String!');
  assert(is.string(config.user), 'config.user must be String!');


  const send = async (title, info, receiver, attachment = []) => {

    const client = new emailjs.SMTPClient({ ...config, ssl: true });

    if (!receiver || receiver.length === 0) {
      return { code: -1, msg: 'ERR,receiver isn`t allow Nulls!' };
    }
    if (!title || title.length === 0) {
      return { code: -1, msg: 'ERR,title isn`t allow Nulls!' };
    }
    let result = {};
    if (attachment === []) {
      result = await sendEmail(client, config, title, info, receiver);
    } else {
      result = await sendEmail(
        client,
        config,
        title,
        info,
        receiver,
        attachment
      );
    }
    return result;
  };

  return send;
};
