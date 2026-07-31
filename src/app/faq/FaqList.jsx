"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeUpSoft, viewportOnce } from '../../lib/motion';
import { faqs } from './faqData';

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={item.q}
            className="faq-item"
            variants={fadeUpSoft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={i}
          >
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span>{item.q}</span>
              {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
            </button>
            <div
              id={`faq-answer-${i}`}
              className={`faq-answer${isOpen ? ' faq-answer-open' : ''}`}
              hidden={!isOpen}
            >
              <p>{item.a}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
