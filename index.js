
const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

//interface representing a speech request 
function speak(text) {
    const voice = new SpeechSynthesisUtterance(text);

    voice.rate = 1;
    voice.volume = 1;
    voice.pitch = 1;
   
    //converting text into spoken audio
    window.speechSynthesis.speak(voice);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...")
    }

    else if (hour > 12 && hour < 17) {
        speak("Good Afternoon boss...")
    }

    else {
        speak("Good Evenining boss...")
    }

}

window.addEventListener('load', () => {
    speak("  ");
    wishMe();
});


// convert spoken language into text ---- provide speech recognition capabilities 
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Create a SpeechRecognition object
const recognition = new SpeechRecognition();

// Define the onresult event handler
recognition.onresult = (event) => {

    const currentIndex = event.resultIndex;

    // Retrieve the transcript of the recognized speech
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', () => {
    content.textContent = "Listening.."
    recognition.start();
})


//here all the commands of jarvis
function takeCommand(message) {

    if (message.includes('hi') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    }


    else if ( message.includes('tell me about yourself')) {
        speak("hello sir  my name is vinod and i am a virtual assistant and i developed by pawan pathariya and I designed to respond to voice commands and perform various tasks, such as playing music, providing weather updates, setting reminders, controlling smart home devices, answering questions, and much more ");
    }
    else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")

    }
    else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }
    else if (message.includes("open spotify")) {
        window.open("https://spotify.com", "_ blank");
        speak("opening spotify")
    }

    else if (message.includes('on youtube') || message.includes('search')) {
        window.open(`https://www.youtube.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on youtube regarding " + message;
        speak(finalText);

    }


    else if (message.includes('what is') || message.includes('who is') || message.includes('on google.')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speak(finalText);

    }


    else if (message.includes('play') || message.includes('on spotify')) {
        window.open(`https://spotify.com/music/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speak(finalText);

    }

    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        const finalText = time;
        speak(finalText);
        console.log(finalText)

    }

    else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
        const finalText = date;
        speak(finalText);
    }

    else if (message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}
