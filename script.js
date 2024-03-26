const questions = [
    {
        question: "Who wrote the book of Genesis?",
        options: ["Moses", "John", "Paul", "Luke"],
        answer: "Moses"
    },
        {
          question: "Who wrote the book of Genesis?",
          options: ["Moses", "John", "Paul", "Luke"],
          answer: "Moses"
        },
        {
          question: "What was the first book of the Bible written?",
          options: ["Genesis", "Exodus", "Leviticus", "Numbers"],
          answer: "Genesis"
        },
        {
          question: "How many sons did Jacob have?",
          options: ["10", "12", "14", "16"],
          answer: "12"
        },
        {
          question: "Who was the first murderer mentioned in the Bible?",
          options: ["Cain", "Lamech", "Judas", "Herod"],
          answer: "Cain"
        },
        {
          question: "What was the name of Moses' brother?",
          options: ["Aaron", "Miriam", "Joshua", "Caleb"],
          answer: "Aaron"
        },
        {
          question: "Who was the first person to see the parted Red Sea?",
          options: ["Moses", "Pharaoh", "Aaron", "Miriam"],
          answer: "Moses"
        },
        {
          question: "How many plagues were inflicted on Egypt?",
          options: ["7", "10", "12", "14"],
          answer: "10"
        },
        {
          question: "What was the name of the mountain where Moses received the Ten Commandments?",
          options: ["Mount Sinai", "Mount Zion", "Mount Carmel", "Mount Tabor"],
          answer: "Mount Sinai"
        },
        {
          question: "Who was the author of the book of Psalms?",
          options: ["David", "Solomon", "Isaiah", "Jeremiah"],
          answer: "David"
        },
        {
          question: "What was the name of David's father?",
          options: ["Jesse", "Saul", "Samuel", "Elijah"],
          answer: "Jesse"
        },
        {
          question: "Who was the wisest king of Israel?",
          options: ["David", "Solomon", "Saul", "Hezekiah"],
          answer: "Solomon"
        },
        {
          question: "How many books are in the Old Testament?",
          options: ["27", "39", "66", "72"],
          answer: "39"
        },
        {
          question: "What was the name of the prophet who was swallowed by a big fish?",
          options: ["Jonah", "Elijah", "Isaiah", "Jeremiah"],
          answer: "Jonah"
        },
        {
          question: "Who was the author of the book of Proverbs?",
          options: ["David", "Solomon", "Isaiah", "Jeremiah"],
          answer: "Solomon"
        },
        {
          question: "What was the name of the first king of Israel?",
          options: ["Saul", "David", "Solomon", "Jeroboam"],
          answer: "Saul"
        },
        {
          question: "Who was the prophet who saw the vision of the valley of dry bones?",
          options: ["Ezekiel", "Isaiah", "Jeremiah", "Daniel"],
          answer: "Ezekiel"
        },
        {
          question: "What was the name of the book that tells the story of Job?",
          options: ["Job", "Psalms", "Proverbs", "Ecclesiastes"],
          answer: "Job"
        },
        {
          question: "Who was the last prophet in the Old Testament?",
          options: ["Malachi", "Zechariah", "Haggai", "Zephaniah"],
          answer: "Malachi"
        },
        {
          question: "What was the name of the king who had a dream about a statue made of different metals?",
          options: ["Nebuchadnezzar", "Cyrus", "Darius", "Artaxerxes"],
          answer: "Nebuchadnezzar"
        },
        {
          question: "Who was the author of the book of Lamentations?",
          options: ["Jeremiah", "Isaiah", "Ezekiel", "Daniel"],
          answer: "Jeremiah"
        },
        {
          question: "How many gospels are in the New Testament?",
          options: ["3", "4", "5", "6"],
          answer: "4"
        },
        {
          question: "Who was the author of the book of Acts?",
          options: ["Matthew", "Mark", "Luke", "John"],
          answer: "Luke"
        },
        {
          question: "What was the name of the town where Jesus was born?",
          options: ["Bethlehem", "Nazareth", "Capernaum", "Jerusalem"],
          answer: "Bethlehem"
        },
        {
          question: "Who betrayed Jesus?",
          options: ["Peter", "Judas Iscariot", "Thomas", "John"],
          answer: "Judas Iscariot"
        },
        {
          question: "What was the name of the sea where Jesus walked on water?",
          options: ["Dead Sea", "Sea of Galilee", "Red Sea", "Mediterranean Sea"],
          answer: "Sea of Galilee"
        },
        {
          question: "Who was the first person to see Jesus after his resurrection?",
          options: ["Mary Magdalene", "Peter", "John", "Thomas"],
          answer: "Mary Magdalene"
        },
        {
          question: "How many disciples did Jesus have?",
          options: ["10", "12", "14", "16"],
          answer: "12"
        },
        {
          question: "What was the name of the apostle who was a tax collector?",
          options: ["Matthew", "Peter", "John", "James"],
          answer: "Matthew"
        },
        {
          question: "Who was the author of the book of Revelation?",
          options: ["John", "Peter", "Paul", "James"],
          answer: "John"
        },
        {
          question: "What was the name of the city where the first church was established?",
          options: ["Jerusalem", "Antioch", "Rome", "Ephesus"],
          answer: "Jerusalem"
        },
        {
          question: "Who was the apostle who was called \"the rock\"?",
          options: ["Peter", "Paul", "John", "James"],
          answer: "Peter"
        },
        {
          question: "What was the name of the apostle who was a tentmaker?",
          options: ["Peter", "Paul", "John", "James"],
          answer: "Paul"
        },
        {
          question: "Who was the author of the book of Romans?",
          options: ["Peter", "Paul", "John", "James"],
          answer: "Paul"
        },
        {
          question: "What was the name of the island where the apostle Paul was shipwrecked?",
          options: ["Crete", "Cyprus", "Malta", "Patmos"],
          answer: "Malta"
        },
        {
          question: "Who was the author of the book of Hebrews?",
          options: ["Paul", "Peter", "John", "Unknown"],
          answer: "Unknown"
        },
        {
          question: "What was the name of the city where the apostle Paul was born?",
          options: ["Tarsus", "Antioch", "Damascus", "Jerusalem"],
          answer: "Tarsus"
        },
        {
          question: "Who was the author of the book of 1 Corinthians?",
          options: ["Peter", "Paul", "John", "James"],
          answer: "Paul"
        },
        {
          question: "What was the name of the mountain where Jesus was transfigured?",
          options: ["Mount Sinai", "Mount Tabor", "Mount of Olives", "Mount Zion"],
          answer: "Mount Tabor"
        },
        {
          question: "Who was the author of the book of Galatians?",
          options: ["Peter", "Paul", "John", "James"],
          answer: "Paul"
        },
        {
          question: "What was the name of the disciple who was martyred by being boiled in oil?",
          options: ["Peter", "Paul", "John", "James"],
          answer: "John"
        },
        {
          question: "In the book of Genesis, who was the first person to build an altar to the Lord?",
          options: ["Noah", "Abraham", "Jacob", "Joseph"],
          answer: "Noah"
        },
        {
          question: "What was the name of the mountain where Noah's ark came to rest?",
          options: ["Mount Sinai", "Mount Zion", "Mount Ararat", "Mount Carmel"],
          answer: "Mount Ararat"
        },
        {
          question: "Who was the father of the Hebrew nation?",
          options: ["Noah", "Abraham", "Isaac", "Jacob"],
          answer: "Abraham"
        },
        {
          question: "What was the name of the son that Abraham was asked to sacrifice?",
          options: ["Ishmael", "Isaac", "Jacob", "Joseph"],
          answer: "Isaac"
        },
        {
          question: "Who was the prophet who led the Israelites out of Egypt?",
          options: ["Moses", "Aaron", "Joshua", "Caleb"],
          answer: "Moses"
        },
        {
          question: "What was the name of the book that describes the journey of the Israelites from Egypt to the Promised Land?",
          options: ["Genesis", "Exodus", "Leviticus", "Numbers"],
          answer: "Exodus"
        },
        {
          question: "Who was the first judge of Israel?",
          options: ["Gideon", "Samson", "Deborah", "Jephthah"],
          answer: "Deborah"
        },
        {
          question: "What was the name of the city where David established his capital?",
          options: ["Jerusalem", "Hebron", "Bethlehem", "Jericho"],
          answer: "Jerusalem"
        },
        {
          question: "Who was the prophet who was taken up to heaven in a whirlwind?",
          options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
          answer: "Elijah"
        },
        {
          question: "What was the name of the book that tells the story of Ruth?",
          options: ["Ruth", "Esther", "Judith", "Tobit"],
          answer: "Ruth"
        },
        {
          question: "What was the name of the tax collector who climbed a sycamore tree to see Jesus?",
          options: ["Zacchaeus", "Matthew", "Levi", "Nicodemus"],
          answer: "Zacchaeus"
        },
        {
          question: "Who was the author of the book of 1 John?",
          options: ["Peter", "Paul", "John", "James"],
          answer: "John"
        },
        {
          question: "What was the name of the mountain where Jesus gave the Sermon on the Mount?",
          options: ["Mount Sinai", "Mount Tabor", "Mount of Olives", "Mount of Beatitudes"],
          answer: "Mount of Beatitudes"
        },
        {
          question: "Who was the apostle who doubted the resurrection of Jesus until he saw the nail marks?",
          options: ["Peter", "Thomas", "John", "James"],
          answer: "Thomas"
        },
        {
          question: "What was the name of the disciple who betrayed Jesus for 30 pieces of silver?",
          options: ["Peter", "Judas Iscariot", "Thomas", "John"],
          answer: "Judas Iscariot"
        },
        {
          question: "Who was the author of the book of Ephesians?",
          options: ["Peter", "Paul", "John", "James"],
          answer: "Paul"
        },
        {
          question: "What was the name of the island where the apostle John received the vision that became the book of Revelation?",
          options: ["Crete", "Cyprus", "Malta", "Patmos"],
          answer: "Patmos"
        },
        {
          question: "Who was the author of the book of James?",
          options: ["Peter", "Paul", "John", "James"],
          answer: "James"
        },
        {
          question: "What was the name of the city where the apostle Paul was imprisoned and wrote several epistles?",
          options: ["Rome", "Ephesus", "Corinth", "Athens"],
          answer: "Rome"
        },
        {
          question: "Who was the author of the book of 2 Timothy?",
          options: ["Peter", "Paul", "John", "James"],
          answer: "Paul"
        },
        {
          question: "What was the name of the first son born to Adam and Eve?",
          options: ["Cain", "Abel", "Seth", "Enoch"],
          answer: "Cain"
        },
        {
          question: "Who was the mother of Moses?",
          options: ["Jochebed", "Miriam", "Zipporah", "Pharaoh's daughter"],
          answer: "Jochebed"
        },
        {
          question: "What was the name of the son of David who became king after him?",
          options: ["Absalom", "Amnon", "Solomon", "Adonijah"],
          answer: "Solomon"
        },
        {
          question: "Who was the prophet who confronted King Ahab and Queen Jezebel?",
          options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
          answer: "Elijah"
        },
        {
          question: "What was the name of the book that tells the story of Esther?",
          options: ["Ruth", "Esther", "Judith", "Tobit"],
          answer: "Esther"
        },
        {
          question: "Who was the prophet who saw a vision of a valley filled with dry bones?",
          options: ["Ezekiel", "Isaiah", "Jeremiah", "Daniel"],
          answer: "Ezekiel"
        },
        {
          question: "What was the name of the book that describes the rebuilding of the temple in Jerusalem?",
          options: ["Ezra", "Nehemiah", "Esther", "Haggai"],
          answer: "Ezra"
        },
        {
          question: "Who was the prophet who was called by God as a child?",
          options: ["Samuel", "Jeremiah", "Isaiah", "Ezekiel"],
          answer: "Samuel"
        },
        {
          question: "What was the name of the king who had a dream interpreted by Daniel?",
          options: ["Nebuchadnezzar", "Cyrus", "Darius", "Artaxerxes"],
          answer: "Nebuchadnezzar"
        },
        {
          question: "Who was the prophet who wrote the book of Lamentations?",
          options: ["Jeremiah", "Isaiah", "Ezekiel", "Daniel"],
          answer: "Jeremiah"
        },
        {
          question: "What was the name of the mother of Jesus?",
          options: ["Mary", "Elizabeth", "Sarah", "Rachel"],
          answer: "Mary"
        },
        {
          question: "Who was the apostle who was a fisherman before following Jesus?",
          options: ["Peter", "Paul", "John", "James"],
          answer: "Peter"
        },
        {
          question: "What was the name of the city where Jesus performed his first miracle?",
          options: ["Cana", "Nazareth", "Capernaum", "Bethlehem"],
          answer: "Cana"
        },
        {
          question: "Who was the woman who anointed Jesus' feet with expensive perfume?",
          options: ["Mary Magdalene", "Mary of Bethany", "Martha", "Salome"],
          answer: "Mary of Bethany"
        },
        {
            question: "What was the name of the man who was paralyzed and was lowered through the roof to see Jesus?",
            options: ["Unknown", "Lazarus", "Bartimaeus", "Zacchaeus"],
            answer: "Unknown"
        },
        {
            question: "Who was the author of the book of Philippians?",
            options: ["Peter", "Paul", "John", "James"],
            answer: "Paul"
          },
          {
            question: "What was the name of the city where the apostle Paul was converted on the road to Damascus?",
            options: ["Tarsus", "Antioch", "Damascus", "Jerusalem"],
            answer: "Damascus"
          },
          {
            question: "Who was the author of the book of Colossians?",
            options: ["Peter", "Paul", "John", "James"],
            answer: "Paul"
          },
          {
            question: "What was the name of the island where the apostle Paul was bitten by a viper?",
            options: ["Crete", "Cyprus", "Malta", "Patmos"],
            answer: "Malta"
          },
          {
            question: "Who was the author of the book of 2 Peter?",
            options: ["Peter", "Paul", "John", "James"],
            answer: "Peter"
          },
          {
            question: "What was the name of the garden where God placed Adam and Eve?",
            options: ["Garden of Eden", "Garden of Gethsemane", "Garden of Paradise", "Garden of Olives"],
            answer: "Garden of Eden"
          },
          {
            question: "Who was the son of Abraham who was almost sacrificed?",
            options: ["Ishmael", "Isaac", "Jacob", "Joseph"],
            answer: "Isaac"
          },
          {
            question: "What was the name of the mountain where God gave Moses the Ten Commandments?",
            options: ["Mount Sinai", "Mount Zion", "Mount Carmel", "Mount Tabor"],
            answer: "Mount Sinai"
          },
          {
            question: "Who was the prophet who was thrown into a den of lions?",
            options: ["Daniel", "Jeremiah", "Ezekiel", "Isaiah"],
            answer: "Daniel"
          },
          {
            question: "What was the name of the book that tells the story of Jonah and the big fish?",
            options: ["Jonah", "Job", "Amos", "Micah"],
            answer: "Jonah"
          },
          {
            question: "Who was the prophet who saw a vision of a chariot of fire?",
            options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
            answer: "Elijah"
          },
          {
            question: "What was the name of the book that describes the rebuilding of the walls of Jerusalem?",
            options: ["Ezra", "Nehemiah", "Esther", "Haggai"],
            answer: "Nehemiah"
          },
          {
            question: "Who was the prophet who was taken captive to Babylon?",
            options: ["Ezekiel", "Isaiah", "Jeremiah", "Daniel"],
            answer: "Ezekiel"
          },
          {
            question: "What was the name of the king who had a dream about a statue made of different metals?",
            options: ["Nebuchadnezzar", "Cyrus", "Darius", "Artaxerxes"],
            answer: "Nebuchadnezzar"
          },
          {
            question: "Who was the prophet who wrote the book of Malachi?",
            options: ["Malachi", "Zechariah", "Haggai", "Zephaniah"],
            answer: "Malachi"
          },
          {
            question: "What was the name of the disciple who was a physician?",
            options: ["Matthew", "Mark", "Luke", "John"],
            answer: "Luke"
          },
          {
            question: "Who was the author of the book of 2 Corinthians?",
            options: ["Peter", "Paul", "John", "James"],
            answer: "Paul"
          },
          {
            question: "What was the name of the city where the apostle Paul preached and caused a riot among the silversmiths?",
            options: ["Ephesus", "Corinth", "Philippi", "Thessalonica"],
            answer: "Ephesus"
          },
          {
            question: "Who was the woman who was a tent maker and helped the apostle Paul?",
            options: ["Priscilla", "Lydia", "Phoebe", "Dorcas"],
            answer: "Priscilla"
          },
          {
            question: "What was the name of the region where the apostle Paul was born?",
            options: ["Judea", "Galilee", "Cilicia", "Samaria"],
            answer: "Cilicia"
          },
          {
            question: "Who was the author of the book of 1 Thessalonians?",
            options: ["Peter", "Paul", "John", "James"],
            answer: "Paul"
          },
          {
            question: "What was the name of the city where the apostle Paul was imprisoned and wrote the book of Philippians?",
            options: ["Rome", "Ephesus", "Corinth", "Philippi"],
            answer: "Rome"
          },
          {
            question: "Who was the author of the book of 2 Thessalonians?",
            options: ["Peter", "Paul", "John", "James"],
            answer: "Paul"
          },
          {
            question: "What was the name of the island where the apostle John was exiled and received the vision of the book of Revelation?",
            options: ["Crete", "Cyprus", "Malta", "Patmos"],
            answer: "Patmos"
          },
          {
            question: "Who was the author of the book of Titus?",
            options: ["Peter", "Paul", "John", "James"],
            answer: "Paul"
          }

];

let score = 0;
let askedQuestions = [];
const quizQuestion = document.getElementById("quiz-question");
const answerButtonsDiv = document.getElementById("answer-buttons");
const answerBtnLeft = document.getElementById("answer-btn-left");
const answerBtnRight = document.getElementById("answer-btn-right");
const answerBtnLeft2 = document.getElementById("answer-btn-left2");
const answerBtnRight2 = document.getElementById("answer-btn-right2");
const skipBtn = document.getElementById("skip-btn");
const resultDiv = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const retryBtn = document.getElementById("retry-btn");
const loadingDiv = document.querySelector(".loading");

function displayQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];

    if (askedQuestions.length === 15 || askedQuestions.includes(randomIndex)) {
        showResult();
        return;
    }

    askedQuestions.push(randomIndex);
    quizQuestion.textContent = question.question;
    answerBtnLeft.textContent = question.options[0];
    answerBtnRight.textContent = question.options[1];
    answerBtnLeft2.textContent = question.options[2];
    answerBtnRight2.textContent = question.options[3];
}

answerButtonsDiv.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        const selectedAnswer = event.target.textContent;
        const currentQuestion = questions[askedQuestions[askedQuestions.length - 1]];

        if (selectedAnswer === currentQuestion.answer) {
            score++;
        }

        displayQuestion();
    }
});

skipBtn.addEventListener("click", function() {
    displayQuestion();
});

function showResult() {
    const quiz = document.getElementById("quiz");
    quiz.style.display = "none";
    resultDiv.style.display = "block";
    const userName = document.getElementById("name").value;
    scoreDisplay.textContent = `Hey ${userName}, your score is ${score} out of 15`;
}

const nameBtn = document.getElementById("name-btn");
const nameInput = document.getElementById("name");

nameBtn.addEventListener("click", function() {
    const userName = nameInput.value.trim();
    if (userName) {
        const quiz = document.getElementById("quiz");
        quiz.style.display = "block";
        displayQuestion();
    } else {
        alert("Please enter your name to start the quiz.");
    }
});

retryBtn.addEventListener("click", function() {
    loadingDiv.style.display = "block";
    setTimeout(function() {
        location.reload();
    }, 2000);
});