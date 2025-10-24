import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import amsetImage from '../components/img/amset.png'; 

const projects = [
  {
    title: "Application Amset",
    description: "un outil interne qui permettra aux commerciaux d affecter des ressources humaines (ingénieurs, experts, techniciens, …) à certaines mission",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    Image: "/img/amset.png",
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour visualiser des données en temps réel",
    tags: ["Vue.js", "D3.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Application Mobile",
    description: "App mobile cross-platform pour la gestion de tâches et productivité",
    tags: ["React Native", "TypeScript", "Redux"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
  {
    title: "Site Corporate",
    description: "Site vitrine moderne et responsive pour entreprise technologique",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Plateforme SaaS",
    description: "Solution complète de gestion de projet avec collaboration en temps réel",
    tags: ["React", "GraphQL", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
  },
  {
    title: "Portfolio Créatif",
    description: "Site portfolio avec animations 3D et transitions fluides",
    tags: ["Three.js", "GSAP", "WebGL"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Projets <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Récents</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Voici les projets que j'ai réalisé récemment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
