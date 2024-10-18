document.addEventListener('DOMContentLoaded', function () {
    // Select all sidebar categories
    const sidebarCategories = document.querySelectorAll('.theme-doc-sidebar-item-category');
  
    sidebarCategories.forEach((category) => {
      // Find the button that triggers the collapse/expand action
      const button = category.querySelector('.menu__caret');
  
      button.addEventListener('click', function () {
        // Close all other open categories when one is clicked
        sidebarCategories.forEach((otherCategory) => {
          if (otherCategory !== category && !otherCategory.classList.contains('menu__list-item--collapsed')) {
            // Collapse the category if it's open and it's not the one clicked
            otherCategory.classList.add('menu__list-item--collapsed');
          }
        });
  
        // Toggle the clicked category (expand/collapse)
        category.classList.toggle('menu__list-item--collapsed');
      });
    });
  });
  