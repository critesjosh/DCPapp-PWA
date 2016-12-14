(function() {

    var theory;
    var about;
    var contact;

    $('#theory').click(function() {
        if (theory === true) {
            document.getElementById('audio').muted = true;
            $("#app-div").hide();
            $("#about-div").hide();
            $("#contact-div").hide();
            $("#theory-div").show();
        } else {
            document.getElementById('audio').muted = true;
            theoryBehindIt();
        }
    });

    $('#about').click(function() {
        if (about === true) {
            document.getElementById('audio').muted = true;
            $("#app-div").hide();
            $("#theory-div").hide();
            $("#contact-div").hide();
            $("#about-div").show();
        } else {
            document.getElementById('audio').muted = true;
            loadAboutPage();
        }
    });

    $('#contact').click(function() {
        if (contact === true) {
            document.getElementById('audio').muted = true;
            $("#app-div").hide();
            $("#theory-div").hide();
            $("#about-div").hide();
            $("#contact-div").show();
        } else {
            document.getElementById('audio').muted = true;
            loadContactPage();
        }

    });

    document.getElementById('start').addEventListener('click', function(){
        $('#demo-div').hide();
        $('#title-div').hide();
        document.getElementById('audio').play();
        document.getElementById('start').remove();
        createSilenceButton();
        createMuteButton();
    });

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./service-worker.js')
               .then(function() { console.log('Service Worker Registered'); });
    }

    var relaxButton;
    var muteButton;

    var createSilenceButton = function(){

        var silenceButtonDiv = document.createElement("div");
        silenceButtonDiv.setAttribute("class", "button-div relax-button-div col-xs-10 col-xs-offset-1");
        relaxButton = document.createElement("button");
        relaxButton.setAttribute("id", "relax");
        relaxButton.textContent = 'Press to Silence';
        silenceButtonDiv.appendChild(relaxButton);
        $("#app-div").append(silenceButtonDiv);

        //silence audio when button is pressed
        //for computer
        relaxButton.addEventListener('mousedown', function(){
            if (!relaxButton.classList.contains("muted")){
                document.getElementById('audio').muted = true;
                relaxButton.textContent = 'Release to Alert';
            }
        });
        //for mobile browser
        relaxButton.addEventListener('touchstart', function(){
            if (!relaxButton.classList.contains("muted")) {
                document.getElementById('audio').muted = true;
                relaxButton.textContent = 'Release to Alert';
            }
        });

        //restart audio when the button is released
        //for computer
        relaxButton.addEventListener('mouseup', function(){
            if (!relaxButton.classList.contains("muted")) {
                document.getElementById('audio').muted = false;
                relaxButton.textContent = 'Press to Silence';
            }
        });
        //for mobile brower
        document.getElementById('relax').addEventListener('touchend', function(){
            if (!relaxButton.classList.contains("muted")) {
                document.getElementById('audio').muted = false;
                relaxButton.textContent = 'Press to Silence';
            }
        });
    }

    var createMuteButton = function () {
        var muteButtonDiv = document.createElement("div");
        muteButtonDiv.setAttribute("class", "button-div col-xs-6 col-xs-offset-3");
        muteButton = document.createElement("button");
        muteButton.setAttribute("id", "mute");
        muteButton.textContent = "Mute";
        muteButtonDiv.appendChild(muteButton);
        $("#app-div").append(muteButtonDiv);

        muteButton.addEventListener('click', function(){
            if (document.getElementById('audio').muted === false) {
                muteButton.textContent = "UnMute";
                relaxButton.setAttribute("class", "muted");
                document.getElementById('audio').muted = true;
            } else {
                document.getElementById('audio').muted = false;
                relaxButton.setAttribute("class", "");
                muteButton.textContent = "ReMute";
            };
        });
    }

    var theoryBehindIt = function () {
        theory = true;
        $("#app-div").hide();
        $("#about-div").hide();
        $("#contact-div").hide();
        var div0 = document.createElement('div');
        div0.setAttribute("id", "theory-div");
        var div1 = document.createElement('div');
        var header = document.createElement('h1');
        div1.appendChild(header);
        div1.setAttribute("class", "row");
        header.textContent = "The theory behind it";
        var div2 = document.createElement('div');
        div2.setAttribute("class", "row");
        var smallHeader = document.createElement('h3');
        smallHeader.setAttribute("class", "color: white !important;")
        smallHeader.textContent = "A progressive web application for creative ideation, designed for mobile.";
        div2.appendChild(smallHeader);
        var div3 = document.createElement('div');
        div3.setAttribute("class", "col-xs-12 video-container");
        var iframe = document.createElement('iframe');
        iframe.setAttribute("src", "https://www.youtube.com/embed/YTP8zNSquHA");
        iframe.setAttribute("height", "315");
        iframe.setAttribute("width", "560");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("frameborder", "0");
        div3.appendChild(iframe);
        div0.append(div1, div2, div3);
        $("#content").append(div0);
    }

    var loadAboutPage = function() {
        about = true;
        $("#app-div").hide();
        $("#theory-div").hide();
        $("#contact-div").hide();
        var div0 = document.createElement('div');
        div0.setAttribute("id", "about-div");
        var div1 = document.createElement('div');
        div1.setAttribute("class", "row");
        var header = document.createElement('h1');
        header.textContent = "About the App";
        div1.append(header);
        var div2 = document.createElement('div');
        div2.setAttribute("class", "row");
        var aboutText = document.createElement('p');
        aboutText.setAttribute("class", "col-xs-8 col-xs-offset-2");
        aboutText.setAttribute("style", "color: white !important; font-size: 16px;");
        aboutText.textContent = "This application is designed to be used on a mobile device. As a progressive web application, your browser will store the necessary files for this application to be used offline. Using Google Chrome, you can create a shortcut to the application on your phones homescreen for easy, offline access. (The homescreen shortcut is only available on android.) ";
        var link1 = document.createElement('a');
        link1.setAttribute("style", "color: darkblue; text-decoration: underline;");
        link1.setAttribute("target", "_blank");
        link1.setAttribute("href", "https://youtu.be/GMAItVANA-s");
        link1.textContent = "Here's how.";

        aboutText.append(link1);
        div2.append(aboutText);

        div0.append(div1, div2);
        $("#content").append(div0);
    }

    var loadContactPage = function () {
        contact = true;
        $("#app-div").hide();
        $("#theory-div").hide();
        $("#about-div").hide();
        var div0 = document.createElement('div');
        div0.setAttribute("id", "contact-div");
        var div1 = document.createElement('div');
        div1.setAttribute("class", "row");
        var header = document.createElement('h1');
        header.textContent = "Contact me";
        div1.append(header);
        var div2 = document.createElement('div');
        div2.setAttribute("class", "row");
        var sendMessage = document.createElement('p');
        sendMessage.setAttribute("style", "color: white !important;");
        sendMessage.setAttribute("class", "text-center");
        sendMessage.textContent = "Let me know what you think. ";
        var sendMessageLink = document.createElement('a');
        sendMessageLink.setAttribute("style", "color: darkblue; text-decoration: underline;");
        sendMessageLink.setAttribute("target", "_blank");
        sendMessageLink.setAttribute("href", "mailto:critesjosh@gmail.com");
        sendMessageLink.textContent = "Send me a message.";
        var sendIcon = document.createElement('span');
        sendIcon.setAttribute("class", "glyphicon glyphicon glyphicon-send");
        sendIcon.setAttribute("aria-hidden", "true");
        sendMessageLink.append(sendIcon);
        sendMessage.append(sendMessageLink);
        div2.append(sendMessage);

        var div3 = document.createElement('div');
        div3.setAttribute("class", "row");
        var donateMessage = document.createElement('p');
        donateMessage.setAttribute("style", "color: white !important;");
        donateMessage.setAttribute("class", "text-center");
        donateMessage.textContent = "If you like it, ";
        var donateMessageLink = document.createElement('a');
        donateMessageLink.setAttribute("style", "color: darkblue; text-decoration: underline;");
        donateMessageLink.setAttribute("target", "_blank");
        donateMessageLink.setAttribute("href", "http://paypal.me/JoshuaCrites/2");
        donateMessageLink.textContent = "feel free to buy me an ice cream.";
        var donateIcon = document.createElement('span');
        donateIcon.setAttribute("class", "glyphicon glyphicon glyphicon-ice-lolly");
        donateIcon.setAttribute("aria-hidden", "true");
        donateMessageLink.append(donateIcon);
        donateMessage.append(donateMessageLink);
        div3.append(donateMessage);

        div0.append(div1, div2, div3);
        $("#content").append(div0);
    }

})();
