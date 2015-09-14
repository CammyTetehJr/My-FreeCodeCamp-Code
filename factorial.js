function factorialize(num) {
num = Math.round(num);
  
  if (num == 0){
    return 1;
  }
  if (num < 2){
    return num; 
   }
  else 
    return num * factorialize(num - 1);
  
}

factorialize(5);
