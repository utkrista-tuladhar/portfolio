import cheersLogo from '../assets/cheers_logo.png';
import jmeLogo from '../assets/JME-logo.jpg';
import innovativeLogo from '../assets/innovative_logo.png';
import ansuLogo from '../assets/ansu_logo.png';

export interface Client {
  id: string;
  name: string;
  logo: string;
  description?: string;
}

export const clientsData: Client[] = [
  {
    id: "client-1",
    name: "Cheers Online Liquor Store",
    logo: cheersLogo,
    description: "Graphic Design Client",
  },
  {
    id: "client-2",
    name: "Japan Money Express",
    logo: jmeLogo,
    description: "Graphic Design Client",
  },
  {
    id: "client-3",
    name: "Innovative Solutions",
    logo: innovativeLogo,
    description: "Graphic Design Client",
  },
  {
    id: "client-4",
    name: "Ansu Investment",
    logo: ansuLogo,
    description: "Graphic Design Client",
  },
];
