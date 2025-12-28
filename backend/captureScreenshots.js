const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../frontend/public/assets/screenshots');

(async () => {
    // Ensure output directory exists (redundant check)
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const browser = await puppeteer.launch({
        headless: "new",
        defaultViewport: { width: 1920, height: 1080 }
    });
    const page = await browser.newPage();

    try {
        console.log('Navigating to localhost:5174...');
        await page.goto('http://localhost:5174', { waitUntil: 'networkidle0', timeout: 60000 });

        console.log('Page loaded. Capturing screenshots...');

        // Hero Section
        await page.screenshot({ path: path.join(outputDir, 'hero.png') });
        console.log('Captured hero.png');

        // Skills Section - Scroll and capture
        // Assuming #skills id exists based on controller logic, usually landing pages have hashed sections
        // If not, I'll scroll by viewport height
        // Checking for 'Skills' text or id
        const skillsSection = await page.$('#skills');
        if (skillsSection) {
            await skillsSection.scrollIntoView();
            await new Promise(r => setTimeout(r, 1000)); // Wait for scroll/animation
            await page.screenshot({ path: path.join(outputDir, 'skills.png') });
            console.log('Captured skills.png');
        } else {
            console.log('Skills section not found by ID, scrolling...');
            await page.evaluate(() => window.scrollBy(0, window.innerHeight));
            await new Promise(r => setTimeout(r, 1000));
            await page.screenshot({ path: path.join(outputDir, 'skills_scroll.png') });
        }

        // Projects Section
        const projectsSection = await page.$('#projects');
        if (projectsSection) {
            await projectsSection.scrollIntoView();
            await new Promise(r => setTimeout(r, 1000));
            await page.screenshot({ path: path.join(outputDir, 'projects.png') });
            console.log('Captured projects.png');
        }

        // Contact Section
        const contactSection = await page.$('#contact');
        if (contactSection) {
            await contactSection.scrollIntoView();
            await new Promise(r => setTimeout(r, 1000));
            await page.screenshot({ path: path.join(outputDir, 'contact.png') });
            console.log('Captured contact.png');
        }

    } catch (error) {
        console.error('Error capturing screenshots:', error);
    } finally {
        await browser.close();
        console.log('Browser closed.');
        process.exit();
    }
})();
