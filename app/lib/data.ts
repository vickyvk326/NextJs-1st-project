type T = {
    id:number,
    title:string,
    desc:string
}
let posts:Array<T> = [
    {
        id:1,
        title:'Post title 1',
        desc:'This is post 1 description'
    },
];

export const getPosts = () => posts;

export const createPost = (post:T) => {
    posts.push(post)
}

export const deletePost = (id: number) => {
    posts = posts.filter(post => post.id !== id)
}

export const updatePost = (id:number, title:string, desc:string) => {
    const post = posts.find(post => post.id === id);
    if (post) {
        post.title = title
        post.desc = desc
    }else{
        throw new Error(`Post with id [${id}]  not found`)
    }
}

export const getPostById = (id:number) => posts.find(post => post.id === id)