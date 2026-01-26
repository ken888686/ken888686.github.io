import { FadeInItem, StaggerContainer } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Github, Linkedin, Mail, Terminal, User } from "lucide-react";
import Link from "next/link";

const personalInfo = {
  name: "Aaron",
  title: "Backend Engineer",
  about: [
    "Software Engineer with 9+ years of backend and full-stack experience.",
    "Specialize in designing and delivering high-performance .NET-based microservices and RESTful APIs (.NET 8 / ASP.NET Core), system migrations, data modeling, and real-time processing—having led migrations and optimizations that produced up to 50% improvements in search performance and supported measurable product growth.",
    "Build production-grade systems with strong test automation and stress-testing practices (MSTest, Locust) and ensure observability and reliability using cloud and DevOps tools (Azure, Azure Functions, Power Platform, Docker, Kubernetes, Prometheus, Grafana).",
    "Trilingual in Mandarin, Japanese, and English, I thrive in cross-functional Agile teams where I translate product needs into robust, maintainable solutions.",
  ],
  skills: [
    "Python",
    "C#.net",
    "TypeScript",
    "React",
    "Next.js",
    "Azure",
    "Docker",
    "Git",
  ],
  location: "Shinjuku, Tokyo",
  tools: ["VS Code", "JetBrains", "Docker", "Visual Studio"],
};

export default function About() {
  return (
    <StaggerContainer className="mx-auto max-w-4xl">
      <FadeInItem>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-12 md:grid-cols-2">
            <StaggerContainer className="space-y-6">
              <FadeInItem className="flex flex-col gap-3">
                {personalInfo.about.map((item, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {item}
                  </p>
                ))}
              </FadeInItem>
              <FadeInItem className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <Link href="https://github.com/ken888686/" target="_blank">
                    <Github size={20} />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <Link
                    href="https://www.linkedin.com/in/yungchuntu/"
                    target="_blank"
                  >
                    <Linkedin size={20} />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <Link href="mailto:ken888686@gmail.com">
                    <Mail size={20} />
                  </Link>
                </Button>
              </FadeInItem>
            </StaggerContainer>
            <StaggerContainer>
              <FadeInItem>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <Code size={20} /> Skills
                </h3>
                <div className="mb-8 flex flex-wrap gap-2">
                  {personalInfo.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground px-3 py-1 text-sm transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </FadeInItem>
              <FadeInItem>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <Terminal size={20} /> Tools
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {personalInfo.tools.map((tool) => (
                    <div
                      key={tool}
                      className="hover:border-primary flex items-center gap-2 rounded border p-2 transition-colors duration-300"
                    >
                      <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                      {tool}
                    </div>
                  ))}
                </div>
              </FadeInItem>
            </StaggerContainer>
          </CardContent>
        </Card>
      </FadeInItem>
    </StaggerContainer>
  );
}
