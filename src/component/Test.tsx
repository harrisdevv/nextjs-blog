// ExampleComponent.tsx

import SlideLeftToRightComponent from "./SlideLeftToRightComponent";

const TestComponent = () => {
  return (
    <SlideLeftToRightComponent duration={0.5} x={-200}>
      <div>
        <h1>Test Component</h1>
        <p>Test Component</p>
      </div>
    </SlideLeftToRightComponent>
  );
};

export default TestComponent;
