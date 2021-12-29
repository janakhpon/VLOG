import { useState, useEffect } from "react";

function useMedia() {
  const [isDesktopSize, setIsDesktopSize] = useState<boolean>(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 960px)");
    const listener = () => setIsDesktopSize(media.matches);
    listener();
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [isDesktopSize]);

  return { isDesktopSize };
}

export default useMedia;
