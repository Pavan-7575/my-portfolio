import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function getVisibleCount(config) {
  if (window.innerWidth < 576) {
    return config.mobile
  }

  if (window.innerWidth < 992) {
    return config.tablet
  }

  return config.desktop
}

function ContentCarousel({
  ariaLabel,
  children,
  desktop = 3,
  tablet = 2,
  mobile = 1,
  autoPlay = false,
}) {
  const items = Array.isArray(children) ? children : [children]
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(desktop)
  const [slideSize, setSlideSize] = useState(0)
  const maxIndex = Math.max(items.length - visibleCount, 0)
  const pageStarts = useMemo(
    () =>
      Array.from({ length: Math.ceil(items.length / visibleCount) }, (_, index) =>
        Math.min(index * visibleCount, maxIndex),
      ).filter((start, index, starts) => starts.indexOf(start) === index),
    [items.length, maxIndex, visibleCount],
  )
  const pageCount = pageStarts.length
  const currentPage = Math.max(pageStarts.indexOf(activeIndex), 0)

  useEffect(() => {
    const updateCarousel = () => {
      const nextVisibleCount = Math.min(
        getVisibleCount({ desktop, tablet, mobile }),
        items.length,
      )
      const firstSlide = trackRef.current?.querySelector('.carousel-slide')
      const gap = trackRef.current
        ? Number.parseFloat(getComputedStyle(trackRef.current).columnGap || '0')
        : 0

      setVisibleCount(nextVisibleCount)
      setSlideSize(firstSlide ? firstSlide.getBoundingClientRect().width + gap : 0)
      setActiveIndex((index) => Math.min(index, Math.max(items.length - nextVisibleCount, 0)))
    }

    updateCarousel()
    window.addEventListener('resize', updateCarousel)

    return () => window.removeEventListener('resize', updateCarousel)
  }, [desktop, items.length, mobile, tablet])

  const moveToPage = (nextPage) => {
    if (nextPage < 0) {
      setActiveIndex(pageStarts[pageCount - 1] ?? 0)
      return
    }

    if (nextPage >= pageCount) {
      setActiveIndex(pageStarts[0] ?? 0)
      return
    }

    setActiveIndex(pageStarts[nextPage] ?? 0)
  }

  useEffect(() => {
    if (!autoPlay || maxIndex === 0) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => {
        const page = pageStarts.indexOf(index)
        const nextPage = page === pageCount - 1 ? 0 : page + 1

        return pageStarts[nextPage] ?? 0
      })
    }, 3500)

    return () => window.clearInterval(timer)
  }, [autoPlay, maxIndex, pageCount, pageStarts])

  return (
    <div
      className="content-carousel"
      style={{ '--visible': visibleCount }}
      aria-label={ariaLabel}
    >
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          ref={trackRef}
          style={{ transform: `translateX(-${activeIndex * slideSize}px)` }}
        >
          {items.map((item, index) => (
            <div className="carousel-slide" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button
          className="carousel-btn"
          type="button"
          onClick={() => moveToPage(currentPage - 1)}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="carousel-count">
          {currentPage + 1} / {pageCount}
        </span>
        <div className="carousel-dots">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              className={`carousel-dot ${currentPage === index ? 'active' : ''}`}
              type="button"
              key={index}
              onClick={() => moveToPage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          className="carousel-btn"
          type="button"
          onClick={() => moveToPage(currentPage + 1)}
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default ContentCarousel
