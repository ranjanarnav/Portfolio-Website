(function () {

  const threshold = 160;

  function detectDevTools() {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;

    if (widthThreshold || heightThreshold) {

      document.documentElement.innerHTML = `
        <div style="
          position:fixed;
          top:0;
          left:0;
          width:100%;
          height:100%;
          background:rgba(0, 50, 0, 0.95);
          backdrop-filter:blur(10px);
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:9999;
          font-family:Arial, sans-serif;
        ">
          <div style="
            text-align:center;
            padding:30px;
            max-width:400px;
            background:#ffffff;
            border-radius:12px;
            box-shadow:0 0 30px rgba(0,255,0,0.3);
            border:2px solid #22c55e;
          ">
            
            <div style="
              width:70px;
              height:70px;
              margin:0 auto 20px auto;
              border-radius:10px;
              background:#22c55e;
              display:flex;
              align-items:center;
              justify-content:center;
            ">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
              </svg>
            </div>

            <h2 style="
              font-size:24px;
              font-weight:bold;
              margin-bottom:10px;
              color:#166534;
            ">
              Developer Tools Detected
            </h2>

            <p style="
              font-size:15px;
              color:#333;
              margin-bottom:20px;
              line-height:1.5;
            ">
              Developer tools are disabled on this site for security reasons.<br>
              Please close them to continue browsing.
            </p>

            <div style="
              display:flex;
              align-items:center;
              justify-content:center;
              gap:6px;
              color:#16a34a;
              font-size:14px;
              font-weight:bold;
            ">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#16a34a"
                stroke-width="2">
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              </svg>
              <span>Security protection active</span>
            </div>

          </div>
        </div>
      `;
    }
  }

  setInterval(detectDevTools, 1000);

})();