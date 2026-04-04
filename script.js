let premium = 0;
let policyActive = false;

function register() {
    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;

    document.getElementById("welcome").innerHTML =
        `👋 Welcome ${name} (${location})`;
}

function calculateRisk() {
    let rain = Math.floor(Math.random() * 100);
    let heat = Math.floor(Math.random() * 100);

    document.getElementById("rainRisk").innerText = rain + "%";
    document.getElementById("heatRisk").innerText = heat + "%";

    if (rain > 70) premium = 79;
    else if (rain > 40) premium = 49;
    else premium = 29;

    document.getElementById("premium").innerHTML =
        `💰 Weekly Premium: ₹${premium}`;
}

function activatePolicy() {
    if (premium === 0) {
        alert("Analyze risk first!");
        return;
    }

    policyActive = true;

    document.getElementById("policyStatus").innerHTML =
        "✅ Policy Activated";
}

function triggerEvent(type) {
    if (!policyActive) {
        alert("Activate policy first!");
        return;
    }

    let eventText = "";

    if (type === "rain") eventText = "🌧️ Heavy Rain";
    if (type === "heat") eventText = "🔥 Heat Wave";
    if (type === "pollution") eventText = "🌫️ Pollution Spike";

    document.getElementById("triggerStatus").innerHTML =
        eventText + " Detected";

    processClaim(eventText);
}

function processClaim(eventText) {
    document.getElementById("claimResult").innerHTML =
        `${eventText} <br>
         🤖 Auto Claim Triggered <br>
         ✅ Approved <br>
         💰 ₹300 Credited`;
}