import { accentFont } from "@/fonts";
import Image from "next/image";
import TitleDivider from "@/assets/icons/section-divider.webp";
import EndCorner from "@/assets/icons/end-corner.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/components/ui";
import { ScrollArea } from "@/lib/components/ui/scroll-area";

export default function Chapter() {
  const chapterDetails = {
    title: "A Prayer",
    content: `The Duke of Lancaster who sought independence from the empire! 
    Toppled by the Emperor’s suppression, the young and beautiful Duchess Ethel Lancaster falls as spoils of war. 
    Standing before the nobles who, not long ago, bowed their heads to her like a slave! Regardless of who takes possession, 
    it is certain that she will become a target for exploitation…. The Emperor seeks consent from a man of humble origin. 
    From the mercenary Count, Rasto Christceros. “Rasto, do you not need a woman?” “Well, I do lack a maid at home.” 
    Rasto’s response captivates the Emperor, who wanted to set an example for the nobles. ***
    Ethel, now a ‘possession’ of Rasto, contemplates ending her life before suffering disgrace, but Rasto orders her to work
    as a maid. However, in the eyes of the once perfect Duchess, Count Christceros seems terribly lacking. From the dreary interior of the mansion, cheap decorations, indifferent servants, to the groveling maids acting like those in power…. ‘Is revealing this going too far, or is it a crucial point?’ The highly experienced novice maid, Ethel, begins to gradually change County Christceros. Including the master of the house, Rasto Christceros.`,
  };

  const { title, content } = chapterDetails;

  return (
    <Card className="border-none shadow-2xl ">
      <ScrollArea className="h-screen">
        <CardHeader className="justify-items-center">
          <CardTitle
            className={`${accentFont.className} capitalize font-bold text-3xl`}
          >
            {title}
          </CardTitle>
          <Image
            src={TitleDivider}
            alt="Title Divider Image"
            className="-mt-3"
            height={70}
          />
        </CardHeader>

        <CardContent>{content}</CardContent>
      </ScrollArea>

      <Image
        src={EndCorner}
        alt="Chapter Image"
        className="fixed bottom-2 right-2 opacity-8"
        height={200}
      />
    </Card>
  );
}
