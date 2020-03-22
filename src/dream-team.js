module.exports = function createDreamTeam(members) {
   
if(Array.isArray(members)){
    return members.filter(el => typeof (el) === "string").map(el => el.trim().substring(0,1).toUpperCase()).sort().join('');
}else{
  return false;
}

};
