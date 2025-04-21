# WeatherApp

<br>
[Live demo](https://internship-weather-app-1.vercel.app)

<br><br>

## Install

```sh
npm install
```
or
```sh
npm i
```

## Run in dev mode

```sh
vite
```
or
```
npm run dev
```

## Sprint 1

**Objective**:

Develop a fully functional weather forecast application with real-time data, responsive design, and interactive features.

**Settings**:
+ Solo
+ Estimated time: 15 hours (Actual completion time: 9 hours)
+ Number of task: 4
+ Technology: HTML, CSS, JS

### Task 4

Create a responsive and fluid layout for mobile and tablet versions according to the [mockup](https://www.figma.com/design/60Iap3oS9KpQ6XPuBK8CZ2/Weather-App.-1-sprint.-4-task?m=auto&t=dSkiGmTdc6TN5fqV-6).

Breakpoints: 375px, 640px, 768px, 886px, 1024px, 1280px, 1280px+

Ensure the layout adapts smoothly (fluid/responsive) across all screen sizes.

Use BEM methodology for styling.

**Note**: Implementation should match the mockup's design for each specified device width.

### Task 3

Implement the bottom forecast block with tabs for "24-hour" and "5-day" forecasts based on the [mockup](https://www.figma.com/design/PkI39bflCAuGAhk5SdHuXS/Weather-App.-1-sprint.-3-task?m=auto&t=dSkiGmTdc6TN5fqV-6).

Minimum screen width: 1280px.

Set up tab handlers for the **"24-hour"** and **"5-day"** buttons so that clicking them switches between tabs and displays the corresponding weather data in the cards.

Populate the tab cards with mockup data.

Store forecast data in separate variables (one for 24-hour, another for 5-day).

When clicking a footer link, open [https://preax.ru](https://preax.ru) in a new tab.

Use BEM methodology for styling.

**Important**: This task is layout-only—do not implement the scroll button functionality, just the static elements.

### Task 2

Based on the [mockup](https://www.figma.com/design/WKp7YJWSjyfvz0FxBl9DMd/Weather-App.-1-sprint.-2-task?m=auto&t=dSkiGmTdc6TN5fqV-6), implement the weather data cards.

Store the weather data in a separate variable (in its own file).

Populate the cards on the main page using this variable.

Use BEM methodology for styling.

**Important**: This task is only about layout—the cards should display weather data from the variable. No need to implement actual weather data fetching functionality.

### Task 1

Based on the [mockup](https://www.figma.com/file/HYsEoE13I6ecXIiOj1fkSe/Weather-App.-1-sprint.-1-task?type=design&node-id=0-1&mode=design&t=8oVEZdTnnFVrRrsC-0), create the page header with all its elements, the cards on the right, and the current city forecast block.

For the background, use the default JPEG image from the mockup (place it in the public folder). It should maintain its proportions and cover the entire screen.

The city data on the main page should be filled in according to the mockup.

The text entered in the search field should be displayed in the console.

Minimum screen width: 1280px.

Page content should be centered.

If the window height is smaller than the page content, a scrollbar should appear.

When scrolling the page, the background image should stay fixed.

Use the BEM methodology for styling.

**Important**: This task is only about layout—no need to implement the search functionality.