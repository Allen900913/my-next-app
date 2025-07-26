import React from "react";
import Image from "next/image";
import { photos } from "@/data";

export default function page({ params }: { params: { id: string } }) {
  const photo = photos.find((photo) => photo.id === params.id);
  return (
    <div className="container p-8">
      <Image src={photo?.src ?? "/placeholder.png"} width={300} height={300} className="rounded-lg block mx-auto" alt={photo?.alt ?? "placeholder"} />

      <div className="border-2 border-dashed border-gray-500 rounded-lg p-4 mt-6">
        <p>
            <strong>Title:{photo?.name}</strong>
        </p>
        <p>
            <strong>Price: ${photo?.price}</strong>
        </p>
        <p>
            <strong>Description:</strong> {photo?.alt}
        </p>
      </div>
    </div>
  );
}
