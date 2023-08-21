'use client'

import { useState } from 'react';
import { savePost } from '@/services/posts.client';
import { useRouter } from 'next/navigation';
interface PostFormProps {
    postId?: string;
    title?: string;
    body?: string

}

export default function PostForm(props: PostFormProps) {
    const [title, setTitle] = useState<string>(props?.title || '')
    const [body, setBody] = useState<string>(props?.body || '')
    const { push } = useRouter();

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        await savePost({ id: props.postId, title, body });
        alert('Post saved successfully')
        push('/posts');
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="md4">
                <label className="post-form_label">Title</label>
                <input className="post-form_input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            </div>
            <div className="md4">
                <label className="post-form_label">Body</label>
                <textarea className="post-form_input" rows={10} value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" />
            </div>
            <button type="submit" className="btn">SEND</button>
        </form>
    )
}