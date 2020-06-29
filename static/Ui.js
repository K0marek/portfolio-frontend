console.log("wczytano plik Ui.js")

class Ui {

    constructor() {
        console.log("konstruktor klasy Ui")
        //net.doSth() // wywołanie funkcji z innej klasy
        //this.clicks()
        //this.tr()
    }

    createInterface(obj) {
        for (let i = 0; i < obj.dirs.length; i++) {
            var img = $('<img>').addClass('album')
            img.attr('src', '/image/' + obj.dirs[i] + '.jpg')
            img.click(function () { net.sendData(obj.dirs[i]) })
            $('#albums').append(img)
        }
        var table = $('<table>').attr('id', 'playlistTable')
        for (let i = 0; i < obj.files.length; i++) {
            let tr = $('<tr>').addClass('track')
            let album = $('<td>').addClass('tdAlbum').html(obj.files[i].dir)
            let name = $('<td>').addClass('tdName').html(obj.files[i].file)
            let size = $('<td>').addClass('tdSize').html(obj.files[i].size)
            let playButton = $('<button>').addClass('play').css('display', 'none')
            let play = $('<td>').addClass('tdPlay')
            play.append(playButton)
            let addButton = $('<button>').addClass('add').css('display', 'none')
            let add = $('<td>').addClass('tdAdd')
            add.append(addButton)
            tr.append(album, name, size, play, add)
            table.append(tr)
        }
        $('#songs').append(table)

        $('#duration').html()

        $(window).on('resize', function () {
            if (window.matchMedia('(max-width: 767px)').matches) {
                let width = 100 / $('.album').length
                $('.album').css('width', width + '%')
                $('#albums').css('height', width + '%')
            } else {
                $('.album').css('width', '100%')
                $('#albums').css('height', '85vh')
            }
        })
    }

    clicks(obj) {
        $("#audio").trigger('pause')
        $("#audio_src").attr('src', '')
        $('#description').html('tytuł utworu')
        setTimeout(function () { $('#time').html('00:00/00:00') }, 10)
        setTimeout(function () { $('#passed').width(0) }, 10)
        let mainButton = $('#controls').children().eq(1)
        $(mainButton).removeClass()
        $(mainButton).addClass('play')
        $('#playlistTable').empty()
        for (let i = 0; i < obj.length; i++) {
            let tr = $('<tr>').addClass('track')
            let album = $('<td>').addClass('tdAlbum').html(obj[i].dir)
            let name = $('<td>').addClass('tdName').html(obj[i].file)
            let size = $('<td>').addClass('tdSize').html(obj[i].size)
            let playButton = $('<button>').addClass('play').css('display', 'none')
            let play = $('<td>').addClass('tdPlay')
            play.append(playButton)
            let addButton = $('<button>').addClass('add').css('display', 'none')
            let add = $('<td>').addClass('tdAdd')
            add.append(addButton)
            tr.append(album, name, size, play, add)
            $('#playlistTable').append(tr)
        }
    }

    listeners() {
        $('#songs').on('mouseover', '.track', function () {
            $('.track').css('background', '#1e1e1e')
            $(this).css('background', '#7c7c7c')
            $(this).css('color', 'white')
            let play = $(this).children('.tdPlay').children()
            play.css('display', 'inline')
            let add = $(this).children('.tdAdd').children()
            add.css('display', 'inline')
            $('#songs').on('mouseleave', '.track', function () {
                $('.track').css('background', '#1e1e1e')
                $('.track').css('color', 'rgb(173, 173, 173)')
                play.css('display', 'none')
                add.css('display', 'none')
            })
        })

        let play = function () {
            $('[name=active]').addClass('play')
            $('[name=active]').removeClass('pause')
            $('[name=active]').removeAttr('name')
            $(this).attr('name', 'active')
            $(this).addClass('pause')
            $(this).removeClass('play')
            $('#controls').children('.play').addClass('pause')
            $('#controls').children('.play').removeClass('play')
            let tr = $(this).parent().parent()
            if ($('#selected'))
                $('#selected').removeAttr('id')
            $(tr).attr('id', 'selected')
            var name = $(tr).children('.tdName').html()
            var album = $(tr).children('.tdAlbum').html()
            $('#description').html(name + '/' + album)
            music.play(name, album)
        }

        let pause = function () {
            music.pause()
            $('.pause').addClass('play')
            $('.pause').removeClass('pause')
        }

        let unpause = function () {
            if ($('#audio_src').attr('src') == '')
                return
            $('[name=active]').addClass('pause')
            $('[name=active]').removeClass('play')
            $(this).addClass('pause')
            $(this).removeClass('play')
            let tr = $('[name=active]').parent().parent()
            var name = $(tr).children('.tdName').html()
            var album = $(tr).children('.tdAlbum').html()
            music.play(name, album)
        }

        function doRest(now, number) {
            if ($('#controls').children('.play')) {
                $('#controls').children('.play').addClass('pause')
                $('#controls').children('.play').removeClass('play')
            }
            $('.track').removeAttr('id')
            let nowTr = $('.track').eq(number)
            nowTr.attr('id', 'selected')
            $('[name=active]')
                .removeClass('pause')
                .addClass('play')
                .removeAttr('name')
            nowTr.children('.tdPlay').children()
                .attr('name', 'active')
                .removeClass('play')
                .addClass('pause')
            let album = nowTr.children('.tdAlbum').html()
            $('#description').html(now + '/' + album)
            music.now(album, now)
        }

        let previous = function () {
            if ($('#audio_src').attr('src') != '') {
                let tr = $('[name=active]').parent().parent()
                let tracks = $('.track')
                let number
                tracks.each(function (index, value) {
                    if (tr[0] == value)
                        number = index - 1
                })
                if (number < 0)
                    number = $('.track').length - 1
                let now = $($('.track')[number]).children('.tdName').html()
                doRest(now, number)
            }
        }

        let next = function () {
            if ($('#audio_src').attr('src') != '') {
                let tr = $('[name=active]').parent().parent()
                let tracks = $('.track')
                let number
                tracks.each(function (index, value) {
                    if (tr[0] == value)
                        number = index + 1
                })
                if (number > $('.track').length - 1)
                    number = 0
                let now = $($('.track')[number]).children('.tdName').html()
                doRest(now, number)
            }
        }

        $('#songs').on('click', '.play', play)
        $('#info').on('click', '.play', unpause)

        $('#songs').on('click', '.pause', pause)
        $('#info').on('click', '.pause', pause)

        $('#info').on('click', '.next', next)
        $('.previous').on('click', previous)

        let add = function () {
            let album = $(this).parent().parent().children('.tdAlbum').html()
            let title = $(this).parent().parent().children('.tdName').html()
            let size = $(this).parent().parent().children('.tdSize').html()
            net.addToPlaylist(album, title, size)
        }

        $('#songs').on('click', '.add', add)

        let check = function () {
            net.checkPlaylist()
        }

        $('#playlist').on('click', check)

        $('body').keyup(function (e) {
            if (e.keyCode == 32) {
                if ($('#visualizing').css('display') == 'none')
                    $('#visualizing').css('display', 'block')
                else
                    $('#visualizing').css('display', 'none')
            }
        })
    }
}