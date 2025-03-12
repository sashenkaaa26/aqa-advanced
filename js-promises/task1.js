
function sayText(text, milliseconds) {
  setTimeout(() => {
      console.log(text);
  }, milliseconds);
}

sayText('Hello, friends', 2000); 