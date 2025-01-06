// src/actions/index.ts
'use server';

import { MediaSettings } from "@/types/post";
import { imagekit } from "./utils";

export async function shareAction(formData: FormData, settings: MediaSettings) {
  try {
    const file = formData.get('file') as File;
    const desc = formData.get('desc') as string;

    if (file) {
      // Convertir el archivo a buffer
      const buffer = Buffer.from(await file.arrayBuffer());
      
      // Subir a ImageKit sin metadata por ahora
      const upload = await imagekit.upload({
        file: buffer,
        fileName: file.name,
        // Por ahora omitimos las custom metadata
        // useUniqueFileName: true,
        // customMetadata: {
        //   sensitive: settings.sensitive
        // }
      });

      // Aquí podrías guardar en tu base de datos
      console.log('Upload successful:', upload);
    }

    // Aquí guardarías el post en tu base de datos
    console.log('Post content:', desc);
    
    return { success: true };
  } catch (error) {
    console.error('Error in shareAction:', error);
    throw error;
  }
}