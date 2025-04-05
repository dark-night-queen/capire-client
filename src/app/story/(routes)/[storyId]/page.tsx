import { Grid } from "@/lib/components/grid";
import { Overview, Description, Related, Comments } from "../../_components";
import { dummyStory } from "@/lib/dummy/story";

export default function Story() {
  return (
    <Grid gap={6}>
      <Overview />
      <Description description={dummyStory.description} />
      <Related />
      <Comments />
    </Grid>
  );
}
