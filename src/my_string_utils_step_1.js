// Generated by CoffeeScript 1.7.1
(function() {
  var MyStringUtils, cliColor;

  cliColor = require('cli-color');

  MyStringUtils = (function() {
    function MyStringUtils() {}

    MyStringUtils.getDateTimeStr = function() {
      var date, dateStr, result, timeStr;
      result = '';
      date = new Date();
      dateStr = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
      timeStr = date.toLocaleTimeString();
      result = dateStr + ' ' + timeStr;
      result = cliColor.red.bgWhite.underline(result);
      return result;
    };

    MyStringUtils.firstUpperCase = function(str) {
      return str.substr(0, 1).toUpperCase() + str.substr(1, str.length - 1);
    };

    return MyStringUtils;

  })();

  module.exports = MyStringUtils;

}).call(this);
