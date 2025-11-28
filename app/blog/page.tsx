"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "從 C# 開發者視角看 Next.js：App Router 的優勢",
    date: "2024-03-15",
    category: "Next.js",
    excerpt:
      "作為一個習慣 C# 強型別與後端邏輯的開發者，Next.js 的 Server Components 讓我有種似曾相識的感覺...",
    content: `
      <p>最近開始深入研究 Next.js，特別是 App Router 架構。作為一個習慣 C# 強型別與後端邏輯的開發者，Next.js 的 Server Components 讓我有種似曾相識的感覺，就像是在寫 ASP.NET 的 Razor Pages，但更加靈活且前端整合更緊密。</p>
      <h3 class="text-xl font-bold mt-6 mb-2 text-zinc-50">Server Components 的魅力</h3>
      <p>能夠在 Component 層級直接存取資料庫（當然要注意安全邊界），大大幅減少了 API endpoints 的boilerplate code。這對於習慣後端思維的我來說，是一個非常直觀的開發模式。</p>
    `,
  },
  {
    id: 2,
    title: "東京生活日記：新宿御苑的櫻花與程式碼",
    date: "2024-04-02",
    category: "Life",
    excerpt:
      "搬來新宿納戸町附近也有一段時間了。每當寫程式卡關時，去新宿御苑散步總能帶來新的靈感...",
    content: `
      <p>搬來新宿納戸町附近也有一段時間了。這裡離繁華的新宿車站有一段剛好的距離，安靜卻又便利。</p>
      <p>每當寫程式卡關，或是 AI 模型訓練不如預期時，我也會帶著我的筆電或是單純帶著思緒，去附近散步。東京的快節奏與工程師的理性思維中，這種片刻的寧靜顯得格外重要。</p>
    `,
  },
  {
    id: 3,
    title: "我的吉他與效果器盤配置 (2024 ver.)",
    date: "2023-12-10",
    category: "Music",
    excerpt:
      "最近調整了敬拜團的 setup。主角依然是那把 FGN Strat，但透過 Line6 Pod GO，我找到了一些新的音色...",
    content: `
      <p>最近調整了主日敬拜的 setup。主角依然是那把 FGN Neo Classic Strat，它的手感對於我們這種手不大的人來說非常友善。</p>
      <h3 class="text-xl font-bold mt-6 mb-2 text-zinc-50">Line6 Pod GO 的應用</h3>
      <p>為了方便移動（畢竟東京電車人很多），我現在主要依賴 Line6 Pod GO。我設定了幾個 Snapshot 專門應對現代敬拜音樂需要的 Ambient Pad 和 Clean Tone。透過 IR (Impulse Response) 的加持，直入 PA 的聲音已經非常令人滿意。</p>
    `,
  },
];

export default function Blog() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-5xl duration-500">
      <div className="mb-10">
        <h2 className="mb-2 flex items-center gap-3 text-3xl font-bold">
          <BookOpen /> 技術與生活筆記
        </h2>
        <p className="text-secondary-foreground">
          紀錄關於 AI 開發、Next.js 學習心得以及東京生活的點滴。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="block">
            <Card className="group hover:bg-secondary hover:border-secondary-foreground flex h-full cursor-pointer flex-col transition-all hover:shadow-xl">
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <Badge
                    variant="outline"
                    className="group-hover:border-secondary-foreground"
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="grow">
                <p className="line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="mt-auto flex justify-between border-t pt-4 text-sm">
                <span>{post.date}</span>
                <span className="flex items-center transition-colors">
                  閱讀更多 <ChevronRight size={16} className="ml-1" />
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
