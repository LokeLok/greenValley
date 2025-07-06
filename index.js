document.addEventListener('DOMContentLoaded', function() {
    const expandButtons = document.querySelectorAll('.expand-button');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const panel = this.closest('.expandable-panel');

            if (panel.classList.contains('expanded')) {
                const content = panel.querySelector('.panel-content');
                content.style.overflow = 'hidden';
                
                panel.classList.toggle('expanded');
                this.textContent = 'More';
            } else {
                panel.classList.toggle('expanded');
                this.textContent = 'Close';
                
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


