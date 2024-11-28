export interface ProjectModel {
  isInProgress : boolean;
  imgUrl?: string[];
  name: string;
  shortDescription: string;
  fullDescription: string;
  technologies?: string[];
  gitHubUrl?: string;
}
