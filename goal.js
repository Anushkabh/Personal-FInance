
// Goal Object Constructor
function Goal(name, amount, deadline) {
    this.name = name;
    this.amount = amount;
    this.deadline = deadline;
  }
  
  // Add Goal Function
  function addGoal(event) {
    event.preventDefault();
  
    // Get form inputs
    var nameInput = document.getElementById('goal-name');
    var amountInput = document.getElementById('goal-amount');
    var deadlineInput = document.getElementById('goal-deadline');
  
    // Create new Goal object
    var goal = new Goal(nameInput.value, parseFloat(amountInput.value), deadlineInput.value);
  
    // Clear form inputs
    nameInput.value = '';
    amountInput.value = '';
    deadlineInput.value = '';
  
    // Add goal to the goal list
    var goalList = document.getElementById('goal-list');
    var li = document.createElement('li');
    li.textContent = goal.name + ' - Rs' + goal.amount.toFixed(2) + ' by ' + goal.deadline;
    goalList.appendChild(li);
  
    // Save goals to local storage
    var goals = JSON.parse(localStorage.getItem('goals')) || [];
    goals.push(goal);
    localStorage.setItem('goals', JSON.stringify(goals));
  }
  
  // Load goals from local storage
  function loadGoals() {
    var goalList = document.getElementById('goal-list');
    var goals = JSON.parse(localStorage.getItem('goals')) || [];
    for (var i = 0; i < goals.length; i++) {
      var li = document.createElement('li');
      li.textContent = goals[i].name + ' - Rs' + goals[i].amount.toFixed(2) + ' by ' + goals[i].deadline;
      goalList.appendChild(li);
    }
  }
  
  // Add Goal Event Listener
  var addGoalBtn = document.getElementById('add-goal-btn');
  addGoalBtn.addEventListener('click', addGoal);
  
  // Load goals on page load
  window.addEventListener('load', loadGoals);
  
  