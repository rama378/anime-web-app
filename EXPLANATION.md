## Project Design

#### Concept

This project implements ``Domain-Driven Design`` and ``Atomic Design``
The idea is to make the project more robust when scaling to bigger development and make it easier to organize by creating smallest component as possible.

## File Structuring
**Atomic Design Key**

    Atoms
    Molecules
    Organisms
    Templates
    Pages

**Domain-Driven Design Key**

    Should be focus on business "domain"

**File Structure**

```
src/
├── App (Domain)
|   ├── App.jsx
|   ├── App.test.js
|   ├── reducers.js
|   |   ...
|   ├── common (Shared components)
|   |   ├── components (Atoms, Molecules, Organism)
|   |   |   ├── Button (Atom)
|   |   |   |   ├── Button.jsx
|   |   |   |   └── Button.test.js
|   |   |   |       ...
|   |   |   ├── HeaderMenu (Molecule)
|   |   |   |   ├── HeaderMenu.jsx
|   |   |   |   └── HeaderMenu.test.js
|   |   |   |       ...
|   |   |   └── Header (Organism)
|   |   |       ├── Header.jsx
|   |   |       └── Header.test.js
|   |   |           ...
|   |   ├── hooks
|   |   |   └── useIsMobile.js
|   |   |       ...
|   |   └── utils
|   |       └── dateUtils.js
|   |           ...
|   └── layouts (Templates)
|       └── HomeLayout.jsx
|           ...
└── Home (Domain)
    ├── Home.jsx (Pages/container)
    ├── Home.test.js
    ├── reducer.js
    ├── saga.js
    ├── action.js
    ├── components (Molecules, Organism)
    |   ├── NewsCard (Molecules)
    |   |   ├── NewsCard.jsx
    |   |   └── NewsCard.test.js
    |   |       ...     
    |   └── NewsList (Organism)
    |       ├── NewsList.jsx
    |       └── NewsList.test.js
    |           ...
    └── ... (could be hooks, utils, etc required by this domain)
```

## UI Styling
Follow BEM standardization

## UI/UX Concept
The main layout consist of :
- Header
- Content/Main
- Footer

### Header
Contains logo and log in/sign up button, and show the user name if the session exist

### Content/Main
Every page component/container is shown here, in this project we've 2 different pages :
- Home
- Detail

#### Home
Contains the search bar on the top of the component, and list with pagination at the bottom

#### Detail
Show the anime prefered detail including the image and video

### Footer
Show the app name and current date

## Deployment
Deploy using Firebase
