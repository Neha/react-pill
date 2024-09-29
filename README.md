# React Pill

**React Pill** is a customizable pill-style component that you can use to create tab-like elements in your React application. It is simple, lightweight, and easy to integrate, providing a clean and modern look for navigation or item selection.

## ✨ Features

- Customizable pills with support for labels, icons, and close buttons.
- Rounded or default rectangular styles.
- Easy-to-use API for on-click and close actions.

## 🚀 Getting Started

### Installation

You can install `react-pill` via NPM:

```bash
npm install react-pill
```

Or with Yarn:

```bash
yarn add react-pill
```

## 🛠️ Usage

Here's how you can use the `Pill` component in your React project:

```jsx
import React from "react";
import Pill from "react-pill";

const App = () => {
  const data = [
    { label: "Tab 1", bgcolor: "#ffcccb" },
    { label: "Tab 2", bgcolor: "#b0e57c" },
    { label: "Tab 3", bgcolor: "#87ceeb", icon: "📌" },
  ];

  const handleSelect = (event, index) => {
    console.log(`Selected Pill: ${index}`);
  };

  const handleClose = (index) => {
    console.log(`Closed Pill: ${index}`);
  };

  return (
    <div>
      <Pill
        data={data}
        onSelect={handleSelect}
        onClose={handleClose}
        rounded={true}
        containerClassName="pill-container"
        pillClassName="custom-pill"
      />
    </div>
  );
};

export default App;
```

### Props

| Prop                  | Type        | Description                                                     |
| --------------------- | ----------- | --------------------------------------------------------------- |
| `data`                | `array`     | Array of pill data objects, each with properties `label`, `bgcolor`, and `icon`. |
| `onClose`             | `function`  | Function called when the close button is clicked. Receives the index of the pill. |
| `onSelect`            | `function`  | Function called when a pill is selected. Receives the event and the index of the pill. |
| `rounded`             | `boolean`   | If `true`, pills will have rounded corners.                     |
| `pillClassName`       | `string`    | Custom class for individual pills.                              |
| `containerClassName`  | `string`    | Custom class for the pill container.                            |

### Example

In the example above:
- The `data` prop provides the labels, colors, and optional icons for each pill.
- `onSelect` and `onClose` props handle user interactions.
- You can customize the style by providing custom CSS classes.

## 🖌️ Styling

You can style the pills using your own CSS. Here are the default classes you can override:

- **`.defaultPill`**: The base pill styling.
- **`.rounded`**: Adds rounded corners.
- **`.closeButton`**: Styles the close button.
- **`.iconContainer`**: Wraps the icon inside the pill.

You can create your own `Pill.css` to modify the appearance as desired:

```css
.defaultPill {
  padding: 10px;
  border: none;
  cursor: pointer;
}

.rounded {
  border-radius: 20px;
}

.closeButton {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}
```

## 🔧 Build & Development

To build the package, run:

```bash
npm run build
```

To run the tests:

```bash
npm test
```

## 📦 Peer Dependencies

Ensure you have `react` and `react-dom` installed in your project:

```json
"peerDependencies": {
  "react": "^17.0.0",
  "react-dom": "^17.0.0"
}
```

## 🤝 Contributing

Contributions are welcome! If you have ideas or suggestions, feel free to open an issue or create a pull request.

## 📄 License

MIT License. Feel free to use, modify, and share it!