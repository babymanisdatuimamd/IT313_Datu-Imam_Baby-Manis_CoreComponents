# Laboratory 6 - IT 313 – Mobile Programming

## Student Directory Viewer

### Overview
This laboratory demonstrates React Native core components, component props, state management, controlled inputs, list rendering, and user interactions by building a searchable student directory.

### Objectives
- Build reusable functional components using props.
- Display student information with `View`, `Image`, and `Text`.
- Use `StyleSheet` and Flexbox for layout.
- Manage student data with `useState`.
- Render lists using `.map()` and stable keys.
- Implement case-insensitive search using a controlled `TextInput`.
- Use `Pressable` to toggle a student's advising flag.

## Components Used

| Component | Purpose |
|---|---|
| `View` | Groups and organizes interface elements. |
| `Text` | Displays student names, year levels, and button labels. |
| `Image` | Displays each student's photo from a URL. |
| `ScrollView` | Allows the student list to scroll. |
| `TextInput` | Accepts the user's search query. |
| `Pressable` | Provides the interactive advising flag button. |
| `StyleSheet` | Defines reusable styles for layout and appearance. |

## Implementation Steps

### Step 1: Create the StudentCard Component
Created a reusable `StudentCard` functional component that receives these props:
- `id`: Unique student identifier.
- `name`: Student's name.
- `year`: Student's year level.
- `photoUrl`: URL of the student's photo.
- `flagged`: Whether the student is flagged for advising.
- `onToggleFlag`: Callback function to request a flag state change.

The component displays the student's photo, name, and year level.

### Step 2: Style the StudentCard
Used `StyleSheet.create()` to define the card's appearance.

- `flexDirection: "row"` places the photo and student information side-by-side.
- `alignItems: "center"` vertically aligns the contents.
- `width` and `height` define the photo dimensions.
- `borderRadius` rounds the photo's corners.
- `marginLeft` adds spacing between the photo and student information.

### Step 3: Create the StudentDirectory Component
Created a parent component named `StudentDirectory`.

- Defined an array of student objects.
- Used `useState` to store the students.
- Rendered each student as a `StudentCard` inside a `ScrollView`.
- Used `.map()` to create one card per student.
- Used `key={student.id}` to provide a stable key for each card.

### Step 4: Add Search Filtering
Added a controlled `TextInput` above the `ScrollView`.

- `value={query}` connects the input text to React state.
- `onChangeText={setQuery}` updates the query as the user types.
- `.filter()` creates a list of students whose names match the query.
- `.toLowerCase()` makes the search case-insensitive.
- `.includes()` checks whether a name contains the search text.

The directory renders `filteredStudents` so only matching cards appear.

### Step 5: Add the Advising Flag Button
Added a `Pressable` control inside each `StudentCard`.

- `onPress={() => onToggleFlag(id)}` calls the parent's callback with the student's ID.
- The style callback receives `{ pressed }` and changes opacity while the button is pressed.
- The button's background color and label depend on the `flagged` prop.
- Blue indicates the student is not flagged.
- Green indicates the student is flagged.

The parent component's `handleToggleFlag` function updates the matching student's `flagged` state using `.map()` and object spread syntax.

### Step 6: Test Controlled and Uncontrolled TextInput
Temporarily removed `value` and `onChangeText` from the `TextInput`.

it shows error msg and cant open view the main system
