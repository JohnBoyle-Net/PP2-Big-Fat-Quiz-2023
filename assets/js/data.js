// questions and answers arrays 

const questions = [
    {
        question: 'Which country has the most Pyramids?',
        answer: [
            {text: 'Egypt', correct: false },
            {text: 'Sudan', correct: true},
            {text: 'Libya', correct: false},
            {text: 'Israel', correct: false}
        ],
        fact: "There are 255 pyramids in Sudan, nearly twice as many as Egypt with 118.",
    },
    {
        question: 'Which country has the highest waterfall?',
        answer: [
            {text: 'South Africa', correct: false },
            {text: 'USA', correct: false},
            {text: 'Venezuela', correct: true},
            {text: 'Peru', correct: false}
        ], 
        fact: "Angel Falls in Venezuela is the world's tallest uninterrupted waterfall at a height of 979 metres."
    },
    {
        question: 'Which country has the most official languages?',
        answer: [
            {text: 'Bolivia', correct: true },
            {text: 'Zimbabwe', correct: false},
            {text: 'Singapore', correct: false},
            {text: 'South Africa', correct: false}
        ],
        fact: "Bolivia has 36 official languages. Around 70% of the population speak Bolivian Spanish which is also known as Castillan."
    },
    {
        question: 'Which country has the most active volcanoes?',
        answer: [
            {text: 'Japan', correct: false},
            {text: 'USA', correct: false},
            {text: 'Indonesia', correct: true},
            {text: 'Iceland', correct: false}
        ], 
        fact: "Indonesia has 58 recently active volcanoes due to it's position on the Pacific Ring of Fire."
    },
    {
        question: "In which country is Europe's highest mountain",
        answer: [
            {text: 'Slovenia', correct: false },
            {text: 'Russia', correct: true},
            {text: 'Italy', correct: false},
            {text: 'Switzerland', correct: false}
        ],
        fact: "Mount Ebrus is the highest peak of the Caucasus Mountains standing at 5,642m."
    },
    {
        question: "Which country is the smallest island nation in the world?",
        answer: [
            {text: 'Ireland', correct: false },
            {text: 'Marshall Islands', correct: false},
            {text: 'Nauru', correct: true},
            {text: 'Malta', correct: false}
        ],
        fact: "Nauru is just 8.5 square miles and has has no official capital city."
    },
    {
        question: "How many emirates make up the United Arab Emirates?",
        answer: [
            {text: '7', correct: true },
            {text: '9', correct: false},
            {text: '5', correct: false},
            {text: '6', correct: false}
        ],
        fact: "The UAE is made up of Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al-Quwain, Fujairah and Ras Al Khaimah."
    },
    {
        question: "Which country boasts the worlds only underwater post office?",
        answer: [
            {text: 'Tuvalu', correct: false },
            {text: 'Solomon Islands', correct: false},
            {text: 'Kiribati', correct: false},
            {text: 'Vanuatu', correct: true}
        ],
        fact: "This post office receives and delivers waterproof postcards embossed with special stamps."
    },
    {
        question: "How long is the panama canal?",
        answer: [
            {text: '36km', correct: false},
            {text: '124km', correct: false},
            {text: '82km', correct: true},
            {text: '45km', correct: false}
        ],
        fact: "The panama canal is an artificial waterway connecting the Atlantic Ocean with the Pacific Ocean.",
    },
    {
        question: "Which country has the longest coastline?",
        answer: [
            {text: 'Canada', correct: true},
            {text: 'Australia', correct: false},
            {text: 'Norway', correct: false},
            {text: 'USA', correct: false}
        ],
        fact: "Canada is the second largest country in the world with a coastline measures a whopping 243,042 km. "
    },

]
