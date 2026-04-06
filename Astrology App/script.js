const zodiacSigns = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
];

// Base on Date, size 31
const compliments = [
  "You shine brighter than a Leo in the spotlight. ✨",

  "You’ve got the emotional depth of a Pisces moon — pure magic. 🌊",

  "Your confidence radiates like a well-aspected Sun. ☀️",

  "You’re as grounding as a Taurus with a plan and snacks. 🌿",

  "You’ve got the mystery of a Scorpio and the warmth of a Libra rising. 🔥⚖️",

  "Your intuition could outshine any full moon. 🌕",

  "You bring balance like Venus in Libra — effortlessly graceful. 💕",

  "You’re as dependable as a Capricorn on a Monday morning. 🏔️",

  "Your energy is as vibrant as a Sagittarius on an adventure. 🎒",

  "You’ve got the charm of Mercury in Gemini — words just dance for you. 💬",

  "You make people feel safe, like a Cancer offering a cozy blanket. 🦀",

  "You’re as unique as an Aquarius idea at 2 a.m. 🌌",

  "You’ve got the creativity of Neptune in the 5th house. 🎨",

  "Your laughter could rival Jupiter’s joy — it’s contagious. 😄",

  "You’re steady like Saturn’s rings — disciplined and dazzling. 💫",

  "You’re the kind of person Mars would go to battle for. ⚔️",

  "You’ve got a heart bigger than Jupiter’s orbit. 💖",

  "Your presence feels like a well-balanced natal chart — harmonious and whole. 🌈",

  "You’re as radiant as the Sun in its domicile. 🌞",

  "You’ve got the spontaneity of an Aries on a good day. 🔥",

  "You’re the cosmic glue that keeps everyone aligned. 🌠",

  "You bring out the best in others — true North Node energy. 🌙",

  "You’ve got that rare conjunction of confidence and kindness. 🌟",

  "You’re as timeless as a perfectly placed Venus. ⏳",

  "Your smile could outshine the stars in any constellation. 🌌",

  "You have the patience of an earth sign and the imagination of a water sign. 🌍💧",

  "You’re like Mercury retrograde — unforgettable, just in a better way. 😉",

  "You’re as charmingly unpredictable as Uranus, but ten times more lovable. ⚡",

  "You have the soul of a poet and the courage of a cardinal sign. 🖋️🔥",

  "You’re cosmic proof that stardust makes the best humans. 🌠",

  "The universe must’ve been in perfect alignment the day you were born. 💫",
];

// size 20
const victimCardCompliments = [
  "You play the victim card so well, I’m surprised it’s not laminated.",

  "You'd win an Oscar for Best Dramatic Use of the Victim Card.",

  "You must have a loyalty program with the victim card by now.",

  "You swipe that victim card faster than a credit card on sale day.",

  "You’ve got the rare, holographic edition of the victim card!",

  "That victim card has more mileage than my old scooter.",

  "You pull that victim card smoother than a magician pulls a rabbit.",

  "If victim cards had levels, you’d be prestige rank 10.",

  "You handle that victim card like a pro poker player.",

  "You’re the CEO of Emotional Damage & Associates.",

  "You’ve got victim card premium — no ads, just pure drama.",

  "You must have your victim card on auto - renew.",

  "You’ve got that victim energy down to a science.",

  "You’re the Picasso of painting yourself as the victim.",

  "Netflix should give you a special: ‘The Victim Chronicles.’",

  "You could teach a masterclass in strategic sympathy.",

  "That victim card must be contactless — you use it instantly.",

  "You’ve got a PhD in passive - aggressive suffering.",

  "You play the victim like it’s your theme song.",

  "Your victim card is so powerful, even Uno players respect it.",
];

// size 30
const recommendations = [
  "Learn basic Python — it’ll change how you think about problem solving.",

  "Take a short course on AI tools — they’re everywhere now.",

  "Try Duolingo for a new language(even if just for fun.",

  "Watch YouTube channel Kurzgesagt – In a Nutshell for amazing science visuals.",

  "Read “Atomic Habits” by James Clear — small changes, big impact.",

  "Explore freeCodeCamp if you want to master web development.",

  "Try building a simple game in JavaScript or Python.",

  "Subscribe to a tech or design newsletter(like TLDR or UX Design Weekly).",

  "Experiment with Canva for graphic design.",

  "Learn keyboard shortcuts for your main apps — it’s a productivity superpower.",

  "Go on a 30-minute walk daily without your phone — mental clarity boost.",

  "Start a 5-minute journal (morning or night).",

  "Try guided meditation on YouTube (check out Michael Sealey).",

  "Drink more water — cliché but underrated.",

  "Learn a simple home workout routine (no equipment needed).",

  "Take a digital detox day once a week.",

  "Sleep before midnight for a week — your brain will thank you.",

  "Do a stretching session every morning.",

  "Write down 3 things you’re grateful for each day.",

  "Spend a weekend offline, doing something creative.",

  "Try digital art using free apps like Krita or Sketchbook.",

  "Start a photo-a-day challenge — document life.",

  "Remix your favorite song using BandLab or Soundtrap.",

  "Write a short sci-fi or fantasy story — just for fun.",

  "Redesign your workspace or phone home screen.",

  "Try a DIY project from Pinterest or YouTube.",

  "Learn calligraphy or hand lettering.",

  "Join an online community around something you love.",

  "Cook or bake something completely new.",

  "Watch a foreign film or anime with subtitles — new perspectives!",
];

// size 20
const predictions = [
  "Aries ♈ – You’ll have an unexpected burst of motivation… followed by a 3 - hour nap you’ll totally justify as “manifestation rest.”",

  "Taurus ♉ – Someone will compliment your patience, right before testing it.",

  "Gemini ♊ – You’ll start three new hobbies this week and master none — but look great doing it.",

  "Cancer ♋ – You’ll feel nostalgic and text someone “just checking in,” then instantly regret it.",

  " Leo ♌ – A spotlight moment is coming — make sure your hair knows.",

  "Virgo ♍ – You’ll fix a problem nobody else noticed, and quietly judge them for not noticing.",

  "Libra ♎ – You’ll spend 45 minutes choosing what to watch, then go to bed without watching anything.",

  "Scorpio ♏ – A secret will come to light… but it’ll probably be about your snack stash.",

  "Sagittarius ♐ – Travel plans may shift — the stars suggest packing snacks and patience.",

  "Capricorn ♑ – Your hard work will pay off soon.Unfortunately, it’ll pay in “experience” first.",

  "Aquarius ♒ – A weird idea will actually work — embrace your chaos.",

  "Pisces ♓ – You’ll have a deep emotional moment with a random song lyric that wasn’t that deep.",

  "Your Phone – Will betray you with a screenshot you weren’t supposed to send.",

  "Mercury Retrograde – Coming soon to make your Wi - Fi cry.",

  "Venus Influence – Romance may bloom, but so might your screen time on dating apps.",

  "Jupiter’s Energy – Expansion ahead — mostly in your snack collection.",

  "Saturn’s Lesson – A challenge will teach you patience… whether you like it or not.",

  "Pluto’s Vibes – Transformation time — probably starting with your sleep schedule.",

  "Lunar Eclipse Effect – Expect strong emotions… and maybe weird dreams about ex - classmates.",

  "Sun Energy – You’ll finally feel like yourself again — until Monday hits.",
];

const form = document.getElementById("astroForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const date = parseInt(document.getElementById("date").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const text = `Hi ${firstname} ${lastname}, Your Zodiac sign is ${
    zodiacSigns[month - 1]
  },${compliments[date - 1]},${victimCardCompliments[year % 20]},${
    recommendations[(date * month) % 30]
  },${predictions[(firstname.length * lastname.length) % 20]}`;


  document.getElementById("result").textContent = text;
  text.style.background = "yellow";
});

