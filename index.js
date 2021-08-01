
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts); 

function writeCards (nameArray, eventName) {
    let messages = [];
    for (let i = 0; i < nameArray.length; i++) {
        
        let string = `Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`;
        messages.push (string);   
      }
      return messages;
}

const messages = writeCards(["Ada", "Brendan", "Ali"], "birthday"); 
console.log (messages);

function countDown () {
let countdown = 10;
while (countdown > -1) {
  console.log(countdown--);
} 
}