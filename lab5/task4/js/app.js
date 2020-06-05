function isTimeRangesIntersect(range1, range2) {
  if(range2[1] >= range1[0] && range1[1] >= range2[0]) {
    return true;
  }
  return false;
}

console.log(isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00'])); // return false
console.log(isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00'])); // return true
