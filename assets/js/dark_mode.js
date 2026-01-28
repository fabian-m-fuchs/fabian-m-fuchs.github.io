document.addEventListener('DOMContentLoaded', function() {
    const mode_toggle = document.getElementById("light-toggle");

    const click_threshold = 3;  // Required switches; one round (browser default, dark, light)
    const timeout_threshold = 3000;             // Time limit in ms (3 seconds)

    let click_count = 0;
    let resetTimerId = null;

    function std_switch() {
        toggleTheme(localStorage.getItem("theme"));

        // Start the timer on the first click of an attempt
        if (click_count === 0 && resetTimerId === null) {
            resetTimerId = setTimeout(() => {
            // If we didn't reach n in time, reset the attempt
            click_count = 0;
            resetTimerId = null;
            // console.log("Timed out: counter reset");
            }, timeout_threshold);
        }

        click_count++;
        // console.log(`before: ${clicks}/${n}`);

        if (click_count >= click_threshold) {
            // Success within time: stop timer and swap behavior
            clearTimeout(resetTimerId);
            resetTimerId = null;

            mode_toggle.removeEventListener("click", std_switch);
            mode_toggle.addEventListener("click", ctrl_switch);

            // console.log("Switched behavior");
        }
    }
    
    function addScreenTint(color = "rgba(220, 255, 0, 0.7)") {
    const overlay = document.createElement("div");
    overlay.id = "screen-overlay";

    Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        background: color,
        zIndex: "999",      // on top of everything
        pointerEvents: blockClicks = "none", // allow or ignore clicks
        mixBlendMode: "screen"
    });

    document.body.appendChild(overlay);
    }

    // Remove tint
    function removeScreenTint() {
        document.getElementById("screen-overlay")?.remove();
    }

    function ctrl_switch() {
        toggleTheme(localStorage.getItem("theme"));
        
        click_count++;

        if (click_count === 4) {
            addScreenTint("rgba(220, 255, 0, 0.7)");
        } else if (click_count === 5) {
            removeScreenTint();
            addScreenTint("rgba(0, 7, 255,0.7)");
        } else {
            removeScreenTint();

            mode_toggle.removeEventListener("click", ctrl_switch);
            mode_toggle.addEventListener("click", std_switch);

            window.location.href="/";
        }
    }

    mode_toggle.addEventListener("click", std_switch);
});

