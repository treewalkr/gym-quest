<script lang="ts">
  import { goto } from '$app/navigation';
  
  // Mock user data
  const user = {
    name: 'John Doe',
    initials: 'JD',
    memberSince: 'Premium Member'
  };
  
  // Mock workout data
  const stats = {
    workoutsCompleted: 47,
    caloriesBurned: 12450,
    totalWorkoutTime: 2340, // in minutes
    currentStreak: 7
  };
  
  // Mock goals data
  const goals = {
    weeklyWorkouts: { current: 4, target: 5 },
    monthlyCalories: { current: 8500, target: 12000 },
    workoutStreak: { current: 7, target: 10 }
  };
  
  // Mock recent activities
  const recentActivities = [
    { type: 'Strength Training', duration: 45, calories: 320, date: '2024-01-15' },
    { type: 'Cardio', duration: 30, calories: 280, date: '2024-01-14' },
    { type: 'Yoga', duration: 60, calories: 180, date: '2024-01-13' },
    { type: 'HIIT', duration: 25, calories: 350, date: '2024-01-12' }
  ];
  
  // Drawer state
  let isDrawerOpen = false;
  
  function formatTime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  }
  
  function calculateProgress(current: number, target: number): number {
    return Math.min((current / target) * 100, 100);
  }
  
  function toggleDrawer() {
    isDrawerOpen = !isDrawerOpen;
  }
  
  function closeDrawer() {
    isDrawerOpen = false;
  }
  
  function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
      goto('/');
    }
  }
  
  function handleSettings() {
    alert('Settings feature coming soon!');
  }
  
  function handleStartWorkout() {
    alert('Start workout feature coming soon!');
  }
  
  function handleViewProgress() {
    alert('View progress feature coming soon!');
  }
  
  function handleNutrition() {
    alert('Nutrition feature coming soon!');
  }
</script>

<div class="min-h-screen bg-gray-50">
  <!-- Enhanced Header -->
  <header class="bg-white border-b border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Left Section: Title -->
        <div class="flex items-center">
          <div>
            <p class="text-base text-gray-600 font-medium">Welcome back, {user.name}</p>
          </div>
        </div>
        
        <!-- Right Section: Profile -->
        <div class="flex items-center space-x-6">
          <!-- Profile Section -->
          <button 
            on:click={toggleDrawer}
            class="flex items-center space-x-4 bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-3 transition-all duration-200 cursor-pointer"
          >
            <div class="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
              <span class="text-blue-700 text-base font-semibold">{user.initials}</span>
            </div>
            <div class="hidden sm:block">
              <p class="text-base font-semibold text-gray-900">{user.name}</p>
              <p class="text-sm text-gray-500">{user.memberSince}</p>
            </div>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

	<!-- Drawer Overlay -->
	{#if isDrawerOpen}
		<div 
			class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
			on:click={closeDrawer}
		></div>
	{/if}

	<!-- Drawer Menu -->
	<div 
		class="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out {isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}"
	>
		<!-- Drawer Header -->
		<div class="flex items-center justify-between p-6 border-b border-gray-200">
			<h2 class="text-xl font-semibold text-gray-900">Profile Menu</h2>
			<button 
				on:click={closeDrawer}
				class="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
			>
				<svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
				</svg>
			</button>
		</div>

		<!-- User Profile Section -->
		<div class="p-6 border-b border-gray-200">
			<div class="flex items-center space-x-4">
				<div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
					<span class="text-blue-700 text-xl font-semibold">{user.initials}</span>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-gray-900">{user.name}</h3>
					<p class="text-sm text-gray-500">{user.memberSince}</p>
					<p class="text-xs text-blue-600 mt-1">Member since 2024</p>
				</div>
			</div>
		</div>

		<!-- Menu Items -->
		<div class="p-4">
			<nav class="space-y-2">
				<!-- Profile Settings -->
				<button 
					on:click={() => { handleSettings(); closeDrawer(); }}
					class="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
				>
					<svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
					</svg>
					<span class="font-medium">Profile Settings</span>
				</button>

				<!-- Account Settings -->
				<button 
					on:click={() => { handleSettings(); closeDrawer(); }}
					class="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
				>
					<svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
					</svg>
					<span class="font-medium">Account Settings</span>
				</button>

				<!-- Settings -->
				<button 
					on:click={() => { handleSettings(); closeDrawer(); }}
					class="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
				>
					<svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
					</svg>
					<span class="font-medium">Settings</span>
				</button>

				<!-- Workout History -->
				<button 
					on:click={() => { handleViewProgress(); closeDrawer(); }}
					class="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
				>
					<svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
					</svg>
					<span class="font-medium">Workout History</span>
				</button>

				<!-- Nutrition -->
				<button 
					on:click={() => { handleNutrition(); closeDrawer(); }}
					class="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
				>
					<svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
					</svg>
					<span class="font-medium">Nutrition Tracking</span>
				</button>

				<!-- Divider -->
				<div class="border-t border-gray-200 my-4"></div>

				<!-- Logout -->
				<button 
					on:click={() => { handleLogout(); closeDrawer(); }}
					class="w-full flex items-center space-x-3 px-4 py-3 text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
				>
					<svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
					</svg>
					<span class="font-medium">Logout</span>
				</button>
			</nav>
		</div>
	</div>

	<!-- Main Content -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Quick Actions -->
    <div class="mb-8">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button 
          on:click={handleStartWorkout}
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center"
        >
          Start Workout
        </button>
        <button 
          on:click={handleViewProgress}
          class="bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors duration-200 text-center"
        >
          View Progress
        </button>
        <button 
          on:click={handleNutrition}
          class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center"
        >
          Nutrition
        </button>
      </div>
    </div>
    
    <!-- Statistics Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Workouts Completed -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Workouts Completed</p>
            <p class="text-2xl font-bold text-gray-900">{stats.workoutsCompleted}</p>
          </div>
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <div class="w-6 h-6 bg-blue-600 rounded"></div>
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-2">This month</p>
      </div>
      
      <!-- Calories Burned -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Calories Burned</p>
            <p class="text-2xl font-bold text-gray-900">{stats.caloriesBurned.toLocaleString()}</p>
          </div>
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <div class="w-6 h-6 bg-orange-500 rounded-full"></div>
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-2">Total</p>
      </div>
      
      <!-- Workout Time -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Workout Time</p>
            <p class="text-2xl font-bold text-gray-900">{formatTime(stats.totalWorkoutTime)}</p>
          </div>
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <div class="w-6 h-6 bg-green-500 rounded-lg"></div>
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-2">Total</p>
      </div>
      
      <!-- Current Streak -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Current Streak</p>
            <p class="text-2xl font-bold text-gray-900">{stats.currentStreak} days</p>
          </div>
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <div class="w-6 h-6 bg-purple-500 rounded-full"></div>
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-2">Keep it up!</p>
      </div>
    </div>
    
    <!-- Goals and Recent Activities -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Goals Section -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Goals Progress</h2>
        <div class="space-y-4">
          <!-- Weekly Workouts -->
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <span class="text-sm font-medium text-gray-700">Weekly Workouts</span>
              <span class="text-sm text-gray-500">{goals.weeklyWorkouts.current}/{goals.weeklyWorkouts.target} workouts</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style="width: {calculateProgress(goals.weeklyWorkouts.current, goals.weeklyWorkouts.target)}%"
              ></div>
            </div>
          </div>

          <!-- Monthly Calories -->
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <span class="text-sm font-medium text-gray-700">Monthly Calories</span>
              <span class="text-sm text-gray-500">{goals.monthlyCalories.current.toLocaleString()}/{goals.monthlyCalories.target.toLocaleString()} calories</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="bg-green-600 h-2 rounded-full transition-all duration-300" 
                style="width: {calculateProgress(goals.monthlyCalories.current, goals.monthlyCalories.target)}%"
              ></div>
            </div>
          </div>

          <!-- Workout Streak -->
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <span class="text-sm font-medium text-gray-700">Workout Streak</span>
              <span class="text-sm text-gray-500">{goals.workoutStreak.current}/{goals.workoutStreak.target} days</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                style="width: {calculateProgress(goals.workoutStreak.current, goals.workoutStreak.target)}%"
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Recent Activities -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
        <div class="space-y-4">
          {#each recentActivities as activity}
            <div class="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div class="w-5 h-5 bg-blue-600 rounded"></div>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-900">{activity.type}</p>
                  <p class="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm font-medium text-gray-900">{activity.duration} min</p>
                <p class="text-xs text-gray-500">{activity.calories} cal</p>
              </div>
            </div>
          {/each}
        </div>
        <button class="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
          View All Activities
        </button>
      </div>
    </div>
  </main>
</div>

<style>
  /* Hide scrollbar for all browsers */
  :global(html) {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  :global(html::-webkit-scrollbar) {
    display: none; /* Chrome, Safari, Opera */
  }

  :global(body) {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  :global(body::-webkit-scrollbar) {
    display: none; /* Chrome, Safari, Opera */
  }
</style>