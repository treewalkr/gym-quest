<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  
  let email = 'demo@gymquest.com';
  let password = 'password123';
  let isLoggedIn = false;
  let emailError = '';
  let passwordError = '';
  let mounted = false;
  let showRegister = false;

  onMount(() => {
    mounted = true;
  });

  function validateForm() {
    emailError = '';
    passwordError = '';
    
    if (!email) {
      emailError = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError = 'Please enter a valid email';
    }
    
    if (!password) {
      passwordError = 'Password is required';
    } else if (password.length < 6) {
      passwordError = 'Password must be at least 6 characters';
    }
    
    return !emailError && !passwordError;
  }

  function handleLogin() {
    if (validateForm()) {
      // TODO: Implement actual login logic
      alert(`Login attempted with email: ${email}`);
      isLoggedIn = true;
    }
  }

  function handleRegister() {
    showRegister = true;
  }

  function handleBackToLogin() {
    showRegister = false;
  }

  function handleRegisterSubmit() {
    // Mock registration
    alert('Registration successful! You can now sign in.');
    showRegister = false;
  }

  function handlePersonalTrackingClick() {
    // Navigate to personal tracking dashboard
    goto('/client/dashboard');
  }

  function handleFindTrainerClick() {
    // TODO: Navigate to trainer discovery
    alert('Find trainer feature coming soon!');
  }

  function handleTrainerClick() {
    // TODO: Navigate to trainer interface
    alert('Trainer interface coming soon!');
  }
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-8">
	<!-- App Logo -->
	<div class="mb-8">
		<div class="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
			<span class="text-white text-xl font-bold">GQ</span>
		</div>
	</div>

	<!-- Welcome Content -->
	<div class="text-center mb-8 max-w-md">
		<h1 class="text-3xl font-bold text-gray-900 mb-4">
			Welcome to Gym Quest
		</h1>
		<p class="text-gray-600 text-base">
			Track your personal fitness journey and achieve your goals
		</p>
	</div>

	<!-- Login/Register Form -->
	{#if !isLoggedIn}
		<div class="w-full max-w-md mb-8">
			<div class="bg-white rounded-lg shadow-md border p-6">
				{#if !showRegister}
					<div class="text-center mb-6">
						<h2 class="text-xl font-semibold text-gray-900 mb-2">Sign In</h2>
						<p class="text-gray-600">Access your fitness dashboard</p>
					</div>
					
					<form on:submit|preventDefault={handleLogin} class="space-y-4">
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
							<input
								id="email"
								type="email"
								bind:value={email}
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="your@email.com"
								required
							/>
							{#if emailError}
								<p class="text-red-500 text-sm mt-1">{emailError}</p>
							{/if}
						</div>
							
						<div>
							<label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
							<input
								id="password"
								type="password"
								bind:value={password}
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="••••••••"
								required
							/>
							{#if passwordError}
								<p class="text-red-500 text-sm mt-1">{passwordError}</p>
							{/if}
						</div>
							
						<button
							type="submit"
							class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
						>
							Sign In
						</button>
					</form>
					
					<div class="mt-4 text-center">
						<p class="text-gray-600">
							New to Gym Quest? 
							<button 
								on:click={handleRegister}
								class="text-blue-600 hover:text-blue-700 font-medium hover:underline"
							>
								Register here
							</button>
						</p>
					</div>
				{:else}
					<!-- Register Form -->
					<div class="text-center mb-6">
						<h2 class="text-xl font-semibold text-gray-900 mb-2">Create Account</h2>
						<p class="text-gray-600">Join Gym Quest today</p>
					</div>
					
					<form on:submit|preventDefault={handleRegisterSubmit} class="space-y-4">
						<div>
							<label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
							<input
								id="fullName"
								type="text"
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="John Doe"
								required
							/>
						</div>
						
						<div>
							<label for="regEmail" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
							<input
								id="regEmail"
								type="email"
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="your@email.com"
								required
							/>
						</div>
						
						<div>
							<label for="regPassword" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
							<input
								id="regPassword"
								type="password"
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="••••••••"
								required
							/>
						</div>
						
						<div>
							<label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
							<input
								id="confirmPassword"
								type="password"
								class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="••••••••"
								required
							/>
						</div>
						
						<button
							type="submit"
							class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
						>
							Create Account
						</button>
					</form>
					
					<div class="mt-4 text-center">
						<p class="text-gray-600">
							Already have an account? 
							<button 
								on:click={handleBackToLogin}
								class="text-blue-600 hover:text-blue-700 font-medium hover:underline"
							>
								Sign in here
							</button>
						</p>
					</div>
				{/if}
			</div>
		</div>
	{/if}

	<!-- Divider -->
	<div class="w-full max-w-md mb-6">
		<div class="flex items-center">
			<div class="flex-1 h-px bg-gray-300"></div>
			<span class="px-4 text-sm text-gray-500">or explore features</span>
			<div class="flex-1 h-px bg-gray-300"></div>
		</div>
	</div>

	<!-- Action Buttons -->
	<div class="w-full max-w-md space-y-3">
		<button
			on:click={handlePersonalTrackingClick}
			class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
		>
			Start Personal Tracking
		</button>

		<button
			on:click={handleFindTrainerClick}
			class="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors duration-200"
		>
			Find a Trainer
		</button>

		<button
			on:click={handleTrainerClick}
			class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-6 rounded-lg transition-colors duration-200"
		>
			I'm a Trainer
		</button>
	</div>
</div>

<style>
	@keyframes bounce-in {
		0% {
			opacity: 0;
			transform: scale(0.3) translateY(-50px);
		}
		50% {
			opacity: 1;
			transform: scale(1.05) translateY(0);
		}
		70% {
			transform: scale(0.95) translateY(0);
		}
		100% {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	@keyframes fade-in-up {
		0% {
			opacity: 0;
			transform: translateY(30px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes shake {
		0%, 100% {
			transform: translateX(0);
		}
		10%, 30%, 50%, 70%, 90% {
			transform: translateX(-2px);
		}
		20%, 40%, 60%, 80% {
			transform: translateX(2px);
		}
	}

	:global(.animate-bounce-in) {
		animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	:global(.animate-fade-in-up) {
		animation: fade-in-up 0.6s ease-out;
	}

	:global(.animate-shake) {
		animation: shake 0.5s ease-in-out;
	}

	:global(.delay-200) {
		animation-delay: 200ms;
	}

	:global(.delay-400) {
		animation-delay: 400ms;
	}

	:global(.delay-500) {
		animation-delay: 500ms;
	}

	:global(.delay-600) {
		animation-delay: 600ms;
	}

	:global(.delay-800) {
		animation-delay: 800ms;
	}

	:global(.delay-1000) {
		animation-delay: 1000ms;
	}

	/* Enhanced glassmorphism effects */
	:global(.backdrop-blur-xl) {
		backdrop-filter: blur(24px);
	}

	:global(.backdrop-blur-sm) {
		backdrop-filter: blur(4px);
	}

	/* Enhanced shadow effects */
	:global(.shadow-3xl) {
		box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
	}

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

	/* Smooth transitions for all interactive elements */
	:global(button) {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	:global(input) {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
