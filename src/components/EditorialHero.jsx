"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import {
  heroContainer,
  fadeUp,
  textReveal,
  lineReveal,
  imageReveal,
} from '../lib/motion';
import './motion.css';

export default function EditorialHero({
  badge,
  badgeAlt,
  titleLine1,
  titleAccent,
  description,
  scrollLabel,
  heroImage,
  heroAlt,
  heroPosition = 'center',
  bottom,
  showDivider = true,
  showImage = true,
  priority = true,
  sectionClass = 'pz-hero',
  containerClass = 'pz-container',
  topClass = 'pz-hero-top',
  badgeClass = 'pz-badge',
  titleClass = 'pz-hero-title',
  bottomClass = 'pz-hero-bottom',
  descClass = 'pz-hero-desc',
  scrollClass = 'pz-scroll-indicator',
  scrollIconClass = 'pz-scroll-icon',
  imgWrapperClass = 'pz-hero-img-wrapper',
  imgClass = 'pz-hero-img',
  accentClass = 'text-cyan italic',
}) {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <motion.div variants={heroContainer} initial="hidden" animate="visible">
          <motion.div className={topClass} variants={fadeUp}>
            <span className={badgeClass}>{badge}</span>
            {badgeAlt ? <span className={badgeClass}>{badgeAlt}</span> : null}
          </motion.div>

          <h1 className={titleClass}>
            <div className="pz-mask-container">
              <motion.div variants={textReveal}>{titleLine1}</motion.div>
            </div>
            {titleAccent ? (
              <div className="pz-mask-container">
                <motion.div variants={textReveal} className={accentClass}>
                  {titleAccent}
                </motion.div>
              </div>
            ) : null}
          </h1>

          {showDivider ? <motion.div className="pz-hero-divider" variants={lineReveal} /> : null}

          {bottom !== undefined ? (
            <motion.div className={bottomClass} variants={fadeUp}>
              {bottom}
            </motion.div>
          ) : (
            <motion.div className={bottomClass} variants={fadeUp}>
              {description ? <p className={descClass}>{description}</p> : null}
              {scrollLabel ? (
                <div className={scrollClass}>
                  <span>{scrollLabel}</span>
                  <div className={scrollIconClass}>
                    <ArrowDown size={14} />
                  </div>
                </div>
              ) : null}
            </motion.div>
          )}

          {showImage && heroImage ? (
            <motion.div className={imgWrapperClass} variants={imageReveal}>
              <Image
                src={heroImage}
                alt={heroAlt}
                className={imgClass}
                fill
                sizes="(max-width: 768px) 100vw, 1400px"
                priority={priority}
                style={{ objectFit: 'cover', objectPosition: heroPosition }}
              />
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
