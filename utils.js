/*
 * @Author: your name
 * @Date: 2021-10-08 15:53:05
 * @LastEditTime: 2021-10-08 15:53:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /learnRN/telnet/utils.js
 */
module.exports.search = function (str, pattern) {
  if (pattern instanceof RegExp) return str.search(pattern);
  else return str.indexOf(pattern);
};
