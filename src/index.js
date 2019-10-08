/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let time=800, weeks=0;
      if(knowsProgramming == true){
        time= time;
      }
      else{
        time+=500;
      }
      weeks= time/config[focus];
      return(Math.ceil(weeks));
  };
  
