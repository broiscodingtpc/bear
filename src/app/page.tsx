"use client";

import React, { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="https://crimson-traditional-mastodon-846.mypinata.cloud/ipfs/bafybeiaesvcjco2lbfuw3426oyilqohvnlyzgdgmklerh46aqxkinb6cpe" type="video/mp4" />
        </video>
      </div>
      <div className="video-overlay"></div>

      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">
            <i className="fas fa-bear"></i>
            <span>$BEARNECESITIES</span>
          </a>
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fas fa-bars"></i>
          </button>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#roadmap">Roadmap</a>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#roadmap">Roadmap</a>
        </div>
      )}

      <main>
        <section className="hero">
          <div className="container">
            <h1>Welcome to $BEARNECESITIES</h1>
            <p>Just the Bear Necessities of Degen Life 🐾</p>
            <a href="#join" className="cta-button">Join the Bear Cave 🐻</a>
          </div>
        </section>

        <section className="features" id="features">
          <div className="container">
            <div className="features-grid">
              <div className="feature-card">
                <i className="fas fa-coins feature-icon"></i>
                <h3>Zero Taxes</h3>
                <p>Just how Baloo likes it. No complicated stuff, pure honey gains.</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-users feature-icon"></i>
                <h3>Community Driven</h3>
                <p>No dev taxes, no VC overlords. Just vibes and bear wisdom.</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-bolt feature-icon"></i>
                <h3>Solana Powered</h3>
                <p>Lightning fast, jungle ready. Built for the future of DeFi.</p>
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
            <h2>🚀 Bearonomics</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Total Supply</h3>
                <p>All in</p>
              </div>
              <div className="feature-card">
                <h3>Launch</h3>
                <p>Pump.fun jungle style</p>
              </div>
              <div className="feature-card">
                <h3>Taxes</h3>
                <p>Zero — just how Baloo likes it</p>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="roadmap">
          <div className="container">
            <h2>🌴 What's Next?</h2>
            <p>No complicated roadmap. No buzzwords. Just:</p>
            <div className="features-grid">
              <div className="feature-card">
                <i className="fas fa-gift feature-icon"></i>
                <h3>Jungle-themed giveaways 🐒</h3>
              </div>
              <div className="feature-card">
                <i className="fas fa-brain feature-icon"></i>
                <h3>Meme battles 🧠</h3>
              </div>
              <div className="feature-card">
                <i className="fas fa-coins feature-icon"></i>
                <h3>Solana staking vibes 🍯</h3>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="social-links">
              <a href="#"><i className="fab fa-telegram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
            <p>© 2025 $BEARNECESITIES. All rights reserved. Stay cozy! 🐻</p>
            <p className="quote">"In a world full of noise, be the nap." – $BEARNECESITIES</p>
          </div>
        </footer>
      </main>
    </>
  );
} 