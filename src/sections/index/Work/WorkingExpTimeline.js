import { graphql, useStaticQuery } from "gatsby";

import { Box } from "@material-ui/core";
import ExpTimeline from "components/ExpTimeline";
import data from "contents/data";
import useSx from "./useWorkingExperienceTimelineSx";

const WorkingExpTimeline = () => {
  const sx = useSx();
  const { workDoc: { edges: docs } } = useStaticQuery(graphql`
    query {
      workDoc: allFile(
        filter: {sourceInstanceName: {eq: "documents"}, relativeDirectory: {eq: "works"}}
      ) {
        edges {
          node {
            publicURL
            relativePath      
          }
        }
      }
    }  
  `);

  return (
    <Box sx={sx.root}>
      <ExpTimeline
        data={data.work.experiences.map(({ period, position, company, description, proof }) => ({
          period,
          title: position,
          subheader: company,
          description,
          file: proof
            ? docs.find(({ node: { relativePath } }) => relativePath === proof).node.publicURL
            : null
        }))}
      />
    </Box>
  );
};

WorkingExpTimeline.whyDidYouRender = true;

export default WorkingExpTimeline;