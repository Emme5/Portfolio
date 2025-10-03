// app/about/page.js
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About - Mongkol",
  description: "Learn more about Mongkol",
}

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg text-muted-foreground mb-8">
        สวัสดีครับ ผมชื่อ Mongkol เป็นนักพัฒนาและนักออกแบบ workflow 
        ที่ชอบทำให้ระบบซับซ้อนกลายเป็นสิ่งที่ใช้งานง่ายและเชื่อถือได้
        โดยเฉพาะงานด้าน AI, RAG pipelines และการทำระบบ bilingual
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1">
              <li>Next.js / React</li>
              <li>n8n Workflow Automation</li>
              <li>Supabase & Database Design</li>
              <li>Vector Embeddings / RAG</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1">
              <li>Building bilingual chatbots</li>
              <li>Optimizing AI agent orchestration</li>
              <li>Creating technical cheat sheets</li>
              <li>Blockchain & Finance workflows</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
