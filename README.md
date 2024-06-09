# Text to PDF converter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

# Prerequisites

Before you begin, ensure you have installed all necessary software and tools: Node.js, Angular CLI, Git.

# Initial setup

Start by cloning the repository to your local machine using command `git clone https://github.com/sergii-hq/text-to-pdf-converter.git`, then navigate to the primary project directory `cd text-to-pdf-converter` and run `npm install` to install the necessary dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Code linting and formatting

Run `npm run lint:fix` to check the files for linting errors and automatically fix any fixable errors it finds.
Run `npm run prettier` to automatically format the code to ensure that all developers adhere to the same style.

## Build

Run `npm run build:prod` to build the project in production mode and optimizes the build for the best performance. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project documentation

### Description
The "Text to PDF converter" project is a simple Angular application that allows users to convert entered text into a PDF document. The application uses an external API for text to PDF conversion and displays the result in a PDF viewer. Additionally, the application stores the conversion history in the browser's local storage.

### Project Structure

- **src/**
  - **app/**
    - **modules/**
      - **system/**
        - **pages/**
          - **text-converter-page/**: Main page for text input, conversion and result display.
        - **services/**
          - **converter.service.ts**: Service for interacting with the text-to-PDF conversion API.
        - **system.component.html**: Layout component that structures the overall layout of the application, including the header, main content area and footer.
        - **system.component.scss**: Styles of the layout component.
        - **system.component.spec.ts**: Tests of the layout component.
        - **system.component.ts**: Layout component of the application.
        - **system.module.ts**: Contains components and modules used inside System module.
        - **system-routing.module.ts**: Handles the routing for the System module.
    - **shared/**
      - **components/**: Common components.
      - **pipes/**: Common pipes.
      - **services/**: Common services.
      - **shared.module.ts**: Shared module that contains common components, directives and pipes used across the application.
    - **app.component.html**: Template of the root component.
    - **app.component.scss**: Styles of the root component.
    - **app.component.spec.ts**: Tests of the root component.
    - **app.component.ts**: Root component of the application.
    - **app.module.ts**: Main module of the application, where all necessary modules are imported.
    - **app-routing.module.ts**: Main routing module of the application.
  - **assets/**
    - **media/**: Static images, icons.
    - **styles/**: Global styles of the application.
  - **environments/**
    - **environment.dev.ts**: Configuration for the development environment.
    - **environment.prod.ts**: Configuration for the production environment.
    - **environment.ts**: Base configuration for all environments.
