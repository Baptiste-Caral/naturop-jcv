import { PrismaClient } from '@prisma/client'
import Link from 'next/link'


export default async function Blog() {
    const prisma = new PrismaClient()


    const posts = await prisma.post.findMany()
    console.log(posts)
    


    return (
        <div>
            {posts.map(p => (
            <div key="{p.id}">
                <div>Id: {p.id}</div>
                <div>Title: {p.title}</div>
                <div>Content: {p.content}</div>
                <div>authorId: {p.authorId}</div>
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </div>
        ))}
        </div>
    )
}