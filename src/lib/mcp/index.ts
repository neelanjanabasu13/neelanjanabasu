import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listAiProjects from "./tools/list-ai-projects";
import listAmazonProjects from "./tools/list-amazon-projects";
import listExperience from "./tools/list-experience";
import listEducation from "./tools/list-education";

export default defineMcp({
  name: "neelanjana-portfolio-mcp",
  title: "Neelanjana Basu Portfolio",
  version: "0.1.0",
  instructions:
    "Read-only tools for Neelanjana Basu's portfolio site. Use get_profile for identity and links, list_ai_projects for the AI products she has built during her career break, list_amazon_projects for the four products she shipped and scaled at Amazon, list_experience for her work history, and list_education for her schools.",
  tools: [getProfile, listAiProjects, listAmazonProjects, listExperience, listEducation],
});
