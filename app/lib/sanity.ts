import { createClient } from "next-sanity";

const projectId = "mlyoavgg";
const dataset = "producion";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
