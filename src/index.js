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
      var studyDuration = 800;
      var efficiencyCoeff;
      var weeks;
      if (knowsProgramming) {
        efficiencyCoeff = 1
      }
      else {
        efficiencyCoeff = 0.5
      }
      return Math.ceil(studyDuration/config[focus]*efficiencyCoeff);
  };
  
