export const INDUSTRY_PRESETS = [
  {
    id: "manufacturing",
    name: "Manufacturing & Supply",
    icon: "🏭",
    badgeClass: "ind-manufacturing",
    description: "Component quotes, machinery specs, batch lead times & PO approvals.",
    customFields: ["Part Number", "Quantity Units", "Spec Tolerance", "Target Delivery Date"],
    sampleCalls: [
      {
        id: "call-mfg-01",
        title: "CNC High-Precision Valve Component Order Quote",
        client: "Apex Engineering Solutions",
        rep: "Rahul Sharma (Sales Engineering)",
        duration: "03:42",
        industry: "manufacturing",
        sentiment: "Positive / High Priority",
        date: "2026-08-07 14:30",
        audioSrc: "sample_mfg_valve_quote.mp3",
        waveform: [12, 28, 45, 82, 60, 95, 40, 70, 85, 30, 90, 65, 48, 88, 55, 30, 78, 92, 40, 60, 25, 80, 50, 95, 35, 75, 42, 85, 60, 30],
        summary: "Client inquired about bulk pricing for 500 units of Grade 316 Stainless Steel CNC Valves (Part #VLV-316X). Requested a formal quotation with 15-day delivery slot to Pune Plant. Confirmed tolerance requirement is +/- 0.02mm.",
        actionItems: [
          "Send formal PDF quotation for 500 units of #VLV-316X by 5:00 PM.",
          "Verify alloy inventory with raw material store in Chakan plant.",
          "Schedule technical validation call with QC Lead for tolerance certification."
        ],
        extractedMetadata: {
          "Part #": "VLV-316X",
          "Quantity": "500 Units",
          "Budget": "₹4,50,000",
          "Target Location": "Pune Industrial Park"
        },
        transcript: [
          { speaker: "Agent (Rahul)", time: "0:05", text: "Hello, Rahul speaking from Apex Precision Engineering. How can I assist your team today?" },
          { speaker: "Customer (Anand - Apex Engg)", time: "0:14", text: "Hi Rahul, we need urgent pricing for 500 pieces of Stainless Steel 316 CNC Machined Valves, part reference VLV-316X." },
          { speaker: "Agent (Rahul)", time: "0:28", text: "Understood Anand. We have raw billet stock available for SS316. What tolerance standard does your drawing specify?" },
          { speaker: "Customer (Anand - Apex Engg)", time: "0:42", text: "Our drawing specifies +/- 0.02mm. If you can deliver within 15 working days to Pune plant, we will issue the Purchase Order today." },
          { speaker: "Agent (Rahul)", time: "1:15", text: "Perfect. I am calculating the volume discount now. I will email the signed quotation with delivery timeline in 1 hour." }
        ]
      }
    ]
  },
  {
    id: "realestate",
    name: "Real Estate & Commercial",
    icon: "🏢",
    badgeClass: "ind-realestate",
    description: "Property criteria, site inspection bookings, lease terms & budget limits.",
    customFields: ["Property Type", "Carpet Area", "Budget Range", "Target Possession"],
    sampleCalls: [
      {
        id: "call-re-01",
        title: "Commercial Office Floor Lease & Inspection Booking",
        client: "Vanguard Tech Labs",
        rep: "Priya Malhotra (Commercial Leasing)",
        duration: "04:15",
        industry: "realestate",
        sentiment: "Warm / High Intent",
        date: "2026-08-07 11:15",
        audioSrc: "sample_re_lease.mp3",
        waveform: [20, 50, 75, 40, 90, 85, 60, 30, 95, 70, 80, 45, 60, 85, 90, 35, 65, 80, 50, 75, 90, 60, 40, 85, 70, 95, 45, 60, 30, 80],
        summary: "Client is looking for 8,500 sq.ft furnished office space in Cyber Tech City for an IT team of 90 engineers. Preferred budget is ₹110/sq.ft. Booked physical site visit for Saturday 11:00 AM.",
        actionItems: [
          "Email layout plan & floor video walkthrough for Tower B 4th Floor.",
          "Confirm entry clearance with building security manager for Saturday site visit.",
          "Prepare draft LOI (Letter of Intent) with 3-year lock-in terms."
        ],
        extractedMetadata: {
          "Area": "8,500 sq.ft Furnished",
          "Budget": "₹110 / sq.ft",
          "Team Size": "90 Seats",
          "Site Visit": "Sat, Aug 9 at 11:00 AM"
        },
        transcript: [
          { speaker: "Agent (Priya)", time: "0:02", text: "Good morning! You've reached Prime Commercial Realty. Priya here." },
          { speaker: "Customer (Vikram - Vanguard Tech)", time: "0:12", text: "Hi Priya, we are expanding our R&D team and need around 8,000 to 9,000 sq.ft plug-and-play office in Cyber Tech City." },
          { speaker: "Agent (Priya)", time: "0:30", text: "We have an exceptional floor in Tower B, 8,500 sq.ft fully fitted with 90 workstations, 4 cabins, and cafeteria." },
          { speaker: "Customer (Vikram - Vanguard Tech)", time: "0:52", text: "That matches our exact requirement. What is the asking rent and can we visit this Saturday morning?" },
          { speaker: "Agent (Priya)", time: "1:20", text: "Asking rent is ₹110 per sq.ft inclusive of maintenance. I have booked your site visit for Saturday 11:00 AM." }
        ]
      }
    ]
  },
  {
    id: "b2bsales",
    name: "B2B Enterprise Sales",
    icon: "💼",
    badgeClass: "ind-sales",
    description: "Enterprise software demos, ROI discussions, stakeholder approvals & pricing.",
    customFields: ["User Licenses", "Contract Value", "Decision Maker", "Competitor Replacement"],
    sampleCalls: [
      {
        id: "call-b2b-01",
        title: "AI CRM Enterprise Platform Demo & License Pricing",
        client: "Global Logistics Corp",
        rep: "Amit Roy (Enterprise AE)",
        duration: "05:10",
        industry: "b2bsales",
        sentiment: "Very Interested / Proposal Stage",
        date: "2026-08-07 09:45",
        audioSrc: "sample_b2b_crm_demo.mp3",
        waveform: [35, 65, 80, 45, 95, 60, 85, 90, 40, 75, 85, 95, 50, 70, 85, 90, 60, 40, 95, 75, 85, 50, 90, 65, 45, 80, 95, 60, 70, 40],
        summary: "VP of Operations reviewed AI Call CRM demo. Impressed by automatic call transcription and CRM note generation. Wants 40 user licenses for inside sales team with custom ERP API integration.",
        actionItems: [
          "Send customized Enterprise proposal for 40 seats with SLA terms.",
          "Arrange technical scoping call with Solutions Architect for ERP API sync.",
          "Provide security compliance documentation (ISO 27001 / SOC 2)."
        ],
        extractedMetadata: {
          "Seats": "40 Enterprise Users",
          "ACV Value": "₹14,40,000 / year",
          "Integration": "SAP / Custom REST API",
          "Closing Target": "End of Q3"
        },
        transcript: [
          { speaker: "Agent (Amit)", time: "0:04", text: "Thanks for joining the demo today, Mr. Kapoor. How did your team find the automated call summary feature?" },
          { speaker: "Customer (Mr. Kapoor - Global Logistics)", time: "0:20", text: "Amit, the speech-to-notes conversion is extremely impressive. It saves our reps at least 2 hours of manual entry every day." },
          { speaker: "Agent (Amit)", time: "0:45", text: "That is our core goal! We can roll this out for your 40 sales reps with seamless lead auto-routing." },
          { speaker: "Customer (Mr. Kapoor - Global Logistics)", time: "1:10", text: "Send over the annual agreement for 40 seats. We also want to confirm SAP integration capabilities." }
        ]
      }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare & Equipment",
    icon: "🩺",
    badgeClass: "ind-healthcare",
    description: "Medical device servicing, hospital intake, urgent recalibration & compliance.",
    customFields: ["Hospital Name", "Equipment Model", "Urgency Tier", "Service Contract #"],
    sampleCalls: [
      {
        id: "call-hc-01",
        title: "ICU Ventilator Annual Maintenance & Calibration Request",
        client: "Sunrise Multi-Specialty Hospital",
        rep: "Dr. Kavita Rao (Biomedical Support)",
        duration: "02:50",
        industry: "healthcare",
        sentiment: "Urgent / Action Required",
        date: "2026-08-07 08:30",
        audioSrc: "sample_hc_service.mp3",
        waveform: [50, 90, 85, 95, 70, 80, 90, 60, 95, 85, 40, 75, 90, 60, 85, 95, 70, 80, 90, 65, 40, 85, 95, 70, 60, 80, 90, 50, 75, 60],
        summary: "Head of Biomedical requested priority calibration for 3 ICU Ventilators (Model Vent-Pro 900) before NABH audit on Monday. Assigned Field Senior Engineer Suresh for same-day 3:00 PM visit.",
        actionItems: [
          "Dispatch Field Engineer Suresh with calibration kit to Sunrise Hospital ICU.",
          "Issue digital calibration certificate upon completion for NABH audit team.",
          "Update AMC (Annual Maintenance Contract) records in hospital portal."
        ],
        extractedMetadata: {
          "Device Model": "Vent-Pro 900 (3 Units)",
          "Urgency": "High (NABH Audit Prep)",
          "Engineer Assigned": "Suresh M.",
          "Dispatch Time": "Today at 3:00 PM"
        },
        transcript: [
          { speaker: "Agent (Dr. Kavita)", time: "0:03", text: "Biomedical Support Desk. How can we assist Sunrise Hospital today?" },
          { speaker: "Customer (Nilesh - BioMed Head)", time: "0:15", text: "Urgent issue Kavita. We have 3 ICU ventilators needing annual calibration certificates for NABH audit starting Monday." },
          { speaker: "Agent (Dr. Kavita)", time: "0:35", text: "Not a problem Nilesh. I am marking this urgent and assigning Senior Engineer Suresh. He will arrive by 3:00 PM today." }
        ]
      }
    ]
  },
  {
    id: "logistics",
    name: "Logistics & Fleet Dispatch",
    icon: "🚚",
    badgeClass: "ind-logistics",
    description: "Freight tracking, container arrival windows, driver updates & port clearance.",
    customFields: ["Container ID", "Route Highway", "Origin / Destination", "ETA Window"],
    sampleCalls: [
      {
        id: "call-log-01",
        title: "Interstate Freight Shipment Status & Port Delivery Window",
        client: "Pacific Ocean Logistics",
        rep: "Manish Verma (Dispatch Ops)",
        duration: "03:15",
        industry: "logistics",
        sentiment: "Neutral / Tracking Update",
        date: "2026-08-07 15:10",
        audioSrc: "sample_log_shipment.mp3",
        waveform: [25, 45, 65, 80, 50, 70, 85, 60, 40, 75, 85, 50, 65, 80, 90, 45, 60, 75, 85, 50, 40, 70, 85, 60, 50, 75, 80, 40, 60, 30],
        summary: "Driver reported highway clearance at NH48 toll booth. Container #TGH-9982 carrying electronic components is on schedule to reach JNPT Port Gate #3 by 7:30 PM. Customs agent notified.",
        actionItems: [
          "Send GPS live tracking link to Pacific Ocean Logistics ops manager.",
          "Notify JNPT Gate 3 supervisor regarding 7:30 PM container arrival.",
          "Verify bill of lading document upload on customs portal."
        ],
        extractedMetadata: {
          "Container #": "TGH-9982",
          "Current Highway": "NH-48 Toll Gate",
          "Destination": "JNPT Port Gate 3",
          "ETA": "Today 7:30 PM"
        },
        transcript: [
          { speaker: "Agent (Manish)", time: "0:05", text: "Dispatch Center, Manish here. Checking freight updates for Container TGH-9982." },
          { speaker: "Customer (Sunil - Fleet Manager)", time: "0:18", text: "Hi Manish, trailer crossed NH48 toll booth 20 minutes ago. Traffic is smooth." },
          { speaker: "Agent (Manish)", time: "0:38", text: "Excellent. Revised ETA for JNPT Port Gate 3 is 7:30 PM. I will share live GPS tracking with the client." }
        ]
      }
    ]
  }
];

export const INITIAL_LEADS = [
  {
    id: "lead-101",
    name: "Anand Deshmukh",
    company: "Apex Engineering Solutions",
    phone: "+91 98230 44120",
    email: "anand@apexengg.in",
    industry: "manufacturing",
    status: "Warm",
    nextFollowUpAt: "2026-08-08T11:00:00.000Z",
    source: "Inbound Call",
    notes: [
      "Inquired about 500 units of SS316 Valves (Part #VLV-316X). Requested +/- 0.02mm tolerance certification."
    ],
    interactions: [
      {
        type: "Call",
        summary: "Discussed bulk component order quote. Agreed on 15-day delivery window to Pune plant.",
        outcome: "Interested",
        date: "2026-08-07T14:30:00.000Z"
      }
    ]
  },
  {
    id: "lead-102",
    name: "Vikram Mehta",
    company: "Vanguard Tech Labs",
    phone: "+91 99701 88340",
    email: "vikram@vanguardtech.com",
    industry: "realestate",
    status: "Proposal",
    nextFollowUpAt: "2026-08-09T11:00:00.000Z",
    source: "Property Portal",
    notes: [
      "Needs 8,500 sq.ft furnished office for 90 IT engineers in Cyber Tech City. Budget around ₹110/sq.ft."
    ],
    interactions: [
      {
        type: "Call",
        summary: "Booked physical site visit for Saturday 11:00 AM at Tower B 4th Floor.",
        outcome: "Interested",
        date: "2026-08-07T11:15:00.000Z"
      }
    ]
  },
  {
    id: "lead-103",
    name: "Rajesh Kapoor",
    company: "Global Logistics Corp",
    phone: "+91 98112 55900",
    email: "r.kapoor@globallogistics.com",
    industry: "b2bsales",
    status: "Warm",
    nextFollowUpAt: "2026-08-10T14:00:00.000Z",
    source: "Web Demo Request",
    notes: [
      "Enterprise CRM Demo completed. Wants 40 user licenses with SAP/REST API auto call sync."
    ],
    interactions: [
      {
        type: "Call",
        summary: "Reviewed automated speech-to-notes feature. Requested commercial proposal for 40 licenses.",
        outcome: "Interested",
        date: "2026-08-07T09:45:00.000Z"
      }
    ]
  },
  {
    id: "lead-104",
    name: "Nilesh Joshi",
    company: "Sunrise Multi-Specialty Hospital",
    phone: "+91 98900 12345",
    email: "biomed@sunrisehospital.org",
    industry: "healthcare",
    status: "New",
    nextFollowUpAt: "2026-08-08T09:30:00.000Z",
    source: "Support Hotline",
    notes: [
      "Urgent calibration required for 3 ICU Ventilators before NABH audit on Monday."
    ],
    interactions: [
      {
        type: "Call",
        summary: "Assigned Field Senior Engineer Suresh for same-day 3:00 PM calibration visit.",
        outcome: "Callback",
        date: "2026-08-07T08:30:00.000Z"
      }
    ]
  }
];
