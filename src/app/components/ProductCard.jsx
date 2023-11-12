import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import React from "react";

export default function ProductCard() {
    return (
        <Card
            isFooterBlurred
            isPressable
            className='w-[300px] h-[300px]'>
            <CardHeader className='absolute z-10 top-1 flex-col items-start'>
                <p className='text-tiny text-white/60 uppercase font-bold'>
                    New
                </p>
                <h4 className='text-black font-medium text-2xl'>Acme camera</h4>
            </CardHeader>
            <Image
                removeWrapper
                isZoomed
                alt='Card example background'
                className='z-0 w-full h-full object-cover'
                src='/images/cake2.jpg'
            />
            <CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
                <div className="hover:underline hover:underline-offset-2">
                    <p className='text-black text-small'>View Details</p>
                </div>
                <Button
                    className='text-tiny bg-gradient-to-tr from-rose-500 to-rose-800 border-rose-500'
                    color='primary'
                    radius='sm'
                    size='sm'>
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    );
}
