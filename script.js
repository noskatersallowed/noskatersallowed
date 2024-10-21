
// script.js
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

const sections = [
    { id: 'command', title: 'COMMAND CENTER', icon: 'shield' },
    { id: 'brotherhood', title: 'OPERATIVE NETWORK', icon: 'users' },
    { id: 'operations', title: 'MISSION BRIEFINGS', icon: 'file-text' },
    { id: 'intel', title: 'INTEL DATABASE', icon: 'database' },
];

function authenticate() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loginContainer = document.getElementById('login-container');
    const content = document.getElementById('content');

    if (password === 'ayebull11') {
        loginContainer.classList.add('hidden');
        content.classList.remove('hidden');
        renderSections();
    } else {
        errorMessage.textContent = 'ACCESS DENIED: UNAUTHORIZED ATTEMPT LOGGED';
    }
}

function renderSections() {
    const sectionList = document.getElementById('section-list');
    sections.forEach(section => {
        const li = document.createElement('li');
        li.innerHTML = `
            <button onclick="toggleSection('${section.id}')">
                <span><i data-lucide="${section.icon}"></i> ${section.title}</span>
                <i data-lucide="chevron-down" class="toggle-icon"></i>
            </button>
        `;
        sectionList.appendChild(li);
    });
    lucide.createIcons();
}

function toggleSection(sectionId) {
    const sectionContent = document.getElementById('section-content');
    const section = sections.find(s => s.id === sectionId);
    
    if (sectionContent.dataset.activeSection === sectionId) {
        sectionContent.innerHTML = '';
        sectionContent.dataset.activeSection = '';
    } else {
        sectionContent.innerHTML = `
            <div class="section-content">
                <h2><i data-lucide="${section.icon}"></i> ${section.title}</h2>
                <p>Classified information for ${section.title}</p>
            </div>
        `;
        sectionContent.dataset.activeSection = sectionId;
        lucide.createIcons();
    }

    // Toggle chevron icon
    const buttons = document.querySelectorAll('#section-list button');
    buttons.forEach(button => {
        const icon = button.querySelector('.toggle-icon');
        if (button.textContent.includes(section.title)) {
            icon.setAttribute('data-lucide', sectionContent.dataset.activeSection === sectionId ? 'chevron-up' : 'chevron-down');
        } else {
            icon.setAttribute('data-lucide', 'chevron-down');
        }
    });
    lucide.createIcons();
}
