
const quotes = [
"The only way to do great work is to love what you do. - Steve Jobs",
"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchilla",
"Believe you can and you're halfway there. - Theodore Roosevelt",
"Your time is limited, don't waste it living someone else's life. - Steve Jobs",
"The harder you work for something, the greater you’ll feel when you achieve it." ,
"Don't watch the clock; do what it does. Keep going. - Sam Levenson",
"Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
"It always seems impossible until it’s done. - Nelson Mandela",
"Don't stop when you're tired. Stop when you’re done. - Marilyn Monroe",
"Dream big and dare to fail.- Norman Vaughan",
];


// to get random quote
const generateQuoteButton = document.getElementById('generateQuote');
const quoteDisplay = document.getElementById('quote');

generateQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * 10);
    quoteDisplay.textContent = quotes[randomIndex];
});

 
 function addquote() {
    const addquote= document.getElementById('quoteInput').value.trim();
    if (quoteInput) {
        quotes.push(quoteInput);
        document.getElementById('quoteInput').value = '';
    
    }
    // quotes.push(addquote);
    
    //     console.log(addquote);
       
    
 }


















































// const quote = []; // An empty array to store user-added quotes

// function addQuote() {
//     const quoteInput = document.getElementById("EnterQuote");
    
//     if (EnterQuote) {
//         quotes.push(EnterQuote); // Add the quote to the array
//         document.getElementById("EnterQuote").value = ''; // Clear the input field
//         displayQuotes(); // Update the displayed list of quotes
//     } else {
//         alert("EnterQuote"); // Show an alert if the input is empty
//     }
// }







       































// const quotes = [
//     "The only limit to our realization of tomorrow is our doubts of today.",
//     "Do not wait to strike till the iron is hot; but make it hot by striking.",
//     "The future belongs to those who believe in the beauty of their dreams.",
//     "Act as if what you do makes a difference. It does.",
//     "Success is not final, failure is not fatal: It is the courage to continue that counts."
//   ];
  
//   // Function to shuffle quotes and pick the first one
//   function getRandomQuote() {
//     // Shuffle the quotes array randomly
//     quotes.sort(() => Math.random() - 0.5);
    
//     // Return the first quote after shuffling
//     return quotes[0];
//   }
  
//   // Example usage:
//   console.log(getRandomQuote());
  



// "Life is what happens when you're busy making other plans. - John Lennon",
//     "The purpose of our lives is to be happy. - Dalai Lama",
//     "Get busy living or get busy dying. - Stephen King",
//     "You only live once, but if you do it right, once is enough. - Mae West",
//     "The best way to predict the future is to invent it. - Alan Kay",
//     "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
//     "Your time is limited, don't waste it living someone else's life. - Steve Jobs"



// function generateQuote() {
//     var quoteDisplay = document.getElementById("quote");
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const selectedQuote = quotes[randomIndex];

//     // Display the selected quote and author
//     quoteDisplay.innerText = "${selectedQuote.quote}" - ${selectedQuote.author};
// }