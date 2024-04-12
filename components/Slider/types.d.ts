export interface SliderProps {
  children: React.ReactNode[];
  spaceBetween?: number;
  slidesPerView?: number;
  className?: string;
  dots: boolean;
  arrow?: boolean;
  sliderName: string;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween: number;
    };
  };
}
