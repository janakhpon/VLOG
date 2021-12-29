import { useState, useEffect } from "react";

function useWidth() {
  const [isDesktopWidthSize, setIsDesktopWidthSize] = useState<boolean>(false);
  useEffect(() => {
    const listener = () => setIsDesktopWidthSize(window.innerWidth > 960);
    listener();
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [isDesktopWidthSize]);

  return { isDesktopWidthSize };
}

export default useWidth;
