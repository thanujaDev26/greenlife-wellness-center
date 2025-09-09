export const users = [
  // Patients
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    role: "patient",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face",
    phone: "+94 77 123 4567",
    joinDate: "2023-06-15",
    status: "active",
    preferences: ["Yoga", "Meditation", "Ayurveda"],
    emergencyContact: {
      name: "Mike Johnson",
      phone: "+94 77 765 4321",
      relationship: "Spouse"
    }
  },
  {
    id: 2,
    name: "David Chen",
    email: "david.chen@email.com",
    role: "patient",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    phone: "+94 77 234 5678",
    joinDate: "2023-08-20",
    status: "active",
    preferences: ["Physiotherapy", "Massage", "Nutrition"],
    emergencyContact: {
      name: "Lisa Chen",
      phone: "+94 77 876 5432",
      relationship: "Sister"
    }
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    role: "patient",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    phone: "+94 77 345 6789",
    joinDate: "2023-09-10",
    status: "active",
    preferences: ["Meditation", "Ayurveda", "Yoga"],
    emergencyContact: {
      name: "James Wilson",
      phone: "+94 77 987 6543",
      relationship: "Father"
    }
  },
  
  // Therapists
  {
    id: 11,
    name: "Dr. Priya Sharma",
    email: "priya.sharma@greenlife.lk",
    role: "therapist",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    phone: "+94 77 111 2233",
    specialization: "Ayurvedic Medicine & Nutrition",
    experience: "12 years",
    certifications: ["Certified Ayurvedic Practitioner", "Nutritional Therapist", "Herbal Medicine Specialist"],
    availability: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 3:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    status: "active"
  },
  {
    id: 12,
    name: "Meditation Master Sita",
    email: "sita.master@greenlife.lk",
    role: "therapist",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    phone: "+94 77 222 3344",
    specialization: "Meditation & Mindfulness",
    experience: "20 years",
    certifications: ["Certified Meditation Teacher", "Mindfulness-Based Stress Reduction", "Vipassana Meditation Guide"],
    availability: {
      monday: "6:00 AM - 2:00 PM",
      tuesday: "6:00 AM - 2:00 PM",
      wednesday: "6:00 AM - 2:00 PM",
      thursday: "6:00 AM - 2:00 PM",
      friday: "6:00 AM - 2:00 PM",
      saturday: "7:00 AM - 12:00 PM",
      sunday: "7:00 AM - 12:00 PM"
    },
    status: "active"
  },
  {
    id: 13,
    name: "Master Chen Wei",
    email: "chen.wei@greenlife.lk",
    role: "therapist",
    avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
    phone: "+94 77 333 4455",
    specialization: "Therapeutic Massage",
    experience: "15 years",
    certifications: ["Licensed Massage Therapist", "Deep Tissue Specialist", "Thai Massage Certified"],
    availability: {
      monday: "10:00 AM - 6:00 PM",
      tuesday: "10:00 AM - 6:00 PM",
      wednesday: "10:00 AM - 6:00 PM",
      thursday: "10:00 AM - 6:00 PM",
      friday: "10:00 AM - 6:00 PM",
      saturday: "9:00 AM - 3:00 PM",
      sunday: "Closed"
    },
    status: "active"
  },
  
  // Admin
  {
    id: 21,
    name: "Admin User",
    email: "admin@greenlife.lk",
    role: "admin",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    phone: "+94 77 000 1111",
    department: "Operations",
    status: "active"
  }
];