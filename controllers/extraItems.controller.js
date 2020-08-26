const Extra = (extra) => {}

Extra.createdTime = () => {
    // create Date object from valid string inputs
    var datetime = new Date();
  
    // format the output
    var month = datetime.getMonth()+1;
    var day = datetime.getDate();
    var year = datetime.getFullYear();
  
    var hour = datetime.getHours();
    if (hour < 10)
        hour = "0"+hour;
  
    var min = datetime.getMinutes();
    if (min < 10)
        min = "0"+min;
  
    var sec = datetime.getSeconds();
    if (sec < 10)
        sec = "0"+sec;
  
    // put it all togeter
    var dateTimeString = year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec;
  
    return dateTimeString  
  }

module.exports = Extra