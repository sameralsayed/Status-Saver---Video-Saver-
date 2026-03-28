// script.js
function saveStatus() {
    const input = document.getElementById('urlInput').value.trim();
    if (!input) {
        alert("Please paste a WhatsApp status link or media URL!");
        return;
    }

    const modal = new bootstrap.Modal(document.getElementById('saveModal'));
    modal.show();

    const message = document.getElementById('modalMessage');
    message.textContent = "Analyzing status and fetching HD version...";

    setTimeout(() => {
        message.textContent = "HD media detected! Preparing download...";
        
        setTimeout(() => {
            document.getElementById('processing').classList.add('d-none');
            document.getElementById('successDownload').classList.remove('d-none');
            
            // Fake realistic download link
            const fakeUrl = "https://via.placeholder.com/1280x720/166534/ffffff?text=HD_Status_Video_or_Photo.mp4";
            const dlLink = document.getElementById('downloadLink');
            dlLink.href = fakeUrl;
            dlLink.download = "whatsapp_status_hd.mp4";
        }, 1500);
    }, 1200);
}

function playDemoVideo() {
    alert("In a real implementation, this would open a built-in video player with the saved status video.\n\nDemo: Playing HD status video offline...");
}

// Keyboard support
document.getElementById('urlInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        saveStatus();
    }
});

$(document).ready(function() {
    console.log('%c✅ Status Saver Web App - Fully Loaded', 'color:#16a34a; font-weight:700');
});
