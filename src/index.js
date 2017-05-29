module.exports = async () => {
  const learnings = [
    'Learn React Native 🚀',
    'Load data asynchronously ⏲',
    'Enjoy the React paradigm 🤙',
  ];

  const tomorrow = [
    'Learn Redux tradeoffs ⚛',
    'Make the app beautiful 🎨',
    'Bridge native code with JavaScript 📲',
    'Become a GraphQL hero ️️⚡',
  ];

  const transformToBucket = ({ list, completed }) => list.map(text => ({ text, completed }));

  return [
    ...transformToBucket({ list: learnings, completed: true }),
    ...transformToBucket({ list: tomorrow, completed: false }),
  ];
};
