"use client";

import React, { useState } from 'react';
import { FaTelegram, FaTwitter } from 'react-icons/fa';
import { GiHamburgerMenu, GiBearFace, GiHoneypot } from 'react-icons/gi';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = {
    x: "https://x.com/bearnecesitie_",
    telegram: "https://t.me/bearnecesities"
  };

  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="https://crimson-traditional-mastodon-846.mypinata.cloud/ipfs/bafybeiaesvcjco2lbfuw3426oyilqohvnlyzgdgmklerh46aqxkinb6cpe" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <nav className="navbar">
        <div className="container nav-container">
          <div className="flex items-center gap-4">
            <a href="#" className="logo">
              <GiBearFace className="text-2xl" />
              <span>$BEARNECESITIES</span>
            </a>
          </div>
          <button 
            className="menu-button md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-social-links">
            <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="mobile-social-button">
              <FaTwitter />
              <span>Follow on X</span>
            </a>
            <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="mobile-social-button">
              <FaTelegram />
              <span>Join Telegram</span>
            </a>
          </div>
          <div className="mobile-nav-links">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#tokenomics">Bearonomics</a>
            <a href="#roadmap">Roadmap</a>
          </div>
        </div>
      )}

      <main className="relative z-10">
        <section className="hero">
          <div className="container">
            <h1>Welcome to $BEARNECESITIES</h1>
            <p>Just the Bear Necessities of Degen Life 🐾</p>
            
            <div className="hero-social">
              <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <FaTelegram />
                <span>Join Telegram</span>
              </a>
              <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <FaTwitter />
                <span>Follow on X</span>
              </a>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="container">
            <h2 className="section-title">Core Features</h2>
            <p className="section-subtitle">Built on pure jungle energy and degen spirit 🌴</p>
            <div className="features-grid">
              <div className="feature-card honey-card">
                <div className="honey-drip"></div>
                <GiHoneypot className="text-5xl text-yellow-400 mb-6 honey-icon" />
                <h3>Zero Taxes</h3>
                <p>Just how Baloo likes it. No complicated stuff, pure honey gains.</p>
                <div className="honey-drops">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="feature-card honey-card">
                <div className="honey-drip"></div>
                <GiBearFace className="text-5xl text-yellow-400 mb-6 honey-icon" />
                <h3>Community Driven</h3>
                <p>No dev taxes, no VC overlords. Just vibes and bear wisdom.</p>
                <div className="honey-drops">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="feature-card honey-card">
                <div className="honey-drip"></div>
                <GiHoneypot className="text-5xl text-yellow-400 mb-6 honey-icon" />
                <h3>Solana Powered</h3>
                <p>Lightning fast, jungle ready. Built for the future of DeFi.</p>
                <div className="honey-drops">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quote">
          <div className="container">
            <h2>"Look for the Bear Necessities, the simple Bear Necessities. 
            Forget about your worries and your price volatility."</h2>
            <p>— Probably Baloo, but we remixed it</p>
          </div>
        </section>

        <section className="features" id="tokenomics">
          <div className="container">
            <h2 className="section-title">🚀 Bearonomics</h2>
            <p className="section-subtitle">Simple tokenomics for maximum gains - just like nature intended</p>
            <div className="features-grid">
              <div className="feature-card honey-card">
                <div className="honey-drip"></div>
                <GiHoneypot className="text-5xl text-yellow-400 mb-6 honey-icon" />
                <h3>Total Supply</h3>
                <p>All in - just like a bear's appetite for honey</p>
                <div className="honey-drops">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="feature-card honey-card">
                <div className="honey-drip"></div>
                <GiBearFace className="text-5xl text-yellow-400 mb-6 honey-icon" />
                <h3>Launch Style</h3>
                <p>Pump.fun jungle style - wild and free</p>
                <div className="honey-drops">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="feature-card honey-card">
                <div className="honey-drip"></div>
                <GiHoneypot className="text-5xl text-yellow-400 mb-6 honey-icon" />
                <h3>Zero Taxes</h3>
                <p>Just how Baloo likes it - pure honey gains</p>
                <div className="honey-drops">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="roadmap">
          <div className="container">
            <h2 className="section-title">🌴 What's Next?</h2>
            <p className="section-subtitle">No complicated roadmap. No buzzwords. Just pure jungle vibes and honey-sweet gains.</p>
            <div className="features-grid">
              <div className="feature-card honey-card">
                <div className="honey-drip"></div>
                <GiHoneypot className="text-5xl text-yellow-400 mb-6 honey-icon" />
                <h3>Jungle-themed Giveaways 🐒</h3>
                <p>Swing from tree to tree collecting sweet rewards</p>
                <div className="honey-drops">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="feature-card honey-card">
                <div className="honey-drip"></div>
                <GiBearFace className="text-5xl text-yellow-400 mb-6 honey-icon" />
                <h3>Meme Battles 🧠</h3>
                <p>Let the creativity flow like honey in the jungle</p>
                <div className="honey-drops">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="feature-card honey-card">
                <div className="honey-drip"></div>
                <GiHoneypot className="text-5xl text-yellow-400 mb-6 honey-icon" />
                <h3>Solana Staking 🍯</h3>
                <p>Hibernate in profit while your honey multiplies</p>
                <div className="honey-drops">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>© 2025 $BEARNECESITIES. All rights reserved. Stay cozy! 🐻</p>
            <p className="quote">"In a world full of noise, be the nap." – $BEARNECESITIES</p>
          </div>
        </footer>
      </main>
    </div>
  );
} 