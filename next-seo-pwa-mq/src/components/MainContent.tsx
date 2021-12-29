import useMedia from "../hooks/useMedia";
import useWidth from "../hooks/useWidth";

const MainContent = () => {
  const { isDesktopSize } = useMedia();
  const { isDesktopWidthSize } = useWidth();
  return (
    <>
      {isDesktopSize ? (
        <h1>Desktop (window.matchMedia)</h1>
      ) : (
        <h1>Tablet & Mobile (window.matchMedia)</h1>
      )}
      <hr />
      {isDesktopWidthSize ? (
        <h1>Desktop (window.innerWidth)</h1>
      ) : (
        <h1>Tablet & Mobile (window.innerWidth)</h1>
      )}
    </>
  );
};

export default MainContent;
