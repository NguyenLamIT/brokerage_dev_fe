'use client'
import React from 'react'
import { Button } from './ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { getSession } from 'next-auth/react'
import { useToast } from './ui/use-toast'
import { ToastAction } from './ui/toast'

const SendMessage = ({ user, setOpen }: any) => {
    const route = useRouter()
    const { toast } = useToast();
    return (
        <Button onClick={() =>
            getSession().then((session) => {
                let u = session?.user;
                if (!u) {
                    toast({
                        variant: "warning",
                        title: "Warning!",
                        description: "Please Login",
                        action: <ToastAction altText="Try again">Done</ToastAction>,
                    });
                    route.push('/signin')
                }
                else {
                    if (user) {
                        localStorage.setItem("user-mess", JSON.stringify(user))
                        setOpen && setOpen(false)
                        const bellChatElement = document.getElementById('bell-chat');

                        // Kiểm tra xem phần tử có tồn tại không
                        if (bellChatElement) {
                            // Gọi phương thức click() để kích hoạt sự kiện click trên phần tử
                            bellChatElement.click();
                        }
                    }
                }
            })
        }
        > Send Message</Button >
    )
}

export default SendMessage