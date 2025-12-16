import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Popup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg rounded-2xl p-0 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-5 text-white">
          <span className="inline-block mb-2 text-xs font-semibold tracking-wide bg-white/20 px-3 py-1 rounded-full">
            🚀 Announcement
          </span>
          <DialogTitle className="text-2xl font-bold leading-tight">
            Coin Launching Soon
          </DialogTitle>
          <p className="mt-1 text-sm text-white/80">
            Official release date confirmed
          </p>
        </div>

        {/* Content */}
        <DialogHeader className="px-6 pt-6">
          <DialogDescription className="text-base text-gray-600 leading-relaxed">
            Our coin will officially launch on  
            <span className="font-semibold text-gray-900"> January 1, 2026</span>.  
            Get ready for early access, rewards, and ecosystem benefits.
          </DialogDescription>
        </DialogHeader>

        {/* Footer */}
        <DialogFooter className="px-6 pb-6 pt-4 flex gap-3 sm:justify-end">
          {/* <Button
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Maybe Later
          </Button> */}

          <Button
            className="bg-indigo-600 hover:bg-indigo-700"
            onClick={() => setOpen(false)}
          >
            Notify Me
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}
