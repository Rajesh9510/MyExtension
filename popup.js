// popup.js
document.addEventListener('DOMContentLoaded', function() {
    var getTabTitleBtn = document.getElementById('getTabTitleBtn');
    var tabTitle = document.getElementById('tabTitle');
  
    getTabTitleBtn.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentTab = tabs[0];
        tabTitle.textContent = currentTab.title;
      });
    });
  });
  