'use client';

import { useRef, useState } from 'react';
import { videoReviews } from '@/data/site';

const reviewImages = [
  'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
];

export default function VideoReviewsTriptych() {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);
  const total = videoReviews.length;

  function show(index) {
    setActive((index + total) % total);
  }

  function onKeyDown(event) {
    if (event.key === 'ArrowLeft') show(active - 1);
    if (event.key === 'ArrowRight') show(active + 1);
  }

  function onTouchEnd(event) {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) show(distance > 0 ? active - 1 : active + 1);
    touchStart.current = null;
  }

  const review = videoReviews[active];
  const previous = videoReviews[(active - 1 + total) % total];
  const next = videoReviews[(active + 1) % total];

  const prevImg = reviewImages[(active - 1 + total) % total];
  const activeImg = reviewImages[active];
  const nextImg = reviewImages[(active + 1) % total];

  return (
    <div className="testimonial-triptych" aria-roledescription="carousel" aria-label="Paveworks customer reviews" tabIndex="0" onKeyDown={onKeyDown}>
      <div className="testimonial-triptych__stage" onTouchStart={event => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={onTouchEnd}>
        <div className="testimonial-triptych__track">
          <button className="testimonial-side testimonial-side--left" type="button" onClick={() => show(active - 1)} aria-label={`Previous review: ${previous.name}`}>
            <img src={prevImg} alt="" />
            <span><strong>{previous.name}</strong><small>{previous.location} · {previous.project}</small></span>
          </button>

          <figure className="testimonial-active" key={review.name}>
            <div className="testimonial-active__media">
              <img src={activeImg} alt={review.project} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p className="testimonial-active__quote">"{review.quote}"</p>
            <figcaption>
              <strong>{review.name}</strong>
              <span>{review.location} · {review.project}</span>
            </figcaption>
          </figure>

          <button className="testimonial-side testimonial-side--right" type="button" onClick={() => show(active + 1)} aria-label={`Next review: ${next.name}`}>
            <img src={nextImg} alt="" />
            <span><strong>{next.name}</strong><small>{next.location} · {next.project}</small></span>
          </button>
        </div>

        <button className="triptych-arrow triptych-arrow--previous" type="button" onClick={() => show(active - 1)} aria-label="Previous customer review">←</button>
        <button className="triptych-arrow triptych-arrow--next" type="button" onClick={() => show(active + 1)} aria-label="Next customer review">→</button>
      </div>

      <div className="testimonial-triptych__footer">
        <div className="testimonial-dots" role="group" aria-label="Choose a customer review">
          {videoReviews.map((item, index) => (
            <button 
              key={item.name} 
              type="button" 
              className={index === active ? 'is-active' : ''} 
              aria-label={`Show review ${index + 1}: ${item.name}`} 
              aria-current={index === active ? 'true' : undefined} 
              onClick={() => show(index)}
            >
              <span />
            </button>
          ))}
        </div>
        <p><strong>{String(active + 1).padStart(2, '0')}</strong> / {String(total).padStart(2, '0')}</p>
      </div>
    </div>
  );
}
