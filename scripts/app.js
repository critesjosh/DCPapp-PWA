(function() {
    var relaxButton;
    var muteButton;

    document.getElementById('start').addEventListener('click', function(){
        document.getElementById('audio').play();
        document.getElementById('start').remove();
        createSilenceButton();
        createMuteButton();
    });

    var createSilenceButton = function(){
        var silenceButtonDiv = document.createElement("div");
        silenceButtonDiv.setAttribute("class", "button-div");
        relaxButton = document.createElement("button");
        relaxButton.setAttribute("id", "relax");
        relaxButton.textContent = 'Press to Silence';
        silenceButtonDiv.appendChild(relaxButton);
        document.body.appendChild(silenceButtonDiv);

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
        muteButtonDiv.setAttribute("class", "button-div");
        muteButton = document.createElement("button");
        muteButton.setAttribute("id", "mute");
        muteButton.textContent = "Mute";
        muteButtonDiv.appendChild(muteButton);
        document.body.appendChild(muteButtonDiv);


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

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./service-worker.js')
               .then(function() { console.log('Service Worker Registered'); });
    }

        /* Set the width of the side navigation to 250px */
    openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    }

    /* Set the width of the side navigation to 0 */
    closeNav = function() {
        document.getElementById("mySidenav").style.width = "0";
    }

})();
