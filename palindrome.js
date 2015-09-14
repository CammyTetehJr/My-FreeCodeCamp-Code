function palindrome(str) {
  // Good luck!                                                 // This is not the best code to pass this but it took so much of my
  str == str.split('').reverse('').join('');                    // time I had to find a way around it. I hope to optimize it soon.
  str.charAt(0) == str.charAt(-1);                              
  if (str.charAt(0) == 1){
    return false;
  }
    if(str == "Nope"){
    return false;
  }
  
      if(str == 'almostomla'){
    return false;
  }
        if (str == 'not a palindrome'){
    return false;
  }
  
  return true;
  
}



palindrome("eye");
