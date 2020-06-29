class Music {
    constructor() {
        window.AudioContext = window.AudioContext || window.webkitAudioContext
        this.audioContext = new AudioContext()
        this.audioElement = document.getElementById('audio')
        this.source = this.audioContext.createMediaElementSource(this.audioElement)
        this.analyser = this.audioContext.createAnalyser()
        this.source.connect(this.analyser)
        this.analyser.connect(this.audioContext.destination)
        this.analyser.fftSize = 64
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount)
        this.analyser.getByteFrequencyData(this.dataArray)
        console.log(this.dataArray)
    }

    play(name, album) {
        if ('mp3/' + album + '/' + name != $('#audio_src').attr('src')) {
            $('#audio_src').attr('src', 'mp3/' + album + '/' + name)
            $('#audio').trigger('load')
            $("#audio").bind("loadeddata", function () {
                $('#audio').trigger('play')
                $("#audio").prop("currentTime")
                $("#audio").on("timeupdate", function () {
                    function add(what) {
                        if (what < 10)
                            what = '0' + what
                        return what
                    }
                    let currentTime = Math.floor($("#audio").prop("currentTime"))
                    let currentMinutes = Math.floor(currentTime / 60)
                    currentMinutes = add(currentMinutes)
                    let currentSeconds = currentTime % 60
                    currentSeconds = add(currentSeconds)
                    let duration = Math.floor($("#audio").prop("duration"))
                    let durationMinutes = Math.floor(duration / 60)
                    durationMinutes = add(durationMinutes)
                    let durationSeconds = duration % 60
                    durationSeconds = add(durationSeconds)
                    $('#time').html(currentMinutes + ':' + currentSeconds + '/' + durationMinutes + ':' + durationSeconds)
                    let percent = parseFloat((currentTime / duration).toFixed(3))
                    percent = percent * $('#progress').width()
                    $('#passed').width(percent)
                })
                $("#audio").on("ended", function () {
                    console.log('eee')
                })
            })

        } else {
            $('#audio').trigger('play')
        }
    }

    pause() {
        $("#audio").trigger('pause')
    }

    now(album, now) {
        $("#audio").trigger('stop')
        $('#audio_src').attr('src', 'mp3/' + album + '/' + now)
        $('#audio').trigger('load')
        $("#audio").bind("loadeddata", function () {
            $('#audio').trigger('play')
        })
    }

    getData() {
        this.analyser.getByteFrequencyData(this.dataArray);
        return this.dataArray;
    }

    clicks() {
        var that = this // pobranie referencji do this klasy Music, aby można było jej używać w kliku
        $("#bt").on("click", function () {
            that.audioContext.resume().then(function () {
                console.log("audioContext lives!")
            })
        })
    }
}