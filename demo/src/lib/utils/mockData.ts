import type { Trainer, Trainee, PerformanceMetric, Match } from '../types';

// Mock Trainers
export const mockTrainers: Trainer[] = [
  {
    id: 'trainer-1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    userType: 'trainer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    specializations: ['Weight Training', 'HIIT', 'Nutrition'],
    experience: 5,
    rating: 4.8,
    hourlyRate: 75,
    location: 'San Francisco, CA',
    bio: 'Certified personal trainer with 5+ years of experience helping clients achieve their fitness goals.',
    certifications: ['NASM-CPT', 'Nutrition Specialist'],
    availability: [
      { dayOfWeek: 1, startTime: '09:00', endTime: '17:00' },
      { dayOfWeek: 3, startTime: '09:00', endTime: '17:00' },
      { dayOfWeek: 5, startTime: '09:00', endTime: '17:00' }
    ],
    createdAt: new Date('2024-01-15')
  },
  {
    id: 'trainer-2',
    name: 'Mike Chen',
    email: 'mike@example.com',
    userType: 'trainer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    specializations: ['Yoga', 'Flexibility', 'Mindfulness'],
    experience: 8,
    rating: 4.9,
    hourlyRate: 65,
    location: 'San Francisco, CA',
    bio: 'Experienced yoga instructor focused on building strength, flexibility, and mental wellness.',
    certifications: ['RYT-500', 'Meditation Teacher'],
    availability: [
      { dayOfWeek: 2, startTime: '08:00', endTime: '16:00' },
      { dayOfWeek: 4, startTime: '08:00', endTime: '16:00' },
      { dayOfWeek: 6, startTime: '10:00', endTime: '14:00' }
    ],
    createdAt: new Date('2023-11-20')
  }
];

// Mock Trainees
export const mockTrainees: Trainee[] = [
  {
    id: 'trainee-1',
    name: 'Alex Rodriguez',
    email: 'alex@example.com',
    userType: 'trainee',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    fitnessGoals: ['Weight Loss', 'Muscle Building'],
    experienceLevel: 'beginner',
    preferredWorkoutTypes: ['Weight Training', 'Cardio'],
    location: 'San Francisco, CA',
    budget: { min: 50, max: 80 },
    createdAt: new Date('2024-02-01')
  },
  {
    id: 'trainee-2',
    name: 'Emma Wilson',
    email: 'emma@example.com',
    userType: 'trainee',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    fitnessGoals: ['Flexibility', 'Stress Relief'],
    experienceLevel: 'intermediate',
    preferredWorkoutTypes: ['Yoga', 'Pilates'],
    location: 'San Francisco, CA',
    budget: { min: 60, max: 70 },
    createdAt: new Date('2024-01-28')
  }
];

// Mock Performance Metrics
export const mockPerformanceMetrics: PerformanceMetric[] = [
  {
    id: 'metric-1',
    userId: 'trainee-1',
    date: new Date('2024-03-01'),
    type: 'weight',
    value: 180,
    unit: 'lbs'
  },
  {
    id: 'metric-2',
    userId: 'trainee-1',
    date: new Date('2024-03-08'),
    type: 'weight',
    value: 178,
    unit: 'lbs'
  },
  {
    id: 'metric-3',
    userId: 'trainee-1',
    date: new Date('2024-03-01'),
    type: 'reps',
    value: 12,
    unit: 'reps',
    exercise: 'Push-ups'
  },
  {
    id: 'metric-4',
    userId: 'trainee-1',
    date: new Date('2024-03-08'),
    type: 'reps',
    value: 15,
    unit: 'reps',
    exercise: 'Push-ups'
  }
];

// Mock Matches
export const mockMatches: Match[] = [
  {
    id: 'match-1',
    trainerId: 'trainer-1',
    traineeId: 'trainee-1',
    matchScore: 85,
    status: 'pending',
    createdAt: new Date('2024-03-10')
  },
  {
    id: 'match-2',
    trainerId: 'trainer-2',
    traineeId: 'trainee-2',
    matchScore: 92,
    status: 'accepted',
    createdAt: new Date('2024-03-09')
  }
];