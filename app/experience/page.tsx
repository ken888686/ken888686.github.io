import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, Cpu } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "AI Engineer",
    company: "某日商科技公司",
    period: "2023 - Present",
    description:
      "負責開發與整合生成式 AI 模型至公司產品線。優化 RAG (Retrieval-Augmented Generation) 流程，提升了 30% 的檢索準確度。同時負責內部 AI 工具的開發，使用 Python 與 Azure OpenAI Service。",
    tech: ["Python", "Azure OpenAI", "LangChain", "FastAPI"],
  },
];

export default function Experience() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-3xl duration-500">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-3xl font-bold">
          <Briefcase /> Experience
        </h2>
      </div>

      <div className="before:bg-secondary-foreground relative space-y-5 before:absolute before:inset-0 before:ml-6 before:h-full before:w-px">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-13">
            <div className="border-secondary-foreground bg-secondary-foreground absolute top-6 left-3.5 z-10 -ml-1.5 flex h-8 w-8 items-center justify-center rounded-full border-4">
              <Cpu size={14} className="text-secondary" />
            </div>

            <Card className="hover:text-secondary-foreground transition-colors">
              <CardHeader className="pb-2">
                <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
                <CardDescription className="text-secondary-foreground flex items-center gap-2 text-base font-medium">
                  {exp.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="dark:border-secondary-foreground"
                    >
                      #{t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
