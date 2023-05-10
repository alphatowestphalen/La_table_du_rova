import sliderImg02 from "../images/slider2.png";
import sliderImg03 from "../images/slider03.png";

import bkgimg1 from "../images/back_1.jpg";
import bkgimg2 from "../images/back_2.jpg";
import bkgimg3 from "../images/back_3.jpg";
 


export const backgrond = [
  {
    id : "01",
  },
  {
    id : "02",
    urlImg : bkgimg2,
  },
  {
    id : "03",
    urlImg : bkgimg3,
  },
];

export const sliderData = [
  {
    id: "01",
    title: "Nouvelle étape gourmande sur le circuit de la RN7.",
    descn:
      "Située au coeur du quartier historique Ville Haute/Tanàna Ambony dans une maison typiquement Betsileo, LA TABLE DU ROVA vous propose une cuisine passionnée et créative à base de produits frais et locaux. Vous aurez le choix entre vous attablez dans notre pittoresque salle de restaurant à la décoration cosy ou vous installez sur notre charmante terrasse à vue panoramique et à végétation luxuriante et profiter des belles journées ensoleillées.",
    urlImg : bkgimg1,
    
    },
  {
    id: "02",
    title: "Le rêve d’une jeune femme, devenu réalité au début de l’année 2023",
    descn: "Après avoir suivi les enseignements de l’Ecole Hôtelière de la Rizière de Fianarantsoa et obtenu son diplôme avec succès, Annah RAMAMPY  a entrainé avec elle son complice de promotion Florentin RAZAFINDRAMASY pour créer sa propre entreprise. Puis se sont joints à eux Léonce et Marie"
            + " A la Table du Rova, nous sommes tous des passionnés de cuisine et de bonnes choses. Aux fourneaux, nous avons plaisir à vous préparer et servir des plats raffinés et cuisinés avec amour."
            +" Nous vous faisons profiter de notre savoir-faire dans le cadre particulièrement agréable de la Haute Ville de Fianarantsoa."
            +"Si vous souhaitez apprendre à mieux nous connaître, ou tout simplement avoir une idée plus précise de notre carte , nous vous invitons à suivre notre restaurant  sur nos réseaux sociaux, à commencer par notre page ",
    imgUrl: sliderImg02,
    urlImg : bkgimg2,
    urlfb: <a href="https://www.facebook.com/profile.php?id=100089913078909">Facebook</a>,

  },
  {
    id: "03",
    title: "La Table du Rova",
    descn: "A la Table du Rova, nous sommes tous des passionnés de cuisine et de bonnes choses. Aux fourneaux, nous avons plaisir à vous préparer et servir des plats raffinés et cuisinés avec amour. "
          +"Nous vous faisons profiter de notre savoir-faire dans le cadre particulièrement agréable de la Haute Ville de Fianarantsoa.",
    imgUrl: sliderImg03,
    urlImg : bkgimg3,

  },
];
