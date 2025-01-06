// src/components/features/Share/index.tsx
"use client";

import { useState, useEffect } from "react";
import NextImage from "next/image";
import { shareAction } from "@/actions";
import { ASSET_PATHS } from "@/constants/paths";
import Image from "@/components/commons/Image";
import { MediaSettings } from "@/types/post";
import ImageEditor from "@/components/ImageEditor";
import { ShareTool } from "./types";

const SHARE_TOOLS: ShareTool[] = [
  { icon: ASSET_PATHS.icons.image, alt: "Add image", type: 'file' },
  { icon: ASSET_PATHS.icons.gif, alt: "Add GIF", type: 'button' },
  { icon: ASSET_PATHS.icons.poll, alt: "Add poll", type: 'button' },
  { icon: ASSET_PATHS.icons.emoji, alt: "Add emoji", type: 'button' },
  { icon: ASSET_PATHS.icons.schedule, alt: "Schedule post", type: 'button' },
  { icon: ASSET_PATHS.icons.location, alt: "Add location", type: 'button' },
];

const Share = () => {
  // Estado para controlar el montaje del componente
  const [isMounted, setIsMounted] = useState(false);
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<MediaSettings>({
    type: "original",
    sensitive: false,
  });

  // Solo renderizamos el componente después del montaje inicial
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
    }
  };

  // No renderizamos nada hasta que el componente esté montado
  if (!isMounted) {
    return null;
  }

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <div className="p-4 border-b border-borderGray">
      <form
        className="flex gap-4"
        action={() => console.log("Hi")}
      >
        {/* Avatar */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={ASSET_PATHS.general.avatar}
            width={100}
            height={100}
            alt="User avatar"
            useTransformation={true}
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="relative">
            <textarea
              name="desc"
              placeholder="What is happening?"
              className="w-full bg-transparent outline-none placeholder:text-textGray text-xl resize-none"
              rows={1}
              onChange={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />
          </div>

          {/* Media Preview */}
          {media && previewURL && (
            <div className="relative rounded-xl overflow-hidden">
              <NextImage
                src={previewURL}
                alt="Media preview"
                width={600}
                height={600}
                className={`w-full ${
                  settings.type === "original"
                    ? "h-full object-contain"
                    : settings.type === "square"
                    ? "aspect-square object-cover"
                    : "aspect-video object-cover"
                }`}
              />
              
              <button
                type="button"
                className="absolute top-2 left-2 bg-black/50 text-white py-1 px-4 rounded-full font-bold text-sm"
                onClick={() => setIsEditorOpen(true)}
              >
                Edit
              </button>
              
              <button
                type="button"
                className="absolute top-2 right-2 bg-black/50 text-white h-8 w-8 flex items-center justify-center rounded-full font-bold text-sm"
                onClick={() => setMedia(null)}
              >
                ✕
              </button>
            </div>
          )}

          {/* Tools */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex gap-4 flex-wrap">
              <input
                type="file"
                name="file"
                onChange={handleMediaChange}
                className="hidden"
                id="file"
                accept="image/*,video/*"
              />
              {SHARE_TOOLS.map((tool) => (
                <div key={tool.alt} className="cursor-pointer">
                  {tool.type === 'file' ? (
                    <label htmlFor="file">
                      <Image
                        src={tool.icon}
                        width={20}
                        height={20}
                        alt={tool.alt}
                        className="cursor-pointer"
                      />
                    </label>
                  ) : (
                    <Image
                      src={tool.icon}
                      width={20}
                      height={20}
                      alt={tool.alt}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              ))}
            </div>
            
            <button 
              type="submit"
              className="bg-white text-black font-bold rounded-full py-2 px-4"
            >
              Post
            </button>
          </div>
        </div>
      </form>

      {/* Image Editor Modal */}
      {isEditorOpen && previewURL && (
        <ImageEditor
          onClose={() => setIsEditorOpen(false)}
          previewURL={previewURL}
          settings={settings}
          setSettings={setSettings}
        />
      )}
    </div>
  );
};

export default Share;