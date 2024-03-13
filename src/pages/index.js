/* eslint-disable react/no-unescaped-entities */
// pages/index.js
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css'; // You'll create this CSS module.

import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Send Money with Love</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.leftPanel}>
          <h1 className={styles.title}>Rasulu Gurush</h1>
          <Image src="/heroimage.jpg" alt="Hero Image" width={500} height={500} className={styles.heroImage} />
          <p className={styles.qrText}>
            Scan this QR code with your phone to download our app!
          </p>
          <Image src="/qr-code.png" alt="QR Code" width={100} height={100} />
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.exchangeRate}>
            Exchange Rate
            <div className={styles.rate}>1 USD = 134.60 KES</div>
          </div>
          <div className={styles.transferInfo}>
            <h2>Send money to your loved ones</h2>
            <p>
              We make sure more of your money goes to those you love, not to high service fees
            </p>
            <div className={styles.moneyInput}>
              <label htmlFor="amount">You send</label>
              <input id="amount" type="number" defaultValue="100" />
              <select>
                <option value="USD">USD</option>
                {/* Add other currencies as needed */}
              </select>
            </div>
            <div className={styles.moneyOutput}>
              <label htmlFor="received">They get</label>
              <input id="received" type="number" value="13460" readOnly />
              <select>
                <option value="KES">KES</option>
                {/* Add other currencies as needed */}
              </select>
            </div>
            <p className={styles.disclaimer}>
              Exchange Rate: 1 USD = 134.60 Ksh with no fees
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}


// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Rasulu Coming Soon</title>
//       </Head>
//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Rasulu Coming Soon!!!
//         </h1>
//         <p className={styles.description}>
//           We don't need Dahabshiil/Western Union/Remitly
//         </p>
//         <div className={styles.converterBox}>
//           {/* This will be your currency converter box */}
//         </div>
//       </main>
//     </div>
//   );
// }
