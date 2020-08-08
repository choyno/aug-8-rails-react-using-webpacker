export default function debounce(func, wait) {
  let timeout;

  return function() {
    const args = arguments;

    const later = () => {
      timeout = null;

      func.apply(this, args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
  };
};

