import { Box, Grid } from "@/lib/components";
import { Overview, Description, Related, Comments } from "../../_components";
import { dummyStory } from "@/lib/dummy/story";
import { Chapters } from "../../_components/Chapters";

/**
 * Story Page Component
 *
 * This component renders the story page, including the story overview, description, related stories, and comments.
 */
export default function Story() {
  return (
    <>
      <Box className="bg-gradient-to-b from-teal-500 to-transparent px-6 md:px-20">
        <Overview {...dummyStory} />
        <Description description={dummyStory.description} />
      </Box>

      <Grid gap={6} className="px-6 md:px-20">
        <Chapters />
        <Related />
        <Comments />
      </Grid>
    </>
  );
}
