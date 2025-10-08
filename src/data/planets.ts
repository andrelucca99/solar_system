import MercurioImg from '../images/Mercurio.png';
import VenusImg from '../images/Venus.png';
import TerraImg from '../images/Terra.png';
import MarteImg from '../images/Marte.png';
import JupiterImg from '../images/Jupiter.png';
import SaturnoImg from '../images/Saturno.png';
import Uranoimg from '../images/Urano.png';
import Netunoimg from '../images/Netuno.png';

export const Planets = [
  {
    name: 'Mercúrio',
    image: MercurioImg,
    infos: {
      diameter: "4.879 km",
      distanceFromSun: "57,91 milhões de km",
      orbitalPeriod: "88 dias",
      temperature: "167°C",
      description: "Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol.",
      curiosities: [
        "Não possui atmosfera significativa.",
        "Possui crateras semelhantes às da Lua.",
        "Um dia em Mercúrio dura 176 dias terrestres.",
      ],
    },
  },
  {
    name: 'Vênus',
    image: VenusImg,
    infos: {
      diameter: "12.104 km",
      distanceFromSun: "108,2 milhões de km",
      orbitalPeriod: "225 dias",
      temperature: "462°C",
      description: "Vênus é o planeta mais quente do Sistema Solar devido ao efeito estufa.",
      curiosities: [
        "Rota em sentido contrário ao da Terra.",
        "Possui densas nuvens de ácido sulfúrico.",
        "É conhecido como o 'planeta irmão' da Terra.",
      ],
    },
  },
  {
    name: 'Terra',
    image: TerraImg,
    infos: {
      diameter: "12.742 km",
      distanceFromSun: "149,6 milhões de km",
      orbitalPeriod: "365 dias",
      temperature: "15°C",
      description: "A Terra é o único planeta conhecido por abrigar vida.",
      curiosities: [
        "Possui 71% de sua superfície coberta por água.",
        "É o terceiro planeta mais próximo do Sol.",
        "Possui um único satélite natural, a Lua.",
      ],
    },
  },
  {
    name: 'Marte',
    image: MarteImg,
    infos: {
      diameter: "6.779 km",
      distanceFromSun: "227,9 milhões de km",
      orbitalPeriod: "687 dias",
      temperature: "-63°C",
      description: "Marte é conhecido como o 'Planeta Vermelho' devido à presença de óxido de ferro em sua superfície.",
      curiosities: [
        "Possui a maior montanha do Sistema Solar, o Monte Olimpo.",
        "Tem duas luas: Fobos e Deimos.",
        "Já foi alvo de várias missões espaciais.",
      ],
    },
  },
  {
    name: 'Júpiter',
    image: JupiterImg,
    infos: {
      diameter: "139.820 km",
      distanceFromSun: "778,5 milhões de km",
      orbitalPeriod: "12 anos",
      temperature: "-108°C",
      description: "Júpiter é o maior planeta do Sistema Solar e é conhecido por sua Grande Mancha Vermelha.",
      curiosities: [
        "Possui mais de 79 luas, incluindo as quatro luas galileanas: Io, Europa, Ganimedes e Calisto.",
        "A Grande Mancha Vermelha é uma tempestade gigante que dura há séculos.",
        "É composto principalmente de hidrogênio e hélio.",
      ],
    },
  },
  {
    name: 'Saturno',
    image: SaturnoImg,
    infos: {
      diameter: "116.460 km",
      distanceFromSun: "1,4 bilhões de km",
      orbitalPeriod: "29 anos",
      temperature: "-139°C",
      description: "Saturno é famoso por seus anéis impressionantes compostos de gelo e rocha.",
      curiosities: [
        "Possui mais de 80 luas, sendo Titã a maior delas.",
        "Seus anéis são compostos principalmente de partículas de gelo.",
        "É o segundo maior planeta do Sistema Solar.",
      ],
    },
  },
  {
    name: 'Urano',
    image: Uranoimg,
    infos: {
      diameter: "50.724 km",
      distanceFromSun: "2,9 bilhões de km",
      orbitalPeriod: "84 anos",
      temperature: "-195°C",
      description: "Urano é conhecido por sua rotação inclinada, girando quase de lado em relação ao Sol.",
      curiosities: [
        "Possui 27 luas conhecidas, sendo Titânia a maior.",
        "É o planeta mais frio do Sistema Solar.",
        "Sua cor azulada é devido ao metano em sua atmosfera.",
      ],
    },
  },
  {
    name: 'Netuno',
    image: Netunoimg,
    infos: {
      diameter: "49.244 km",
      distanceFromSun: "4,5 bilhões de km",
      orbitalPeriod: "165 anos",
      temperature: "-201°C",
      description: "Netuno é o planeta mais distante do Sol e é conhecido por seus ventos extremamente fortes.",
      curiosities: [
        "Possui 14 luas conhecidas, sendo Tritão a maior.",
        "Foi o primeiro planeta descoberto por cálculos matemáticos.",
        "Apresenta uma Grande Mancha Escura, semelhante à de Júpiter.",
      ],
    },
  },
];
