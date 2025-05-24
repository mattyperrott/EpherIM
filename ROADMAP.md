# Epher App Roadmap

This document lists all major features, specifications, and components of the Epher app, along with their current implementation status.

---

## Core Features

- **Secure Messaging (Double Ratchet):** Confirmed  
  Fully implemented with forward secrecy and message confidentiality.

- **Peer-to-Peer Networking (Hyperswarm):** Confirmed  
  Decentralized peer discovery and hole punching implemented.

- **HMAC Peer Verification:** Confirmed  
  Challenge-response handshake using HMAC with room pre-shared key implemented.

- **Transport Modes (Direct & Yggdrasil):** Confirmed  
  Both direct Hyperswarm and Yggdrasil IPv6 overlay VPN transport supported.

- **File Sharing:** Confirmed  
  Secure encrypted file transfer with integrity verification implemented.

- **Session Management:** Confirmed  
  Robust session lifecycle with renewal and activity tracking implemented.

- **Replay Attack Prevention:** Confirmed  
  Detection and prevention of replayed messages implemented.

- **Packet Shaping & Padding:** Confirmed  
  Fixed-size packet padding, length prefix, and timestamp jitter implemented.

- **Keep-Alive Mechanism:** Confirmed  
  Periodic decoy keep-alives implemented.

- **Rate Limiting & CSRF Protection:** Confirmed  
  Rate limiting and CSRF token generation implemented.

- **VPN Detection:** Confirmed  
  Utility to detect active VPN connections implemented.

---

## User Interface

- **Material Design 3 UI:** Confirmed  
  UI built with Material Web Components and Roboto fonts.

- **Responsive Layout:** Confirmed  
  Adaptive design for various device sizes implemented.

- **Room Management:** Confirmed  
  Room creation, joining, and password protection implemented.

- **Message Input & File Attachment:** Confirmed  
  Text input and file upload supported.

- **Status Indicators:** Confirmed  
  Connection, crypto verification, and session timers displayed.

- **Security Panel:** Confirmed  
  User controls for transport, packet shaping, forward secrecy, screenshot prevention.

- **Notifications:** Confirmed  
  Snackbar alerts for system messages and errors implemented.

- **Modals and Drawers:** Confirmed  
  Room password, error messages, peers list, and settings implemented.

---

## Architecture and Technologies

- **Frontend (WebView, JS Modules):** Confirmed  
  Modular JS with crypto sandboxing and AndroidBridge integration implemented.

- **Backend (Node.js, Hyperswarm, libsodium):** Confirmed  
  Node.js runtime embedded with P2P networking and cryptography implemented.

- **Crypto Worker Sandbox:** Confirmed  
  Cryptographic operations isolated in Web Worker.

- **Android Native (Jetpack Compose, VPN):** Confirmed  
  Compose UI and YggVpnService implemented.

- **Testing (Unit Tests):** Partially Implemented  
  Unit tests present but coverage may be incomplete.

---

## Security Specifications

- **Double Ratchet Encryption:** Confirmed  
  Fully implemented.

- **Argon2id PSK Derivation:** Confirmed  
  Implemented with PBKDF2 fallback.

- **HMAC Peer Verification Handshake:** Confirmed  
  Implemented.

- **Replay Attack Detection:** Confirmed  
  Implemented.

- **Packet Padding & Timestamp Jitter:** Confirmed  
  Implemented.

- **CSRF Token & Rate Limiting:** Confirmed  
  Implemented.

- **VPN Detection:** Confirmed  
  Implemented.

---

## Performance and Reliability

- **Automatic Reconnection & Fallback:** Confirmed  
  Implemented.

- **Bandwidth Management Placeholders:** Needs to be Done  
  Placeholders exist, full implementation pending.

- **Session Pause & Resume on Visibility:** Partially Implemented  
  Implied but not fully verified.

- **Efficient Message Queuing & Processing:** Confirmed  
  Implemented.

---

This roadmap will be updated as development progresses to reflect the current state of the project.
