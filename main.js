function genQuote() {
    var randNum = Math.floor(Math.random() * 8) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum];
}
var quotes = ["Blank", "\"Spread love everywhere you go. Let no one ever come to you without leaving happier.\"<br>-  Mother Teresa", 
"\"Tell me and I forget. Teach me and I remember. Involve me and I learn.\"<br> -Benjamin Franklin",
"\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br>- Thomas A. Edison",
"\"You are never too old to set another goal or to dream a new dream.\"<br>- C.S Lewis", 
"\"If you can dream it, you can do it.\"<br>- Walt Disney",
"\"Man needs difficulties in life because they are necessary to enjoy success.\"<br>- Mahatma Gandhi",
"\"If you judge people, you have no time to love them.\"<br>- Mother Teresa",
"\"Don’t count the days, make the days count. \"<br>- Muhammad Ali",
"\"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.\"<br>- Albert Einstein",
"\"Man needs difficulties in life because they are necessary to enjoy success.\"<br>- APJ Abdul Kalam",];