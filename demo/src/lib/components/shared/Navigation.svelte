<script lang="ts">
  import { currentUser, selectedUserType, currentView, logout } from '$lib/stores/appStore';
  
  function handleNavigation(view: 'home' | 'dashboard' | 'matches' | 'profile') {
    currentView.set(view);
  }
  
  function handleLogout() {
    logout();
  }
</script>

<nav class="bg-white shadow-lg border-b">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <!-- Logo and brand -->
      <div class="flex items-center">
        <button 
          on:click={() => handleNavigation('home')}
          class="flex items-center space-x-2 text-xl font-bold text-blue-600 hover:text-blue-700"
        >
          <span class="text-2xl">💪</span>
          <span>Gym Quest</span>
        </button>
        <span class="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">DEMO</span>
      </div>
      
      <!-- Navigation links -->
      {#if $currentUser}
        <div class="flex items-center space-x-4">
          <button 
            on:click={() => handleNavigation('dashboard')}
            class="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            class:text-blue-600={$currentView === 'dashboard'}
            class:bg-blue-50={$currentView === 'dashboard'}
          >
            Dashboard
          </button>
          
          <button 
            on:click={() => handleNavigation('matches')}
            class="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            class:text-blue-600={$currentView === 'matches'}
            class:bg-blue-50={$currentView === 'matches'}
          >
            {$selectedUserType === 'trainer' ? 'Find Clients' : 'Find Trainers'}
          </button>
          
          <button 
            on:click={() => handleNavigation('profile')}
            class="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            class:text-blue-600={$currentView === 'profile'}
            class:bg-blue-50={$currentView === 'profile'}
          >
            Profile
          </button>
          
          <!-- User info -->
          <div class="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
            <div class="flex items-center space-x-2">
              {#if $currentUser.avatar}
                <img 
                  src={$currentUser.avatar} 
                  alt={$currentUser.name}
                  class="w-8 h-8 rounded-full object-cover"
                />
              {:else}
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-blue-600 text-sm font-medium">
                    {$currentUser.name.charAt(0)}
                  </span>
                </div>
              {/if}
              <div class="text-sm">
                <div class="font-medium text-slate-900">{$currentUser.name}</div>
				<div class="text-slate-500 capitalize">{$selectedUserType}</div>
              </div>
            </div>
            
            <button 
              on:click={handleLogout}
              class="text-slate-400 hover:text-slate-600 text-sm"
              title="Logout"
              aria-label="Logout"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      {/if}
    </div>
  </div>
</nav>