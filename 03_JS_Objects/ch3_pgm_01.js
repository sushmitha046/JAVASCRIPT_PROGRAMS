var booktitle;
var bookauthor;
booktitle="The Hobbit";
bookauthor="J.R.R.Tolkien";
console.log(booktitle + " by " + bookauthor)

var booktitle2;
var bookauthor2;
booktitle2="The Girl With No Dreams";
bookauthor2="Deepak Gupta";
console.log(booktitle2 + " by " + bookauthor2)

var booktitle3;
var bookauthor3;
booktitle3="Harry Potter";
bookauthor3="J.K.Rowling";
console.log(booktitle3 + " by " + bookauthor3)

var bookTitles=[
    "book title 1",
    "book title 2",
    "book title 3",
    "book title 4",
    "book title 5",
    "book title 6",
    "book title 7",
    "book title 8",
    "book title 9",
    "book title 10"
];
var bookAuthors=[
    "book author 1",
    "book author 2",
    "book author 3",
    "book author 4",
    "book author 5",
    "book author 6",
    "book author 7",
    "book author 8",
    "book author 9",
    "book author 10"
];

for (var i=0;i<10;i++)
    {
        console.log(bookTitles[i] + " by " + bookAuthors[i]);
    }