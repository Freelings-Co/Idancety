import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import EventSlide from './EventSlide';
import EventBR from '../assets/images/EventBR.webp';
import EventAmerica from '../assets/images/EventAM.webp';
import EventES from '../assets/images/EventES.webp';

const slides = [
  {
    imageSrc: EventBR,
    imageAlt: 'Ay Hollywood BR',
    title: `CALENDÁRIO OFICIAL 

A HOLLYWOOD ULTIMATE DANCE EXPERIENCE — TOUR LATINO-AMERICANO 2025/2026

Apresentado por ID+ CONNECT 360 e IDANCETY.COM`,
    description: `COSTA RICA
A jornada começa na Costa Rica com uma série de workshops imersivos que combinam dança, natureza, cultura e experiências VIP.

Sábado, 11 de outubro – Workshop em San José

Domingo, 12 de outubro – Workshop em Cartago

Quinta-feira, 17 de outubro – Workshop em Nosara (praia)

Sábado, 19 de outubro – Workshop em Racó, retiro eco-artístico

Quinta-feira, 24 de outubro – Workshop em Puerto Viejo

25 e 26 de outubro – ID+ VIP Caribbean Experience, fim de semana imersivo com o elenco e convidados especiais no Caribe Costarriquenho


PERU

A turnê continua com energia nos Andes e na costa peruana:

31 de outubro – Workshop de abertura em Lima

1 e 2 de novembro – Ensaios, gravações e imersões culturais em Lima e Miraflores


BRASIL

SALVADOR - BAHIA
7 de novembro (quinta-feira) – Coletiva de imprensa, meet & greet com influencers e três aulas com diretores e convidados especiais

8 de novembro – Ensaios, gravações, experiências VIP com o elenco e produção

9 de novembro – Gravação oficial do primeiro videoclipe da turnê

FORTALEZA
11 de novembro – Chegada e coletiva de imprensa

12 de novembro – Workshop + Sunset Experience

BRASÍLIA + GOIÂNIA
13 a 16 de novembro – Experiência completa no centro do Brasil

14/11 – Workshop em Brasília

15/11 – Ensaios e experiências ID+ VIP

16/11 – Tours e gravações em Goiânia * workshop GOIANIA OPCIONAL

RIO DE JANEIRO
21 de novembro – Evento de boas-vindas e mídia

22 de novembro – Ensaios, gravações e experiências na cidade

23 de novembro – Gravações e turismo com o elenco

SÃO PAULO
28 a 30 de novembro – Primeira etapa de workshops e ativações de experiência 

28 IMPRENDA + workshops 

29 ENSAIOS E GRAVACOES (SABADO AFTER PARTY EM SP )

30 gravacoes oficiais e TOUR VIP

CURITIBA + ITAJAÍ
5 de dezembro – Workshop em Curitiba

6 de dezembro – Ensaios e gravações

7 de dezembro – Workshop e filmagens em Itajaí


ARGENTINA
12 a 14 de dezembro – Três dias de workshops e experiência artística multicultural em Buenos Aires


PARAGUAI
Sábado, 20 de dezembro – Workshop de encerramento em Assunção

FESTAS & ENCERRAMENTO NO RIO
24 de dezembro a 1º de janeiro – Natal e Réveillon com experiências exclusivas para convidados e equipe ID+ no Rio de Janeiro`
  },
  {
    imageSrc: EventAmerica,
    imageAlt: 'Ay Hollywood America',
    title: `TOUR CALENDAR & WORKSHOP ROUTE`,
    description: `COSTA RICA

Sat, Oct 11 San José Main Workshop

Sun, Oct 12 Cartago Workshop + Cultural Experience

Thu, Oct 17 Nosara Workshop by the beach

Sat, Oct 19 Racó Eco-Retreat Dance Workshop

Thu, Oct 24 Puerto Viejo Workshop + VIP Jungle Experience

Oct 25–26 Caribbean CR ID+ VIP Premium Immersive Weekend


PERU

Thu, Oct 31 Lima Opening Workshop

Nov 1–2 Lima + Miraflores Rehearsals + Shoots + Cultural Day



BRAZIL

SALVADOR - BAHIA


Thu, Nov 7 Press Event + Meet & Greet + 3-Class Workshop

Fri, Nov 8 Rehearsals + Filming + VIP Experience

Sat, Nov 9 Official Video Clip Shooting – Salvador


FORTALEZA

Mon, Nov 11 Arrival + Press & Rest

Tue, Nov 12 Workshop + Cultural Night

BRASÍLIA + GOIÂNIA

Nov 13–16 Workshops + Shoots + Artistic Tours

Nov 14 Brasília Workshop

Nov 15 Rehearsals + VIP Sessions

Nov 16 Tours & workshop /Shoots (Goiânia & Brasília) EXTRA CITY 

Nov 13–16 Workshops + Shoots + Artistic Tours

Nov 14 Brasília Workshop

Nov 15 Rehearsals + VIP Sessions

Nov 16 Tours & workshop /Shoots (Goiânia & Brasília) EXTRA CITY 



RIO DE JANEIRO
Thu, Nov 21 Press + Welcome Day

Fri, Nov 22 Rehearsals + Shoots

Sat, Nov 23 Shoots + ID+ City Tour



SÃO PAULO CITY

Nov 28–30 Workshops + Experience Activation

Nov 28–30

Workshops + Experience Activation

28 PRESS AND WORKSHOPS

29 REHAERSALS AND SHOOT + Saturday AFTER PARTY

30 SHOOTING AND TOUR IN SAO PAULO.

 
CURITIBA + ITAJAÍ
Dec 5 Workshop Curitiba
Dec 6 Rehearsals + Shoots
Dec 7 Workshop Itajaí + Shoots

ARGENTINA
Dec 12–14

Buenos Aires

3-Day Dance Tour + Cultural Mix


PARAGUAY


Sat, Dec 20 Asunción Final Tour Workshop



HOLIDAY BREAK – RIO DE JANEIRO
Dec 24–Jan 1 ID+NYE in Rio – VIP Tour & Retreat

HIGHLIGHTS OF THE EXPERIENCE:
Global choreographers, directors & mentors

Flash mobs, professional video shoots

Tourism + dance + branding

Sponsored surprises, fashion shoots, press events

ID+ Premium Access, full VIP branding experience

International growth + press visibility`
  },
  {
    imageSrc: EventES,
    imageAlt: 'Ay Hollywood ES',
    title: `CALENDARIO OFICIAL

AY HOLLYWOOD ULTIMATE DANCE EXPERIENCE — GIRA LATINOAMERICANA 2025/2026

Presentado por IDANCETY.COM`,
    description: `COSTA RICA 
Iniciamos la gira en Costa Rica con una ruta llena de naturaleza, cultura y danza:

Sábado 11 de octubre – Taller en San José

Domingo 12 de octubre – Taller en Cartago

Jueves 17 de octubre – Taller en Nosara (playa)

Sábado 19 de octubre – Taller en Racó, experiencia eco-artística

Jueves 24 de octubre – Taller en Puerto Viejo

25 y 26 de octubre – Fin de semana VIP ID+ en el Caribe, con elenco y talentos invitados



PERÚ
Continuamos con energía andina y costera:

31 de octubre – Taller de apertura en Lima

1 y 2 de noviembre – Ensayos, grabaciones y experiencias culturales en Lima & Miraflores



BRASIL 

SALVADOR - BAHÍA
7 de noviembre (jueves) – Rueda de prensa, meet & greet con influencers y tres clases magistrales

8 de noviembre – Ensayos, grabaciones y experiencias con el elenco

9 de noviembre – Grabación oficial del primer videoclip de la gira


FORTALEZA
11 de noviembre – Llegada y conferencia de prensa

12 de noviembre – Taller + Sunset Experience


BRASÍLIA + GOIÂNIA
13 al 16 de noviembre – Circuito artístico central de Brasil

14/11 – Taller en Brasília

15/11 – Ensayos + Sesión ID+ VIP

16/11 – Tours y grabaciones en Goiânia

RIO DE JANEIRO
21 de noviembre – Bienvenida a medios y talentos

22 de noviembre – Ensayos y producción audiovisual

23 de noviembre – City tour y grabaciones exclusivas

SÃO PAULO
28 al 30 de noviembre – Primera fase de talleres y activaciones

CURITIBA + ITAJAÍ
5 de diciembre – Taller en Curitiba

6 de diciembre – Ensayos y grabaciones

7 de diciembre – Taller y grabaciones en Itajaí


ARGENTINA
12 al 14 de diciembre – Tres días de danza y cultura en Buenos Aires


PARAGUAY
Sábado 20 de diciembre – Taller de cierre en Asunción


FIESTAS DE FIN DE AÑO EN RÍO
24 de diciembre al 1 de enero – Navidad y Año Nuevo con el equipo ID+ en Río de Janeiro

YOUR ID+ can change a whole city. 

`
  }
];

const EventCarousel = () => {
  return (
    <section className="event-carousel-section">
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        style={{ padding: '40px 0' }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <EventSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default EventCarousel;
