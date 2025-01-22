declare module "*.yaml" {
  const content: Experience[] | Project[];
  export default content;
}

declare module "*.yml" {
  const content: Experience[] | Project[];
  export default content;
}
