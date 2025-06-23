document.addEventListener('DOMContentLoaded', function() {
    // Set up expand button functionality for all expandable panels
    const expandButtons = document.querySelectorAll('.expand-button');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const panel = this.closest('.expandable-panel');
            
            // If we're collapsing, add a small delay before changing height
            if (panel.classList.contains('expanded')) {
                // First hide the content to avoid scrollbar flash
                const content = panel.querySelector('.panel-content');
                content.style.overflow = 'hidden';
                
                // Toggle expanded class which triggers height change
                panel.classList.toggle('expanded');
                this.textContent = 'More';
            } else {
                // For expanding, just do it directly
                panel.classList.toggle('expanded');
                this.textContent = 'Close';
                
                // Set overflow to visible after animation completes
                setTimeout(() => {
                    const content = panel.querySelector('.panel-content');
                    if (panel.classList.contains('expanded')) {
                        content.style.overflow = 'visible';
                    }
                }, 300);
            }
        });
    });
});

function showTime() {
  var timediv = document.getElementById("myClockDisplay");
  var datediv = document.getElementById("myDateDisplay");
  var dt = new Date();
  var d = dt.getDate();
  var m = dt.getMonth() + 1; // getMonth() returns the month "index" starting with 0 for Jan
  var y = dt.getFullYear();
  var hh = dt.getHours();
  var mm = dt.getMinutes();
  var ss = dt.getSeconds();
  var session = "AM";
  if (hh == 0) {
    hh = 12;
  }

  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  datediv.textContent = m + "/" + d + "/" + y;
  setTimeout(showTime, 1000);
}

showTime();

