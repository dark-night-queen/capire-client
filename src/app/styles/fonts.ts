import {
  Montserrat,
  Delius_Swash_Caps,
  Montserrat_Alternates,
} from "next/font/google";

// Load the fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const montserrat_alternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const defaultFont = montserrat;
const accentFont = montserrat_alternates;

export { defaultFont, accentFont };
