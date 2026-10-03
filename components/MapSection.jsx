'use client';

export default function MapSection() {
  return (
    <div className="leaflet-service-map map-embed" role="region" aria-label="Map showing Paveworks Solutions service coverage across Florida">
      <iframe
        title="Paveworks Solutions Service Coverage Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112706.74415822986!2d-82.4571776!3d27.950575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c48c7dac59d1%3A0x23f71c4c9586111!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="map-radius" aria-hidden="true" />
      <div className="map-note">
        <strong>Regional Operational Hub · Florida</strong>
        <span>Equipped with full paving fleet &amp; laser grading crews</span>
      </div>
    </div>
  );
}
