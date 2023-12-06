//@ts-nocheck
import { NextResponse } from "next/server"
import {getPosts, createPost} from '../../lib/data'

export async function GET(request: Request) {
       try{
        const posts = getPosts()
        return NextResponse.json({message:'success',data:posts},{status:200})
       }catch (err){
        return NextResponse.json({message:'error',err},{status:500})
       }
}

export async function POST(req: Req,res:Response) {
    const {title, desc} = await req.json();
    try{
        const post = {title, desc, data: new Date, id: Date.now().toString()}
        createPost(post);
        return NextResponse.json('success',{status:200})
    }catch(err){
        return NextResponse.json('error',{status:500, err})
    }
}

export async function DELETE(request: Request) {}
 
export async function HEAD(request: Request) {} 
 
export async function PUT(request: Request) {}
 
export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}