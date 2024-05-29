import { postRequest } from '@/hook/api';
import { getPusherInstance } from '@/lib/pusher/server';
import { NextResponse } from 'next/server'
const pusherServer = getPusherInstance();

export async function POST(req: Request, res: Response) {
    const { code, message, time, avatar, name, root, role }: any = await req.json()
    try {
        await pusherServer.trigger(
            'private-chat',
            "Private-User." + code,
            {
                code: code,
                mess: message,
                avatar,
                time,
                name: name,
                root: root
            }
        )
        postRequest('/chat/send-message', {
            "message": message,
            "target_user": code,
            "user_role": role
        })

        return NextResponse.json({ message: "Succes" }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Failed", error: error }, { status: 500 })
    }
}