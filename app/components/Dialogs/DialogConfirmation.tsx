"use client";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import ReactDOM from "react-dom";

export default function DialogConfirmation({
  isOpen,
  onClose,
  children,
  onConfirm,
  btnConfirmColor,
  btnConfirmIcon: Icon,
  btnConfirmTitle,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  onConfirm: () => void;
  btnConfirmColor: string;
  btnConfirmIcon: LucideIcon;
  btnConfirmTitle: string;
}) {
  if (!isOpen) return null;
  return typeof window !== "undefined"
    ? ReactDOM.createPortal(
        <div
          className="fixed inset-0 bg-gray-800/50 flex justify-center items-center px-4"
          onClick={onClose}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">{children}</div>
            <div className="flex justify-end gap-2 font-semibold">
              <button
                onClick={onClose}
                className="mt-4 rounded-2xl px-4 py-2 bg-gray-200 text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className={`${btnConfirmColor} mt-4 rounded-2xl px-4 py-2 flex items-center gap-2`}
              >
                {btnConfirmTitle} {Icon && <Icon className="size-4" />}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
}
