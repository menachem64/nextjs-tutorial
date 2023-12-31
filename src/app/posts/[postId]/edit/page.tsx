// domain.co.il/posts/:postId/edit
import PostForm from '@/components/PostForm';
import { getPost } from '@/services/posts.server'

export const metadata = {
    title: 'Edit Post | Next.js Tutorial',
    description: 'Edit Post Description | Next.js Tutorial'
}

export const dynamic = 'force-static';

interface PostEdit {
    params: {
        postId: string,
    }
}

export default async function PostEditPage(props: PostEdit) {
    const { postId } = props.params;
    const post = await getPost(postId);
    return (
        <>
            <header>
                <h1>PostEdit {props.params.postId} Page</h1>
            </header>
            <br/>
            <PostForm postId={postId} title={post.title} body={post.body} />
        </>
    )
}

