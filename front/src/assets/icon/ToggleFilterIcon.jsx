const ToggleAdvancedFilterIcon = ({ isClosed }) => {
    const path = isClosed
      ? "M1 1L7 7L13 1"
      : "M13 7L7 0.999999L1 7";
  
    return (
      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={path} stroke="black" />
      </svg>
    )
  }
  
  export default ToggleAdvancedFilterIcon