import { writable } from 'svelte/store';
import type { User, Trainer, Trainee } from '../types';
import { mockTrainers, mockTrainees } from '../utils/mockData';

// Current user state
export const currentUser = writable<User | null>(null);

// User type selection for demo
export const selectedUserType = writable<'trainer' | 'trainee' | null>(null);

// Available trainers and trainees
export const trainers = writable<Trainer[]>(mockTrainers);
export const trainees = writable<Trainee[]>(mockTrainees);

// Demo mode - allows switching between trainer and trainee views
export const demoMode = writable(true);

// Navigation state
export const currentView = writable<'home' | 'dashboard' | 'matches' | 'profile'>('home');

// Helper functions
export function setDemoUser(userType: 'trainer' | 'trainee', userId?: string) {
  selectedUserType.set(userType);
  
  if (userType === 'trainer') {
    const trainer = mockTrainers.find(t => userId ? t.id === userId : true) || mockTrainers[0];
    currentUser.set(trainer);
  } else {
    const trainee = mockTrainees.find(t => userId ? t.id === userId : true) || mockTrainees[0];
    currentUser.set(trainee);
  }
}

export function logout() {
  currentUser.set(null);
  selectedUserType.set(null);
  currentView.set('home');
}