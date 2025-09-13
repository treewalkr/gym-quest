// Core types for Gym Quest Demo

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  userType: 'trainer' | 'trainee';
  createdAt: Date;
}

export interface Trainer extends User {
  userType: 'trainer';
  specializations: string[];
  experience: number; // years
  rating: number;
  hourlyRate: number;
  location: string;
  bio: string;
  certifications: string[];
  availability: TimeSlot[];
}

export interface Trainee extends User {
  userType: 'trainee';
  fitnessGoals: string[];
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  preferredWorkoutTypes: string[];
  location: string;
  budget: {
    min: number;
    max: number;
  };
}

export interface TimeSlot {
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
}

export interface WorkoutSession {
  id: string;
  trainerId: string;
  traineeId: string;
  date: Date;
  duration: number; // minutes
  type: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface PerformanceMetric {
  id: string;
  userId: string;
  date: Date;
  type: 'weight' | 'reps' | 'time' | 'distance' | 'heartRate';
  value: number;
  unit: string;
  exercise?: string;
}

export interface Match {
  id: string;
  trainerId: string;
  traineeId: string;
  matchScore: number; // 0-100
  status: 'pending' | 'accepted' | 'declined';
  createdAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}