import React from "react";
import { X } from "lucide-react"; // Uses your existing Lucide icon library

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const PolicyModal = ({
  isOpen,
  onClose,
  title,
  children,
}: PolicyModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="glass-card w-full max-w-3xl max-h-[80vh] flex flex-col overflow-hidden bg-slate-900 border border-slate-800 rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h3 className="text-2xl font-bold text-white">
            <span className="gradient-text">{title}</span>
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto text-slate-300 space-y-4 text-sm leading-relaxed max-w-none prose prose-invert">
          {children}
        </div>
      </div>
    </div>
  );
};
