"use client";

import styles from "./StickyCTA.module.css";
import businessData from "@/data/business/index";

export default function StickyCTA() {
  return (
    <div className={styles.container}>
      <a
        href={`https://wa.me/${businessData.business.phone}?text=Hola%20quiero%20más%20información%20sobre%20sus%20servicios`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
      >
        WhatsApp
      </a>

      <a
        href={`tel:${businessData.business.phone}`}
        className={styles.call}
      >
        Llamar
      </a>
    </div>
  );
}