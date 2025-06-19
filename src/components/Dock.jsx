import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconMail,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { LinkedinIcon } from "lucide-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <LinkedinIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/adithyan-t-ba37b9220/",
    },
    {
      title: "Mail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://adithyant.mail@gmail.com",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Adithya07560528",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Adith628",
    },
  ];
  return (
    <div className="flex items-center justify-center mt-4 ">
      <FloatingDock
        // only for demo, remove for production
        // mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
