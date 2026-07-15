"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LiveTracker.css';

export default function LiveTracker() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 0.5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tracking" className="tracker-section">
      <div className="tracker-container">
        <motion.div 
          className="tracker-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2>Transit <span className="text-accent">Log.</span></h2>
          <div className="tracking-id">REF: PZ-89244</div>
        </motion.div>
        
        <motion.div 
          className="route-map"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="route-line">
            <motion.div 
              className="route-progress" 
              style={{ width: `${progress}%` }}
              layout
            ></motion.div>
            <motion.div 
              className="route-indicator" 
              style={{ left: `${progress}%` }}
              layout
            ></motion.div>
          </div>
          <div className="route-nodes">
            <div className="node">
              <span className="node-city">Shanghai</span>
              <span className="node-status">Departed</span>
            </div>
            <div className="node text-center">
              <span className="node-city">Pacific Ocean</span>
              <span className="node-status">In Transit</span>
            </div>
            <div className="node text-right">
              <span className="node-city">Los Angeles</span>
              <span className="node-status">Destination</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="eta-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="eta-label">Expected Arrival</div>
          <div className="eta-time">Oct 24, 14:30</div>
        </motion.div>
      </div>
    </section>
  );
}
