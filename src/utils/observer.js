const observer = (target, threshold = 0.1) => {
  
  const elementObserver = new IntersectionObserver((elements) => { 
    
    elements.forEach((element) => {
      element.target.classList.add("universal-animation");

      if (element.isIntersecting) {
        element.target.style.animation = `${element.target.dataset?.move ?? "move-down"} ${element.target.dataset?.duration ?? 1}s ${element.target.dataset?.delay ?? 0}s ease-in-out forwards`;
        elementObserver.unobserve(element.target);
      } else {
        element.target.style.animation = `none`;
      };

      
    });
  }, { threshold });

  target.forEach((item) => {
    elementObserver.observe(item);
  });

  return elementObserver;
};

export default observer;