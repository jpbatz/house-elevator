/*jslint node: true */
'use strict';

module.exports = {

  goto: function(currFloor,destFloor){  // currFloor number and destFloor is a  string!!

    var result = 0;                     // result is floor number
    if(typeof currFloor === 'number' && typeof destFloor === 'string') {
      if((Math.floor(currFloor)<=3 && Math.floor(currFloor) >=0) && Math.floor((Number(destFloor)) <=3 && Math.floor(Number(destFloor)>=0))) {
        result = Number(destFloor) - currFloor;
      }
    }

    return result; // return number!!
  }

};
