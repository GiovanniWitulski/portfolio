import { Technology } from "./technology";

export interface Project {
    title: string;
    technologies: Technology[];
    imageUrl: string;
    description: string; 
    liveDemoLink: string;
    gitHubLink: string;
    inDevelopment: boolean;
}