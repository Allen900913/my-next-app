'use client'

import React from 'react'
import Image from 'next/image';
import { photos } from "@/data";
import { useRouter } from 'next/navigation';

export default function page({ params }: { params: { id: string } }) {
    const photo = photos.find((photo) => photo.id === params.id);
    const router = useRouter();
  return (
    <div className='flex items-center justify-center fixed inset-0 bg-gray-500/[.8]' onClick={() => router.back()}>
      <Image src={photo?.src ?? "/placeholder.png"} width={500} height={500} className="rounded-lg block mx-auto" alt={photo?.alt ?? "placeholder"} onClick={(e) => e.stopPropagation()}></Image>
    </div>
  )
}
