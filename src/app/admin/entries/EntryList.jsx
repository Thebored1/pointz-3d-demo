'use client';

import { useState } from 'react';

function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('en-CA', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

function formatPhone(phone) {
  if (!phone) return '—';
  return phone;
}

function truncate(str, len = 80) {
  if (!str) return '';
  return str.length > len ? str.slice(0, len) + '…' : str;
}

export default function EntryList({ rows }) {
  const [expanded, setExpanded] = useState(new Set());

  const toggle = (id) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (!rows || rows.length === 0) {
    return (
      <div className="admin-empty">
        <strong>No submissions yet</strong>
        Quote and contact requests will appear here as they come in.
      </div>
    );
  }

  return (
    <div className="entry-list">
      {rows.map((row) => {
        const isOpen = expanded.has(row.id);
        const isContact = row.service && row.service.startsWith('Contact:');

        return (
          <div
            key={row.id}
            className={`entry-card ${isOpen ? 'entry-card--open' : ''}`}
          >
            <button
              className="entry-card-header"
              onClick={() => toggle(row.id)}
              aria-expanded={isOpen}
            >
              <div className="entry-card-top">
                <div className="entry-card-meta">
                  <span className={`entry-tag ${isContact ? 'entry-tag--contact' : 'entry-tag--quote'}`}>
                    {isContact ? 'Contact' : 'Quote'}
                  </span>
                  <span className="entry-date">{formatDate(row.created_at)}</span>
                </div>
                <div className="entry-card-identity">
                  <strong>{row.name || '—'}</strong>
                  {row.company && <span className="entry-company">{row.company}</span>}
                </div>
                <div className="entry-card-route">
                  {row.pickup_location && <span>{row.pickup_location}</span>}
                  {row.pickup_location && row.delivery_location && <span className="entry-arrow">→</span>}
                  {row.delivery_location && <span>{row.delivery_location}</span>}
                </div>
                {row.details && (
                  <div className="entry-preview">{truncate(row.details, 100)}</div>
                )}
              </div>
              <span className={`entry-chevron ${isOpen ? 'entry-chevron--open' : ''}`}>
                ▾
              </span>
            </button>

            {isOpen && (
              <div className="entry-detail">
                <div className="entry-detail-grid">
                  <div className="entry-detail-item">
                    <span className="entry-detail-label">Phone</span>
                    <span className="entry-detail-value">{formatPhone(row.phone)}</span>
                  </div>
                  <div className="entry-detail-item">
                    <span className="entry-detail-label">Email</span>
                    <span className="entry-detail-value">{row.email || '—'}</span>
                  </div>
                  <div className="entry-detail-item">
                    <span className="entry-detail-label">Service</span>
                    <span className="entry-detail-value">{row.service || '—'}</span>
                  </div>
                  <div className="entry-detail-item">
                    <span className="entry-detail-label">Timeline</span>
                    <span className="entry-detail-value">{row.timeline || '—'}</span>
                  </div>
                  <div className="entry-detail-item">
                    <span className="entry-detail-label">Freight</span>
                    <span className="entry-detail-value">{row.freight_type || '—'}</span>
                  </div>
                  <div className="entry-detail-item">
                    <span className="entry-detail-label">Pickup</span>
                    <span className="entry-detail-value">{row.pickup_location || '—'}</span>
                  </div>
                  <div className="entry-detail-item">
                    <span className="entry-detail-label">Delivery</span>
                    <span className="entry-detail-value">{row.delivery_location || '—'}</span>
                  </div>
                  {row.details && (
                    <div className="entry-detail-item entry-detail-item--full">
                      <span className="entry-detail-label">Details</span>
                      <pre className="entry-detail-value entry-detail-notes">{row.details}</pre>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
