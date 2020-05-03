const remote = require('electron').remote
const main = remote.require('./main.js')

// let button = document.createElement('button')
// button.textContent = "Open Window"
// document.body.appendChild(button)

// button.addEventListener('click', () => {
//     main.openWindow()
// })

$(function() {
    const os = require('os')
    const prettyBytes = require('pretty-bytes')

    $('.stats').append('Numero de procesadores: <span>' + os.cpus().length + '</span>')
    $('.stats').append('Memoria: <span>' + prettyBytes(os.freemem()) + '</span>')

    const ul = $('.flipster ul');

    $.get('http://enupal.com/blog/rss', function(response) {

        const rss = $(response)

        rss.find('item').each(function() {

            const item = $(this);
            const content = item.find('description').html().split('</a></div>')[0] + '</a></div>'; //Se obtiene el primer valor de la consulta
            const urlRegex = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g; //Se obtiene la url
            const imageSource = content.match(urlRegex)[1].slice(19); //Esta imagen contendrá la url que se ha busado con anterioridad
            const li = $('<li><img /><a target="_blank"></a></li>')

            li.find('a') //Encuentra todas las etiquetas que lleven a
                .attr('href', item.find('link').text())
                .html('<br>' + item.find('title').text())

            li.find('img').attr('src', imageSource) //Aquí se coloca la dirección ul
            li.find('img').attr('width', 400) //Se da el tamaño y largo de la imagen
            li.find('img').attr('height', 300)

            li.appendTo(ul) //Permite agregar todas las etiquetas li a la etiqueta ul del index.html

        });
        // init plugin
        $('.flipster').flipster({
            style: 'carousel'
        });

    });

});