import { useMediaQuery } from 'react-responsive';

const useCustomBreakpoints = () => {
  const isMobile = useMediaQuery({ maxWidth: 576 }); // 小於 576px
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 768 }); // 577px ~ 768px
  const isDesktop = useMediaQuery({ minWidth: 769, maxWidth: 992 }); // 769px ~ 992px
  return { isMobile, isTablet, isDesktop }
};

export default useCustomBreakpoints;
