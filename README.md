# ProjectsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.
It is showing a list of JSON objects in two different styles.
 - as projects loaded in flex div aranged in rows. The count per page depends on the screen size.
 - as jobs loaded in standart div aranged in a column (10 jobs shown per page).
 For pagination I used ngx-pagination.

On Home page the user have the chance to choose which visualization would like to see using two given links.
A link to each view is available in the navigation bar too. It contains also links to Home component, About and Contact components.

Through resolver I return observable containing the data. In each component data is loaded as per component's purpose (list of objects or single object) from the JSON data file.

Separate service (LoadProjectsService) is taking care of how many projects to be shown on one page depending on window width.

The styles of the single Project and a single Job components are a bit different too.
On wider screens (width above 1080px) the single project is shown as a horizontal card with image on left and the information on right. When screen width is below 1080px the project image and information are loaded in one column.

Job component is always loaded as a vertical card with the image on top and information below it.

On smaller screens (960px and below) the horizontal menu is hidden and a menu button appears. This is done in the menu-btn directive via @HostListener on click event. The directive is attached to the menu icon and the unordered list containing the menu links.

On About page you'll find the same text as here.

On Contact page there is a simple contact form.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).