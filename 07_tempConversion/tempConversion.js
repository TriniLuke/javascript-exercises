const ftoc = function(ft) {
  let ct = Math.round((ft - 32) * (5 / 9) * 10) / 10;
  return ct;
  
};

const ctof = function(ct) {
  let ft = Math.round(((ct * 9/5) + 32) * 10) / 10;
  return ft;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
