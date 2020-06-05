function replaceString(text, searchString, replacementString) {
  if(!(typeof(text) === 'string') || !(typeof(searchString) === 'string') || !(typeof(replacementString) === 'string')) {
    return 'Validation error!';
  } else if(!text.includes(searchString)) {
    return false;
  } else {
    return text.replace(new RegExp(searchString, 'g'), replacementString);
  }
}

