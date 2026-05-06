"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImageModal({
  modalImage,
  onClose,
}: {
  modalImage: { src: string; alt: string } | null;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(1);

  // Reset scale when modal opens/changes
  useEffect(() => {
    setScale(1);
  }, [modalImage]);

  const zoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((s) => Math.min(s + 0.5, 4));
  };
  const zoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((s) => Math.max(s - 0.5, 0.5));
  };

  return (
    <AnimatePresence>
      {modalImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Controls */}
          <div className="absolute top-6 right-6 flex gap-4 z-[110]">
            <button
              onClick={zoomOut}
              className="p-3 bg-[#F7F4EB] text-primary-green hover:bg-primary-green hover:text-[#F7F4EB] rounded-full shadow-xl transition-colors border border-primary-green/20"
            >
              <ZoomOut size={24} />
            </button>
            <button
              onClick={zoomIn}
              className="p-3 bg-[#F7F4EB] text-primary-green hover:bg-primary-green hover:text-[#F7F4EB] rounded-full shadow-xl transition-colors border border-primary-green/20"
            >
              <ZoomIn size={24} />
            </button>
            <button
              onClick={onClose}
              className="p-3 bg-primary-red text-[#F7F4EB] hover:bg-primary-red/80 rounded-full shadow-xl transition-colors border border-primary-red/20 ml-4"
            >
              <X size={24} />
            </button>
          </div>

          {/* Image Container */}
          <div
            className="relative w-[95vw] h-[90vh] flex items-center justify-center overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              animate={{ scale }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full h-full cursor-grab active:cursor-grabbing origin-center"
            >
              <Image src={modalImage.src} alt={modalImage.alt} fill className="object-contain" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
