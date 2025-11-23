const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

// Datos embebidos (sin archivo externo)
const data = {
  inicio: {
    title: 'Arctic Monkeys',
    subtitle: 'Alternative rock desde Sheffield',
    heroImage: '/images/hero.svg',
    intro: 'Arctic Monkeys es una banda británica formada en 2002 en Sheffield. Su sonido mezcla el indie rock, garage rock y toques de post-punk, conocido por letras agudas y guitarras afiladas.'
  },
  canciones: [
    {
      title: 'Do I Wanna Know?',
      year: 2013,
      album: 'AM',
      description: 'Riff lento y sensual, uno de sus singles más icónicos y con gran recepción comercial.',
      image: '/images/song1.svg'
    },
    {
      title: 'R U Mine?',
      year: 2012,
      album: 'AM',
      description: 'Canción potente con un ritmo rock intenso y letras sobre deseo y obsesión.',
      image: '/images/song2.svg'
    },
    {
      title: "Why'd You Only Call Me When You're High?",
      year: 2013,
      album: 'AM',
      description: 'Temática nocturna y un groove R&B-rock, crítica y melancolía a la vez.',
      image: '/images/song3.svg'
    },
    {
      title: 'I Bet You Look Good on the Dancefloor',
      year: 2005,
      album: "Whatever People Say I Am, That's What I'm Not",
      description: 'Debut explosivo con energía punky que los lanzó a la fama.',
      image: '/images/song4.svg'
    }
  ],
  albumes: [
    { title: "Whatever People Say I Am, That's What I'm Not", year: 2006, cover: '/images/album1.svg', description: 'Álbum debut, crudo y directo; aclamado por su retrato urbano de la juventud británica.', cssClass: 'album-debut' },
    { title: 'Favourite Worst Nightmare', year: 2007, cover: '/images/album2.svg', description: 'Sonido más rápido y afilado; consolidó su estatus en el rock británico.', cssClass: 'album-fwn' },
    { title: 'Humbug', year: 2009, cover: '/images/album3.svg', description: 'Sonido más oscuro y psicodélico, producido por Josh Homme.', cssClass: 'album-humbug' },
    { title: 'Suck It and See', year: 2011, cover: '/images/album4.svg', description: 'Melodías más pop y letras románticas en contraste con la crudeza previa.', cssClass: 'album-sias' },
    { title: 'AM', year: 2013, cover: '/images/album5.svg', description: 'Mezcla de rock, R&B y hip-hop; gran éxito comercial y crítico.', cssClass: 'album-am' },
    { title: 'Tranquility Base Hotel & Casino', year: 2018, cover: '/images/album6.svg', description: 'Cambio radical hacia sonidos lounge y conceptuales; divisivo pero ambicioso.', cssClass: 'album-tb' },
    { title: 'The Car', year: 2022, cover: '/images/album7.svg', description: 'Estética cinematográfica y producción sofisticada; continuación del cambio estilístico.', cssClass: 'album-car' }
  ],
  historia: {
    inicio: "Formados en 2002 en Sheffield por Alex Turner y amigos, la banda emergió distribuyendo demos por internet y ganó atención local.",
    ascenso: "Su álbum debut (2006) fue un éxito inmediato en Reino Unido; giras y singles consolidaron su popularidad global.",
    evolucion: "A lo largo de los años su sonido fue cambiando: de garage/indie rock a exploraciones más experimentales y producciones pulidas."
  },
  eventos: [
    { year: 2006, place: 'Glastonbury Festival', description: 'Actuación temprana que ayudó a posicionar la banda frente a audiencias masivas.' },
    { year: 2007, place: 'Reading Festival', description: 'Conciertos en festivales principales del Reino Unido durante su ascenso.' },
    { year: 2014, place: 'Tour AM', description: 'Gira mundial que consolidó AM como uno de sus discos más exitosos.' },
    { year: 2022, place: 'Regreso / The Car era', description: 'Regreso con nuevo álbum y actuaciones que mostraron su evolución musical.' }
  ]
};

app.get('/', (req, res) => {
  res.render('index', { data });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
