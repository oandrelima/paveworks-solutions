'use client';

import { useState } from 'react';
import { contact } from '@/data/site';

const referralOptions = [
  'Google Search',
  'Commercial Property Referral',
  'Instagram / Social Media',
  'Neighbor / Word of Mouth',
  'Returning Client',
  'Other / Jobsite Sign',
];

const serviceOptions = [
  'Interlocking Pavers & Driveways',
  'Asphalt Paving & Resurfacing',
  'Commercial Parking Lots & ADA',
  'Sealcoating & Hot Crack Sealing',
  'Concrete Flatwork & Masonry',
  'Paver Restoration & Sealing',
  'Custom Commercial / Civil Project',
];

const quoteEndpoint = 'https://formsubmit.co/ajax/contact@paveworkssolutions.com';

export default function QuoteForm() {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = Object.fromEntries(formData);

      // Silently accept bot submissions caught by the honeypot.
      if (payload._honey) {
        form.reset();
        setStatus('success');
        return;
      }

      const response = await fetch(quoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `[PAVEWORKS] New Quote Request: ${payload.service}`,
          _template: 'box',
          _captcha: 'false',
          _replyto: payload.email,
          Name: payload.name,
          Email: payload.email,
          Phone: payload.phone,
          'Property Type': payload.propertyType,
          'Service Needed': payload.service,
          'Approximate Area': payload.sqft,
          'How did you hear about us?': payload.referral,
          'Project Details': payload.message,
        }),
      });
      const result = await response.json();

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error(result.message || 'We could not send your request.');
      }

      form.reset();
      setStatus('success');
    } catch (error) {
      // In development or demo mode, if endpoint fails, show success or friendly fallback
      setErrorMessage(error.message || 'We could not send your request. Please try again or call us directly.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="quote-form">
        <div className="form-success" role="status">
          <span aria-hidden="true">✓</span>
          <h3>Your Quote Request Was Sent!</h3>
          <p>Thank you. Our Chief Paving Estimator will review your specifications and follow up with your free laser inspection proposal.</p>
          <button type="button" className="button button--accent" onClick={() => setStatus('idle')}>
            Request another quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="form-fields">
        <div className="form-head">
          <span>Free &amp; no obligation</span>
          <small>Usually takes 60 seconds</small>
        </div>

        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="quote-company">Leave this field blank</label>
          <input id="quote-company" name="_honey" type="text" tabIndex="-1" autoComplete="off" />
        </div>

        <div className="field">
          <label htmlFor="name">Name / Company</label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Your full name or business" maxLength="100" required />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@email.com" maxLength="150" required />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(800) 555-0123" maxLength="30" required />
        </div>

        <div className="field">
          <label htmlFor="propertyType">Property Type</label>
          <select id="propertyType" name="propertyType" required defaultValue="Residential">
            <option value="Residential">Residential Property</option>
            <option value="Commercial">Commercial / Industrial Property</option>
            <option value="HOA">HOA / Multi-Family Community</option>
            <option value="Municipal">Municipal / Public Roadway</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="service">Primary Service Needed</label>
          <select id="service" name="service" required defaultValue="Interlocking Pavers & Driveways">
            {serviceOptions.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>

        <div className="field">
          <label htmlFor="sqft">Estimated Area (Sq Ft)</label>
          <input id="sqft" name="sqft" type="text" placeholder="e.g. 2,000 sq ft or Driveway Size" maxLength="60" />
        </div>

        <div className="field field--full">
          <label htmlFor="referral">How did you hear about Paveworks?</label>
          <select id="referral" name="referral" required defaultValue="">
            <option value="" disabled>Select one option</option>
            {referralOptions.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>

        <div className="field field--full">
          <label htmlFor="message">Project Description &amp; Details</label>
          <textarea id="message" name="message" rows="5" placeholder="Tell us about current surface condition, dimensions, timeline, or design preferences..." maxLength="2000" required />
        </div>

        {status === 'error' && (
          <div className="form-error" role="alert" style={{ gridColumn: 'span 2', color: '#f87171', fontSize: '0.8rem' }}>
            <strong>We could not send the form automatically.</strong>
            <span> Please <a href={contact.emailHref} style={{ textDecoration: 'underline' }}>email us directly</a> or call <a href={contact.phoneHref} style={{ textDecoration: 'underline' }}>{contact.phone}</a>.</span>
          </div>
        )}

        <button className="button button--accent button--full" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Processing Your Proposal…' : <>Request my free estimate <span aria-hidden="true">→</span></>}
        </button>
        <p className="form-privacy">Your information is protected and used solely to prepare your paving proposal.</p>
      </div>
    </form>
  );
}
