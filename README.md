# Liquid OTP UI Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/liquid-otp-ui-animation-1/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 18.47-second tutorial video.

## What the video shows

- Black showcase background with a blue title: **Liquid OTP UI Animation**.
- White rounded verification card.
- Heading: **Enter Security Code**.
- Instruction: **Please enter the 6-digit code sent to your email.**
- Six connected, pale blue/grey circular OTP cells.
- When digits are entered, the cells morph into a connected blue liquid-like strip.
- Dark **Confirm Identity** button.
- A processing state with a blue dot/filled liquid effect.
- Incorrect code: red circle with an X, message **Incorrect Code. Please try again.**, red **Verification Failed** button.
- Correct code: green circle with a check, message **Verified Successfully**, green success button.
- The demo returns to an empty input state for another attempt.

## Visible HTML from the video (transcribed)

```html
<div class="interaction-area">
  <div class="liquid-layer">
    <div class="blob-wrapper" id="blobs">
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
    </div>
  </div>

  <div class="inputs-layer" id="inputs">
    <input type="text" maxlength="1" class="otp-input" autofocus>
    <input type="text" maxlength="1" class="otp-input">
    <input type="text" maxlength="1" class="otp-input">
    <input type="text" maxlength="1" class="otp-input">
    <input type="text" maxlength="1" class="otp-input">
    <input type="text" maxlength="1" class="otp-input">
  </div>

  <div class="icon-container check">
    <svg viewBox="0 0 24 24">
      <path class="draw-path" d="M4.5 12.5 9.2 17 19.5 6.5"/>
    </svg>
  </div>

  <div class="icon-container cross">
    <svg viewBox="0 0 24 24">
      <path class="draw-path" d="M6 6 18 18M18 6 6 18"/>
    </svg>
  </div>
</div>
```

The code panel also visibly contains the six `.blob` elements, six `.otp-input` fields, and SVG success/error icon containers. The CSS and JavaScript below are completed reconstructions of the animation and behavior.

## Features

- Six individual OTP fields with automatic focus advance.
- Numeric-only input and six-digit paste support.
- Connected liquid-style blobs behind the inputs.
- Filled/processing/error/success visual states.
- Animated SVG checkmark and X.
- Explicit Confirm Identity button.
- Incorrect OTP feedback and retry control.
- Success feedback and verify-another-code reset.
- Keyboard navigation with arrows and backspace.
- Responsive layout and reduced-motion support.
- No dependencies or build tools.

## Demo OTP

Use **123456** to see the green success state. Any other six-digit code shows the red error state.

This is a front-end demo. It does not send an email, contact an OTP provider, or verify a real identity. Production use requires a secure backend verification endpoint.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
liquid-otp-ui-animation/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Accuracy note

The visible HTML structure and screen states are transcribed/recreated from the recording. The source-code panel is too small to reliably recover every original CSS declaration and JavaScript statement, so the liquid transitions, state handling and responsive layout are functional reconstructions rather than a verbatim copy of the creator's repository.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
