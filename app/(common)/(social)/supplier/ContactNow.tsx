'use client'
import SendMessage from '@/components/SendMessage'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import React, { useState } from 'react'

const ContactNow = ({ representative }: any) => {
    const [open, setOpen]= useState<any>(false)
    const [user, setUser] = useState<any>()
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Contact now</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[80%] md:max-w-[30%] max-h-[70vh] p-0 scroll-auto">
                <div className="max-h-[70vh] flex flex-col py-10 p-10">
                    <p className="text-xl font-bold ">Choose a Representative</p>
                    <p className="text-xl py-4 ">
                        Choose a representative to contact.
                    </p>
                    <div className="py-6 flex-1 h-full overflow-auto flex flex-col gap-8">
                        {representative &&
                            representative.map((re: any, index: any) => (
                                <div className="flex flex-col gap-3" key={index}>
                                    <div className="flex gap-3 justify-between items-center">
                                        <div className="flex gap-5 items-center">
                                            <Image
                                                src={re.avatar}
                                                alt="flag"
                                                width={64}
                                                height={64}
                                                className="w-16 h-16"
                                            />
                                            <div>
                                                <p className="font-bold text-[#081440]">
                                                    {re.last_name}
                                                </p>
                                                <p className="font-bold text-[#908E8E]">
                                                    Export Manager
                                                </p>
                                            </div>
                                        </div>
                                        <Checkbox checked={re?.code == user?.code} onCheckedChange={e => {
                                            if (e) {
                                                setUser(re)
                                            }
                                            else {
                                                setUser(undefined)
                                            }
                                        }} />
                                    </div>
                                    <p>
                                        Hi! I'm {re.last_name}. Send me your business card if
                                        you are interested in a collaboration and I will reach
                                        out to you!
                                    </p>

                                </div>
                            ))}
                    </div>
                    <div className="flex gap-1 justify-end pt-8">
                        <SendMessage user={user} setOpen={setOpen}/>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ContactNow