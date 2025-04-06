import { Grid } from "@/lib/components/grid";
import { Overview, Description, Related, Comments } from "../../_components";
import { dummyStory } from "@/lib/dummy/story";
import { Box } from "@/lib/components/box";

export default function Story() {
  return (
    <Grid gap={6}>
      <Box className="bg-gradient-to-b from-teal-500 to-transparent">
        <Overview {...dummyStory} />
        <Description description={dummyStory.description} />
      </Box>
      <Related />
      <Comments />
    </Grid>
  );
}
