# Steps in development

### Initialized app with npx create-next-app --tailwindcss projectname

### Created changelog.md to follow steps

### Installing heroicons npm install @heroicons/react

### Updated page.tsx - main look with magnifyingGlassIcon and text

### Added components folder with Sidebar.tsx \*OBS(moved to app folder)

### Updated layout.tsx with Sidebar component

### Building Header.tsx in Components that is a Search Form in order to search and send API calls to activate scraping api/activateScraper

### Since it is NEXT.JS 13.4.4 API routes need to be placed inside app root folder so we created route.ts file

### Now inside the API we need to talk to Bright Data so we have to register and setup everything there

### Setup new WebScraper in BrightData with own template https://github.com/sonnysangha/brightdata-amazon-scraper-template

#### After creating template click integrate with system option, test with API

#### For the delivery preferences we choose API DOWNLOAD and inform us via Webhook
