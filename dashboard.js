// Hardcoded Real-World Structural Personnel Matrix
const talentDatabaseMatrix = [
    {
        id: "STOD-01",
        name: "Sakshi Chouhan",
        role: "Frontend",
        specialty: "Responsive Core & UI Semantics",
        capabilityIndex: "Client-Side Logic Specialist",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-02",
        name: "Aarav Sharma",
        role: "Frontend",
        specialty: "Cross-Device Layout Validation",
        capabilityIndex: "UI Component Specialist",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-03",
        name: "Rohan Verma",
        role: "Logic",
        specialty: "C++ Data Matrices & Execution Flow",
        capabilityIndex: "Algorithmic Logic Anchor",
        workload: "Optimal",
        statusCode: "load-optimal"
    },

    {
        id: "STOD-04",
        name: "Shaili Nagar",
        role: "Frontend",
        specialty: "Tailwind Component Design & Styling",
        capabilityIndex: "UI/UX Specialist",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-05",
        name: "Suhani Yadav",
        role: "Logic",
        specialty: "Node.js REST API Architecture",
        capabilityIndex: "Backend Engineering Lead",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-06",
        name: "Rajnandini Rajput",
        role: "Analytics",
        specialty: "Statistical Matrices & SQL Pipelines",
        capabilityIndex: "Data Science Associate",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-07",
        name: "Sejal Nagar",
        role: "Design",
        specialty: "User Persona Research & Wireframing",
        capabilityIndex: "Creative Lead Anchor",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-08",
        name: "Sattyam Gonkar",
        role: "Infrastructure",
        specialty: "AWS Cloud Automation & CI/CD Pipelines",
        capabilityIndex: "DevOps Operations Anchor",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-09",
        name: "Somesh Malviya",
        role: "Infrastructure",
        specialty: "Distributed Systems & System Flows",
        capabilityIndex: "Cloud Architect Solution",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-10",
        name: "Hariom Khilpadiya",
        role: "Logic",
        specialty: "Database Optimization & Indexing",
        capabilityIndex: "Database Admin Specialist",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-11",
        name: "Srishti Chouhan",
        role: "Quality Assurance",
        specialty: "Selenium & Framework Debugging Protocols",
        capabilityIndex: "QA Automation Associate",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-12",
        name: "Shalu Kumari",
        role: "Management",
        specialty: "Agile Sprint Monitoring & Delivery",
        capabilityIndex: "Technical Product Owner",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-13",
        name: "Nidhi Mukati",
        role: "Logic",
        specialty: "Full Stack Script Deployment",
        capabilityIndex: "MERN Stack Specialist",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-14",
        name: "Somya Parsai",
        role: "Analytics",
        specialty: "Predictive Intelligence Modeling",
        capabilityIndex: "Business Analyst Expert",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-15",
        name: "Chanchal Sharma",
        role: "Design",
        specialty: "Vector Graphics & Corporate Branding",
        capabilityIndex: "Visual Illustrator",
        workload: "Available",
        statusCode: "load-available"
    },
    {
        id: "STOD-16",
        name: "Shubham Ahirwar",
        role: "Infrastructure",
        specialty: "Penetration Testing & Encryption Systems",
        capabilityIndex: "Cybersecurity Analyst",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-17",
        name: "Asvini Kushwah",
        role: "Frontend",
        specialty: "State Management & Custom UI Hooks",
        capabilityIndex: "React Framework Coder",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-18",
        name: "Shivam Khuswah",
        role: "Logic",
        specialty: "Data Scraping & Python Automations",
        capabilityIndex: "Automation Architect",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-19",
        name: "Tanuj Thakur",
        role: "Infrastructure",
        specialty: "Subnet Routing & Server Upkeep",
        capabilityIndex: "Network Administrator",
        workload: "Available",
        statusCode: "load-available"
    },
    {
        id: "STOD-20",
        name: "Muskan Chouhan",
        role: "Management",
        specialty: "Daily Standups & Impediment Removal",
        capabilityIndex: "Certified Scrum Master",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-21",
        name: "Pankaj Yadav",
        role: "Infrastructure",
        specialty: "Kernel Configuration & Shell Scripts",
        capabilityIndex: "Linux System Administrator",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-22",
        name: "Prena Mandloi",
        role: "Frontend",
        specialty: "Swift UI Components & iOS Execution",
        capabilityIndex: "Mobile App Engineer",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-23",
        name: "Utsav Chouhan",
        role: "Analytics",
        specialty: "Deep Learning Neural Operations",
        capabilityIndex: "AI Specialist Principal",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-24",
        name: "Arun Patel",
        role: "Infrastructure",
        specialty: "Vulnerability Assessments & Cloud Firewalls",
        capabilityIndex: "Security Specialist",
        workload: "Available",
        statusCode: "load-available"
    },
    {
        id: "STOD-25",
        name: "Varsha Mandvi",
        role: "Quality Assurance",
        specialty: "Regression Suite Running & Bug Tracking",
        capabilityIndex: "Functional Testing Analyst",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-26",
        name: "Yuvraj Rajput",
        role: "Frontend",
        specialty: "TypeScript Directives & View Scoping",
        capabilityIndex: "Angular Framework Developer",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-27",
        name: "Vikas Mehra",
        role: "Documentation",
        specialty: "API Indexing & Software Walkthroughs",
        capabilityIndex: "Technical Writer Lead",
        workload: "Available",
        statusCode: "load-available"
    },
    {
        id: "STOD-28",
        name: "Siddhi Tiwari",
        role: "Marketing",
        specialty: "Funnel Conversion Optimization",
        capabilityIndex: "Growth Analytics Lead",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-29",
        name: "Tanushri",
        role: "Design",
        specialty: "Vector Micro-Interactions",
        capabilityIndex: "Creative Layout Designer",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-30",
        name: "Chachal Yadav",
        role: "Management",
        specialty: "Resource Screening & Matrix Alignment",
        capabilityIndex: "HR Operations Lead",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-31",
        name: "Nikhilesh Gyakwar",
        role: "Analytics",
        specialty: "Big Data ETL Pipeline Operations",
        capabilityIndex: "Data Pipeline Engineer",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-32",
        name: "Anchal Sukla",
        role: "Design",
        specialty: "High-Fidelity Interaction Prototyping",
        capabilityIndex: "UI Prototype Specialist",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-33",
        name: "Farhan Khan",
        role: "Logic",
        specialty: "Multithreaded Java Algorithms & OOPM",
        capabilityIndex: "Core Enterprise Java Dev",
        workload: "Critical Load",
        statusCode: "load-critical"
    },

    {
        id: "STOD-34",
        name: "Om Patel",
        role: "Frontend",
        specialty: "DOM Component Optimization",
        capabilityIndex: "React Framework Specialist",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-35",
        name: "Nitin",
        role: "Logic",
        specialty: "Asynchronous Systems & Event Loops",
        capabilityIndex: "Backend System Architect",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-36",
        name: "Yash Khushwah",
        role: "Analytics",
        specialty: "Image Processing & Pixel Segmentation",
        capabilityIndex: "Computer Vision Lead",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-37",
        name: "Monika Gurvani",
        role: "Design",
        specialty: "Fluid Accessibility Rules (WCAG)",
        capabilityIndex: "Lead UI Experience Engineer",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-38",
        name: "Ambar",
        role: "Infrastructure",
        specialty: "Container Security Orchestration",
        capabilityIndex: "Docker/Kubernetes Specialist",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-39",
        name: "Chetan Patel",
        role: "Infrastructure",
        specialty: "Server Failover Configurations",
        capabilityIndex: "System Operations Admin",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-40",
        name: "Pallavi",
        role: "Logic",
        specialty: "Relational Tables & Query Tuning",
        capabilityIndex: "Database Administrator",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-41",
        name: "Keerti Sharathe",
        role: "Quality Assurance",
        specialty: "Integration Testing Automation Grids",
        capabilityIndex: "QA Pipeline Architect",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-42",
        name: "Khushi Patel",
        role: "Frontend",
        specialty: "CSS Flexbox layouts & Viewports",
        capabilityIndex: "UI Interface Coder",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-43",
        name: "Shreyansh Mishra",
        role: "Logic",
        specialty: "Algorithm Script Parsing Models",
        capabilityIndex: "Python Developer Core",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-44",
        name: "Siddharth Prajapati",
        role: "Analytics",
        specialty: "Linear Regression & Feature Fitting",
        capabilityIndex: "ML Framework Architect",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-45",
        name: "Priya Lowanshi",
        role: "Logic",
        specialty: "End-to-End Application Integrity",
        capabilityIndex: "Full Stack System Architect",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-46",
        name: "Pooja",
        role: "Analytics",
        specialty: "KPI Trend Visualizations",
        capabilityIndex: "BI Analyst Specialist",
        workload: "Available",
        statusCode: "load-available"
    },

    {
        id: "STOD-47",
        name: "Rahul Mewada",
        role: "Frontend",
        specialty: "Modern Modular Markup Blocks",
        capabilityIndex: "Core Web Developer",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-48",
        name: "Deepak Verma",
        role: "Logic",
        specialty: "Middleware Token Verifications",
        capabilityIndex: "API Integration Coder",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-49",
        name: "Amit Solanki",
        role: "Frontend",
        specialty: "Asynchronous UI Rendering States",
        capabilityIndex: "React UI Programmer",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-50",
        name: "Preeti Malviya",
        role: "Design",
        specialty: "Color Typography Matrix Setup",
        capabilityIndex: "Asset Creative Specialist",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-51",
        name: "Sandeep Rathore",
        role: "Infrastructure",
        specialty: "Resource Load Balancing Matrix",
        capabilityIndex: "Site Reliability Architect",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-52",
        name: "Anjali Tiwari",
        role: "Quality Assurance",
        specialty: "Functional Edge Case Evaluation",
        capabilityIndex: "Product Stability Analyst",
        workload: "Available",
        statusCode: "load-available"
    },
    {
        id: "STOD-53",
        name: "Aman Vishwakarma",
        role: "Logic",
        specialty: "Object Mapping Models & Loops",
        capabilityIndex: "Backend Logic Coder",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-54",
        name: "Divya Raghuvanshi",
        role: "Analytics",
        specialty: "Data Pipeline Query Tracing",
        capabilityIndex: "Metrics Mining Specialist",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-55",
        name: "Gaurav Sen",
        role: "Infrastructure",
        specialty: "Cloud Architecture Deployment",
        capabilityIndex: "Infrastructure Support Team",
        workload: "Available",
        statusCode: "load-available"
    },
    {
        id: "STOD-56",
        name: "Jyoti Yadav",
        role: "Management",
        specialty: "Product Roadmap Optimization Metrics",
        capabilityIndex: "Agile Project Strategist",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-57",
        name: "Mayank Joshi",
        role: "Logic",
        specialty: "Server Performance Tuning Structures",
        capabilityIndex: "Backend Infrastructure Lead",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-58",
        name: "Kiran Carpenter",
        role: "Design",
        specialty: "User Flow Optimization Trees",
        capabilityIndex: "Interaction Journey Specialist",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-59",
        name: "Rishabh Jain",
        role: "Infrastructure",
        specialty: "Network Packet Inspection Protocols",
        capabilityIndex: "Security Perimeter Specialist",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-60",
        name: "Sakshi Agrawal",
        role: "Logic",
        specialty: "Scalable Logic Microservices",
        capabilityIndex: "Full Stack Delivery Lead",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-61",
        name: "Nisha Panwar",
        role: "Quality Assurance",
        specialty: "API Load Profiling Strategies",
        capabilityIndex: "Automation Suite Engineer",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-62",
        name: "Ravi Suryavanshi",
        role: "Logic",
        specialty: "Data Persistence Layer Scripts",
        capabilityIndex: "SQL Specialist Tech",
        workload: "Available",
        statusCode: "load-available"
    },
    {
        id: "STOD-63",
        name: "Karan Thakur",
        role: "Logic",
        specialty: "Concurrent Backend Threads Execution",
        capabilityIndex: "Server Script Programmer",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-64",
        name: "Neha Saxena",
        role: "Frontend",
        specialty: "Dynamic Grid Interactivity Formats",
        capabilityIndex: "Web Interface Coder",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-65",
        name: "Shubham Mewade",
        role: "Infrastructure",
        specialty: "System Integrity Log Verifications",
        capabilityIndex: "Diagnostics Specialist Team",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-66",
        name: "Kajal Jaiswal",
        role: "Design",
        specialty: "High Definition Digital Composites",
        capabilityIndex: "Visual Graphic Illustrator",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-67",
        name: "Pradeep Kushwaha",
        role: "Analytics",
        specialty: "Large Scale Cluster Computations",
        capabilityIndex: "Data Engineer Anchor",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-68",
        name: "Sonali Mishra",
        role: "Management",
        specialty: "Velocity Chart Project Analysis",
        capabilityIndex: "Agile Workflow Director",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-69",
        name: "Ashish Patidar",
        role: "Frontend",
        specialty: "Dynamic Data Binding Frameworks",
        capabilityIndex: "React UI Engineer",
        workload: "Available",
        statusCode: "load-available"
    },
    {
        id: "STOD-70",
        name: "Megha Sharma",
        role: "Documentation",
        specialty: "Release Node Technical Summaries",
        capabilityIndex: "Product Knowledge Expert",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-71",
        name: "Mohit Gome",
        role: "Infrastructure",
        specialty: "Corporate Intrusion Prevention Systems",
        capabilityIndex: "Network Protection Expert",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-72",
        name: "Ritu Lovanshi",
        role: "Quality Assurance",
        specialty: "Black Box Test Execution Cycles",
        capabilityIndex: "System Testing Expert",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-73",
        name: "Abhishek Raghu",
        role: "Analytics",
        specialty: "Predictive Behavior Data Mapping",
        capabilityIndex: "AI Pipeline Programmer",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-74",
        name: "Payal Gahlot",
        role: "Design",
        specialty: "Typography Responsive Fluid Rules",
        capabilityIndex: "Digital Interface Specialist",
        workload: "Available",
        statusCode: "load-available"
    },
    {
        id: "STOD-75",
        name: "Vijay Mandloi",
        role: "Logic",
        specialty: "Express Dynamic Endpoint Routing",
        capabilityIndex: "Node.js System Engineer",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-76",
        name: "Aachal Malviya",
        role: "Frontend",
        specialty: "Cross-Platform CSS Compatibility Grid",
        capabilityIndex: "UI Interface Designer",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-77",
        name: "Sanjay Pal",
        role: "Infrastructure",
        specialty: "Cloud Multi-Tenant Access Control",
        capabilityIndex: "Infrastructure Admin Specialist",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-78",
        name: "Rani Solanki",
        role: "Management",
        specialty: "Cross-Team Integration Pipelines",
        capabilityIndex: "Software Delivery Manager",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-79",
        name: "Manish Chouhan",
        role: "Logic",
        specialty: "Multithreaded Garbage Collection Tuning",
        capabilityIndex: "Java Solutions Architect",
        workload: "Available",
        statusCode: "load-available"
    },
    {
        id: "STOD-80",
        name: "Nikita Tomar",
        role: "Marketing",
        specialty: "Keyword Search Architecture Flows",
        capabilityIndex: "Search Specialist Anchor",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-81",
        name: "Aniket Mewada",
        role: "Analytics",
        specialty: "JSON Data Parsing Aggregations",
        capabilityIndex: "Analytics Specialist Team",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-82",
        name: "Poonam Rajput",
        role: "Design",
        specialty: "Fluid Interactive Vector Assets",
        capabilityIndex: "Lead UX Strategy Engineer",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-83",
        name: "Rajesh Parmar",
        role: "Infrastructure",
        specialty: "Deployment Monitoring Log Metrics",
        capabilityIndex: "SRE Automation Coder",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-84",
        name: "Swati Malvi",
        role: "Quality Assurance",
        specialty: "UI Latency Load Profiling Suite",
        capabilityIndex: "Performance Test Architect",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-85",
        name: "Vivek Nagar",
        role: "Logic",
        specialty: "Asynchronous File Stream Protocols",
        capabilityIndex: "Python Integration Engineer",
        workload: "Available",
        statusCode: "load-available"
    },
    {
        id: "STOD-86",
        name: "Deepali Jain",
        role: "Management",
        specialty: "Functional Spec Alignment Blueprints",
        capabilityIndex: "Enterprise Project Owner",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-87",
        name: "Harshil Vyas",
        role: "Frontend",
        specialty: "Dynamic Client Side State Trees",
        capabilityIndex: "Frontend Framework Lead",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-88",
        name: "Sheetal Verma",
        role: "Logic",
        specialty: "Secure API Gateway Validation Logic",
        capabilityIndex: "Secure Core Logic Engineer",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-89",
        name: "Sourabh Joshi",
        role: "Infrastructure",
        specialty: "Load Distribution Server Schemes",
        capabilityIndex: "Systems Solutions Principal",
        workload: "Available",
        statusCode: "load-available"
    },
    {
        id: "STOD-90",
        name: "Apeksha Patidar",
        role: "Design",
        specialty: "Mobile Native Fluid View Grids",
        capabilityIndex: "Product Layout Architect",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-91",
        name: "Vikram Rathore",
        role: "Logic",
        specialty: "Relational Index Partition Strategies",
        capabilityIndex: "Database Design Expert",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-92",
        name: "Komal Carpenter",
        role: "Quality Assurance",
        specialty: "End-to-End Visual Suite Testing",
        capabilityIndex: "Validation Systems Analyst",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-93",
        name: "Gopal Vishwakarma",
        role: "Analytics",
        specialty: "Time Series Predictive Computations",
        capabilityIndex: "Data Scientist Principal",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-94",
        name: "Shivani Lovanshi",
        role: "Frontend",
        specialty: "Pixel Perfect Design System Blocks",
        capabilityIndex: "Interface Engineering Lead",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-95",
        name: "Tarun Solanki",
        role: "Infrastructure",
        specialty: "Cloud Network Routing Configurations",
        capabilityIndex: "Infrastructure Support Specialist",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-96",
        name: "Aayushi Gome",
        role: "Management",
        specialty: "Resource Scheduling Optimization Matrices",
        capabilityIndex: "Talent Operations Lead",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-97",
        name: "Nitin Patidar",
        role: "Logic",
        specialty: "Asynchronous I/O Event Management",
        capabilityIndex: "Backend Logic Coder",
        workload: "Available",
        statusCode: "load-available"
    },
    {
        id: "STOD-98",
        name: "Bhumi Lovanshi",
        role: "Design",
        specialty: "Responsive Layout Architecture Vectors",
        capabilityIndex: "Digital Asset Illustrator",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-99",
        name: "Hemant Mewade",
        role: "Infrastructure",
        specialty: "Firewall Configuration & Port Scanning",
        capabilityIndex: "Cybersecurity Analyst",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-100",
        name: "Yogita Rajput",
        role: "Quality Assurance",
        specialty: "Defect Tracking & Lifecycle Control",
        capabilityIndex: "Automation Systems Expert",
        workload: "Optimal",
        statusCode: "load-optimal"
    },
    {
        id: "STOD-101",
        name: "Prashant Pal",
        role: "Analytics",
        specialty: "Neural Model Evaluation Architectures",
        capabilityIndex: "ML Pipeline Engineer",
        workload: "Critical Load",
        statusCode: "load-critical"
    },
    {
        id: "STOD-102",
        name: "Meenal Choudhary",
        role: "Management",
        specialty: "Sprint Deliverable Tracking Standards",
        capabilityIndex: "Technical Team Recruiter",
        workload: "Available",
        statusCode: "load-available"
    },
    {
        id: "STOD-103",
        name: "Kunal Verma",
        role: "Logic",
        specialty: "Dynamic Variable Core Logic Frameworks",
        capabilityIndex: "Full Stack Engineer Associate",
        workload: "Critical Load",
        statusCode: "load-critical"
    }
];

function filterTalentGrid(targetFilter, activeElement) {
    // Dynamic Class Toggling Matrix Control
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    activeElement.classList.add('active');

    const canvas = document.getElementById('resourceGridCanvas');
    const totalCountTracker = document.getElementById('totalCount');
    
    let injectedHTMLBuffer = "";
    let matchingRecordCount = 0;

    talentDatabaseMatrix.forEach(profile => {
        if (targetFilter === 'all' || profile.role.toLowerCase() === targetFilter.toLowerCase()) {
            matchingRecordCount++;
            injectedHTMLBuffer += `
                <div class="resource-item">
                    <div class="profile-meta">
                        <h3>${profile.name}</h3>
                        <p>Focus Area: <strong>${profile.specialty}</strong></p>
                    </div>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <span class="metric-badge">${profile.capabilityIndex}</span>
                        <span class="workload-indicator ${profile.statusCode}">${profile.workload}</span>
                    </div>
                </div>
            `;
        }
    });
    canvas.innerHTML = injectedHTMLBuffer;
    totalCountTracker.innerText = `${matchingRecordCount} Active`;
}

window.onload = function() {
    filterTalentGrid('all', document.querySelectorAll('.filter-btn')[0]);
};