console.log("wczytano plik Net.js")

class Net {
    constructor() {
        this.a = 100 // użycie zmiennych
        this.b = 200
        console.log("konstruktor klasy Net")
        this.first() // wywołanie funkcji z tej samej klasy
    }

    first() {
        $.ajax({
            url: "adres serwera",
            data: { action: 'first' },
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                ui.createInterface(obj)
                ui.listeners()
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        })
    }

    sendData(album) {
        $.ajax({
            url: "adres serwera",
            data: { action: 'next', album: album },
            type: "POST",
            success: function (data) {
                var obj = JSON.parse(data)
                ui.clicks(obj)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        })
    }

    addToPlaylist(album, title, size) {
        $.ajax({
            url: '',
            data: { action: 'add', album: album, title: title, size: size },
            type: 'POST',
            success: function (data) { },
            error: function (xhr, status, error) {
                console.log(xhr)
            }
        })
    }

    checkPlaylist() {
        $.ajax({
            url: '',
            data: { action: 'check' },
            type: 'POST',
            success: function (data) {
                var obj = JSON.parse(data)
                ui.clicks(obj)
            },
            error: function (xhr, status, error) {
                console.log(xhr)
            }
        })
    }
}
