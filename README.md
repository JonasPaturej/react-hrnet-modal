# React HRnet Modal

A lightweight and reusable React modal component created as part of the HRnet migration project.

This library replaces the original jQuery modal plugin with a modern React component that is easy to integrate into any React application.

---

## Features

- Lightweight
- Easy to use
- Reusable
- React-based
- Custom content using children
- Close button included

---

## Requirements

- Node.js >= 18
- React >= 19

---

## Installation

```bash
npm install react-hrnet-modal
```

---

## Import

```jsx
import { Modal } from "react-hrnet-modal";
import "react-hrnet-modal/dist/react-hrnet-modal.css";
```

---

## Usage

```jsx
import { useState } from "react";
import { Modal } from "react-hrnet-modal";
import "react-hrnet-modal/dist/react-hrnet-modal.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Employee created!</p>
      </Modal>
    </>
  );
}
```

---

# Props

| Prop     | Type      | Required | Description                                            |
| -------- | --------- | -------- | ------------------------------------------------------ |
| isOpen   | boolean   | Yes      | Controls whether the modal is displayed.               |
| onClose  | function  | Yes      | Function called when the user clicks the close button. |
| children | ReactNode | Yes      | Content displayed inside the modal.                    |

---

## Example

```jsx
<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <p>Employee created!</p>
</Modal>
```

---

## Author

Jonas Paturej

---

## License

MIT
