(function() {
    document.getElementById('start').addEventListener('click', function(){
        document.getElementById('audio').play();
        document.getElementById('start').remove();
        createSilenceButton();
        createMuteButton();
    });

    var createSilenceButton = function(){
        var silenceButtonDiv = document.createElement("div");
        silenceButtonDiv.setAttribute("class", "button-div");
        var silenceButton = document.createElement("button");
        silenceButton.setAttribute("id", "silence");
        silenceButton.textContent = 'Press to Silence';
        silenceButtonDiv.appendChild(silenceButton);
        document.body.appendChild(silenceButtonDiv);

        //silence audio when button is pressed
        //for computer
        document.getElementById('silence').addEventListener('mousedown', function(){
            document.getElementById('audio').muted = true;
            document.getElementById('silence').textContent = 'Release to Alert';
        });
        //for mobile browser
        document.getElementById('silence').addEventListener('touchstart', function(){
            document.getElementById('audio').muted = true;
            document.getElementById('silence').textContent = 'Release to Alert';
        });

        //restart audio when the button is released
        //for computer
        document.getElementById('silence').addEventListener('mouseup', function(){
            document.getElementById('audio').muted = false;
            document.getElementById('silence').textContent = 'Press to Silence';
        });
        //for mobile brower
        document.getElementById('silence').addEventListener('touchend', function(){
            document.getElementById('audio').muted = false;
            document.getElementById('silence').textContent = 'Press to Silence';
        });
    }

    var createMuteButton = function () {
        var muteButtonDiv = document.createElement("div");
        muteButtonDiv.setAttribute("class", "button-div");
        var muteButton = document.createElement("button");
        muteButton.setAttribute("id", "mute");
        muteButton.textContent = "Mute";
        muteButtonDiv.appendChild(muteButton);
        document.body.appendChild(muteButtonDiv);


        document.getElementById('mute').addEventListener('click', function(){
            if (document.getElementById('audio').muted === false) {
                document.getElementById('mute').textContent = "UnMute";
                document.getElementById('audio').muted = true;
            } else {
                document.getElementById('audio').muted = false;
                document.getElementById('mute').textContent = "ReMute";
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
