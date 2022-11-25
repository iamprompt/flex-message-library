import { FC } from 'react'

interface CarouselWrapperProps {
  children?: React.ReactNode
}

const CarouselWrapper: FC<CarouselWrapperProps> = ({ children }) => {
  return (
    <div className="LySlider">
      <div className="lyInner">{children}</div>
    </div>
  )
}

export default CarouselWrapper
